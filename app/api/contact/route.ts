import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type RateLimitEntry = {
  count: number;
  firstRequestAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const ipStore = new Map<string, RateLimitEntry>();

function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  return "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = ipStore.get(ip);

  if (!existing) {
    ipStore.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  if (now - existing.firstRequestAt > RATE_LIMIT_WINDOW_MS) {
    ipStore.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  existing.count += 1;
  ipStore.set(ip, existing);

  return existing.count > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, company, startedAt } = body;

    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const trimmedName = String(name).trim();
    const trimmedEmail = String(email).trim();
    const trimmedMessage = String(message).trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      trimmedName.length < 2 ||
      !emailRegex.test(trimmedEmail) ||
      trimmedMessage.length < 10
    ) {
      return NextResponse.json(
        { error: "Invalid form fields" },
        { status: 400 }
      );
    }

    if (!startedAt || Date.now() - Number(startedAt) < 3000) {
      return NextResponse.json(
        { error: "Submitted too quickly" },
        { status: 400 }
      );
    }

    const ip = getClientIp(req);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Innovatec nettside" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: trimmedEmail,
      subject: `[Nettside] Kontakt fra ${trimmedName}`,
      text: `
Navn: ${trimmedName}
E-post: ${trimmedEmail}

Melding:
${trimmedMessage}
      `,
      html: `
        <p><strong>Navn:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>E-post:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Melding:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
