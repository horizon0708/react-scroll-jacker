declare module 'stickybits';

declare interface ScrollJackerProps {
  children?: any;
  height: number;
  injectChildren? : {};
  stickyOffset? : number;
  style?: any;
}

declare interface ScrollJackerState {
  childrenCount: number;
  currentPage: number;
}

