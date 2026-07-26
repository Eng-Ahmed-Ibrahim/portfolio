const roles = [
  {
    company: "Tqnia for Information Technology",
    title: "Backend Developer (Full-time)",
    period: "Mar 2024 — Oct 2025",
    location: "Remote · Riyadh, Saudi Arabia",
    points: [
      "Delivered 10+ production-ready web applications across Real Estate, ERP, Booking, and Business Management systems used by clients in Saudi Arabia.",
      "Designed and maintained scalable RESTful APIs supporting thousands of daily business operations for property management, rentals, and administrative workflows.",
      "Built a real-time communication platform using Laravel Reverb, Redis, Queues, and WebSockets — enabling low-latency messaging for mobile applications.",
      "Refactored legacy ERP modules following SOLID principles and design patterns, reducing code duplication and improving maintainability.",
      "Optimized high-traffic database queries by eliminating N+1 problems, adding indexes, and reducing response time on critical endpoints.",
    ],
  },
  {
    company: "MassFluence",
    title: "Backend Developer (Part-time)",
    period: "May 2023 — Aug 2025",
    location: "Remote · Lebanon",
    points: [
      "Built a full e-commerce platform using Laravel and React (products, cart, orders).",
      "Built a personal branding website for a public figure, with a custom admin dashboard to manage content.",
      "Built CMS systems for multiple clients, enabling non-technical users to manage images, text, and page content without touching code.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Where I've worked.
          </h2>
        </div>

        <ol className="relative space-y-10 border-l border-border pl-6">
          {roles.map((r) => (
            <li key={r.company} className="relative">
              <span className="absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-foreground">
                  {r.title}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {r.company}
                  </span>
                </h3>
                <span className="text-sm text-muted-foreground">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{r.location}</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground md:text-base">
                {r.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
