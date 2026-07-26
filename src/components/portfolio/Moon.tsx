export function Moon({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute right-6 top-10 md:right-16 md:top-16 ${className}`}
      aria-hidden="true"
    >
      <div className="relative">
        {/* Glow layers - simulate the moon casting light */}
        <div className="absolute inset-0 -m-12 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-slate-100/10 blur-3xl" />
        <div className="absolute inset-0 -m-6 animate-[pulse_4s_ease-in-out_infinite] rounded-full bg-slate-100/25 blur-2xl" />
        <div className="absolute inset-0 -m-2 rounded-full bg-slate-50/40 blur-lg" />

        {/* Moon body */}
        <svg
          width="90"
          height="90"
          viewBox="0 0 100 100"
          className="relative h-16 w-16 animate-[spin_18s_linear_infinite] md:h-24 md:w-24"
        >
          <defs>
            <radialGradient id="moonBody" cx="35%" cy="35%" r="70%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="60%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </radialGradient>
          </defs>

          <circle cx="50" cy="50" r="46" fill="url(#moonBody)" />

          {/* Craters */}
          <circle cx="34" cy="38" r="8" fill="#cbd5e1" opacity="0.6" />
          <circle cx="60" cy="30" r="5" fill="#cbd5e1" opacity="0.5" />
          <circle cx="66" cy="58" r="10" fill="#cbd5e1" opacity="0.55" />
          <circle cx="40" cy="66" r="4" fill="#cbd5e1" opacity="0.5" />
          <circle cx="52" cy="50" r="3" fill="#cbd5e1" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}