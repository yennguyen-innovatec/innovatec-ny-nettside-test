import { Container } from "@/components/layout/container";

type IntroSectionProps = {
  title: string;
  description: string;
};

export function IntroSection({ title, description }: IntroSectionProps) {
  return (
    <section className="py-12">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-black/75">{description}</p>
        </div>
      </Container>
    </section>
  );
}
