const groups = [
  {
    label: "Backend",
    items: [
      "Laravel",
      "RESTful APIs",
      "MySQL",
      "MVC",
      "Queues",
      "Redis",
      "Caching",
      "Task Scheduling",
      "WebSockets (Laravel Reverb)",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind", "Bootstrap"],
  },
  {
    label: "Concepts",
    items: [
      "Software Architecture",
      "SOLID",
      "Repository",
      "Factory",
      "Strategy",
      "Singleton",
      "Clean Code",
      "DB Indexing & Optimization",
    ],
  },
  {
    label: "Dev Tools & Security",
    items: ["Git", "GitHub", "Postman", "Composer", "XSS / CSRF / SQLi awareness"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Skills
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            What I work with.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="text-sm font-semibold text-foreground">{g.label}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="rounded-full border border-border bg-card px-3 py-1 text-sm text-muted-foreground"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Languages:</span> Arabic
          (Native) · English (Professional)
        </div>
      </div>
    </section>
  );
}
