"use client";

import { useMemo, useState } from "react";
import { contactPageContent } from "@/content/contact";
import { Locale } from "@/lib/i18n";

type ContactFormProps = {
  locale: Locale;
};

type FormState = {
  name: string;
  email: string;
  message: string;
  company: string;
};

type SubmitStatus = "idle" | "success" | "error";

export function ContactForm({ locale }: ContactFormProps) {
  const content = contactPageContent[locale];

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    company: "",
  });

  const [startedAt] = useState<number>(() => Date.now());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const isValid = useMemo(() => {
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    return (
      name.length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      message.length >= 10
    );
  }, [form]);

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
      company: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("idle");
    setFeedbackMessage("");

    if (!isValid) {
      setStatus("error");
      setFeedbackMessage(content.form.validationError);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          startedAt,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to send");
      }

      resetForm();
      setStatus("success");
      setFeedbackMessage(content.form.success);
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error && error.message
          ? error.message
          : content.form.error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-black/10 p-8">
      <h2 className="text-2xl font-semibold">{content.form.title}</h2>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <input
          type="text"
          placeholder={content.form.name}
          className="w-full rounded-md border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />

        <input
          type="email"
          placeholder={content.form.email}
          className="w-full rounded-md border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <textarea
          placeholder={content.form.message}
          rows={6}
          className="w-full rounded-md border border-black/10 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
        />

        <div className="hidden" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>

        <p className="text-sm text-black/60">{content.form.note}</p>

        {status !== "idle" && (
          <div
            className={`rounded-md px-4 py-3 text-sm ${
              status === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-700"
            }`}
          >
            {feedbackMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? content.form.sending : content.form.submit}
        </button>
      </form>
    </div>
  );
}
