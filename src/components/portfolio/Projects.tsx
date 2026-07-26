import { Github } from "lucide-react";

const projects = [
  {
    title: "POS & Inventory Management System",
    kind: "Personal Project",
    description:
      "Concurrency-safe POS with row-level locking (lockForUpdate) to prevent race conditions during simultaneous cashier sales. FIFO/LIFO batch inventory with multi-unit conversion, plus automated monthly snapshots via Artisan.",
    tags: ["Laravel", "MySQL", "Repository", "Service Layer", "Strategy"],
  },
  {
    title: "Educational Center Management System",
    kind: "Personal Project",
    description:
      "Manages student attendance, weekly schedules, tuition payments, and vacations for a learning center — with academic year, grade, and stage-based configuration.",
    tags: ["Laravel", "MySQL", "MVC"],
  },
  {
    title: "Real-time Communication Platform",
    kind: "Client Work · Tqnia",
    description:
      "Low-latency messaging backend for mobile apps built with Laravel Reverb, Redis, Queues, and WebSockets — designed for high concurrency and reliability.",
    tags: ["Laravel Reverb", "WebSockets", "Redis", "Queues"],
  },
  {
    title: "E-commerce Platform",
    kind: "Client Work · MassFluence",
    description:
      "Full e-commerce platform (products, cart, orders) built with Laravel and React — including admin tooling for content and catalog management.",
    tags: ["Laravel", "React", "REST API"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Selected work
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Projects.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <p className="text-xs font-medium uppercase tracking-widest text-primary">
                {p.kind}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://github.com/Eng-Ahmed-Ibrahim"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="h-4 w-4" />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
