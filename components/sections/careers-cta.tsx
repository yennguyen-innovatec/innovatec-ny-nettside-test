import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import careersImage from "@/public/careers-team.jpg";

type CareersCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CareersCta({
  title,
  description,
  buttonLabel,
  buttonHref,
}: CareersCtaProps) {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-center md:text-left mb-8 text-3xl font-medium tracking-tight text-[var(--primary)] md:mb-12 md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/75">
              {description}
            </p>

            <Link
              href={buttonHref}
              className="mt-8 inline-flex rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              {buttonLabel}
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl">
            <Image
              src={careersImage}
              alt={title}
              className="h-full w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
