/// <reference types="react-scripts" />

// IntersectionObserver is not defined
export {};
declare global {
  interface Window {
    IntersectionObserver: typeof IntersectionObserver;
  }
}
