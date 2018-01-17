declare module 'stickybits';

declare interface ScrollJackerProps {
  children?: any;
  scrollSensitivity?: number;
  injectChildren? : {};
  stickyOffset? : number;
  style?: any;
  className?: string;
}

declare interface ScrollJackerState {
  childrenCount: number;
  currentPage: number;
}

