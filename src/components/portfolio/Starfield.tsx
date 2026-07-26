import { useMemo } from "react";

type Star = {
  top: string;
  left: string;
  size: number;
  delay: string;
  opacity: number;
};

function makeStars(count: number, seed: number): Star[] {
  // Deterministic pseudo-random so SSR/CSR match.
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: count }, () => ({
    top: `${rand() * 100}%`,
    left: `${rand() * 100}%`,
    size: rand() < 0.85 ? 1 : rand() < 0.95 ? 1.5 : 2.5,
    delay: `${(rand() * 5).toFixed(2)}s`,
    opacity: 0.3 + rand() * 0.7,
  }));
}

export function Starfield({ density = 120 }: { density?: number }) {
  const stars = useMemo(() => makeStars(density, 42), [density]);
  return (
    <div className="starfield" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          key={i}
          className="twinkle absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: star.delay,
            boxShadow: star.size > 1.5 ? "0 0 6px rgba(255,255,255,0.8)" : undefined,
          }}
        />
      ))}
    </div>
  );
}
