export const heroEntranceClasses = (delay = 0): string =>
  `hero-enter${delay ? ` hero-enter--delay-${Math.min(delay, 3)}` : ''}`;
