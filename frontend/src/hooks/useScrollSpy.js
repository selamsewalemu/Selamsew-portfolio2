import { useState, useEffect } from 'react';

/**
 * useScrollSpy — returns the id of the currently active section.
 * @param {string[]} sectionIds  Array of section element ids to spy on
 * @param {number}   offset      Pixel offset from top (e.g. navbar height), default 80
 */
function useScrollSpy(sectionIds, offset = 80) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;
      let current = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}

export default useScrollSpy;
