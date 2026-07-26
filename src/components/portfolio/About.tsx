export function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_2fr] md:py-28">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            About
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            A quick intro.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            I'm a Backend Engineer based in Cairo, Egypt, with over three years
            of experience designing and building scalable Laravel applications
            for production environments — across Real Estate, ERP, E-commerce,
            and real-time communication systems.
          </p>
          <p>
            My focus is high-concurrency systems, RESTful APIs, WebSockets,
            Redis, Queues, and database optimization — with a strong emphasis on
            software architecture, performance, and maintainable design.
          </p>
          <p>
            I hold a Bachelor's degree in Computer Science from Thebes Academy
            (2021 – 2025).
          </p>
        </div>
      </div>
    </section>
  );
}
