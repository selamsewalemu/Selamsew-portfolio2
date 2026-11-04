import { useRef, useEffect, useState } from 'react';

/**
 * AnimatedSection — wraps children with an IntersectionObserver that adds
 * a 'visible' class (triggering fadeInUp @keyframe) when entering viewport.
 * Props: children, className, delay (number, ms)
 */
function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? 'section-visible' : ''}`.trim()}
      style={{
        opacity: visible ? undefined : 0,
        animationDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedSection;
