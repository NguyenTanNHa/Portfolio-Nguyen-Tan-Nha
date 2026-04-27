import { useState, useEffect } from 'react';

export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let currentId = '';
      
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          if (rect.top <= offset && rect.bottom >= offset) {
            currentId = id;
            break;
          }
        }
      }
      
      // Default to first if none match but we're at the top
      if (!currentId && window.scrollY === 0) {
        currentId = sectionIds[0];
      }

      // Default to last if we've scrolled to the bottom
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 2) {
        currentId = sectionIds[sectionIds.length - 1];
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger immediately to set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset, activeId]);

  return activeId;
}
