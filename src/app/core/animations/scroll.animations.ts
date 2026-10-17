import { REVEAL_THRESHOLD } from './animation.constants';

export const scrollRevealOptions: IntersectionObserverInit = {
  root: null,
  rootMargin: '0px 0px -48px',
  threshold: REVEAL_THRESHOLD,
};
