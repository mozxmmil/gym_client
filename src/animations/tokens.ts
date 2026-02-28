// animations/tokens.ts
export const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  snappy: [0.34, 1.56, 0.64, 1.0] as const,
  decelerate: [0.0, 0.0, 0.2, 1.0] as const,
  accelerate: [0.4, 0.0, 1.0, 1.0] as const,
  spring: { type: "spring" as const, stiffness: 300, damping: 30 },
  gentleSpring: { type: "spring" as const, stiffness: 120, damping: 20 },
};

export const duration = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.5,
  slow: 0.7,
  crawl: 1.0,
  cinematic: 1.4,
};
