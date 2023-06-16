export interface HeroProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
}

export function Hero(props: HeroProps) {
  const { title, subtitle } = props;

  return (
    <section>
      <h1 className="text-white text-center font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <h2 className="mt-2 text-neutral-100 text-center font-bold tracking-tight text-lg sm:text-2xl lg:text-3xl">
        {subtitle}
      </h2>
    </section>
  );
}

export default Hero;
