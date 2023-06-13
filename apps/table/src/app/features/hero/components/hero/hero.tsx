export function Hero() {
  return (
    <section>
      <h1 className="text-white text-center font-bold tracking-tight text-3xl sm:text-5xl lg:text-6xl">
        Select a user and see his posts
      </h1>
      <p className="mt-2 text-neutral-100 text-center font-bold tracking-tight text-lg sm:text-2xl lg:text-3xl">
        After that you can select a post and see its comments{' '}
        <span role="img" aria-label="Shushing Face">
          🤫
        </span>
      </p>
    </section>
  );
}

export default Hero;
