import { useState, useEffect } from 'react';

/**
 * useIntersectionObserver — returns isVisible (boolean) when the given ref
 * enters the viewport.
 * @param {React.RefObject} ref
 * @param {{ threshold?: number, rootMargin?: string }} options
 */
function useIntersectionObserver(
  ref,
  options = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.rootMargin]);

  return isVisible;
}

export default useIntersectionObserver;
