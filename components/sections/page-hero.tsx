import { Container } from "@/components/layout/container";

type PageHeroProps = {
  title: string;
  description: string;
};

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
          <p className="mt-5 text-lg leading-8 text-black/75">{description}</p>
        </div>
      </Container>
    </section>
  );
}
