import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Animation fluide moderne avec requestAnimationFrame
    const smoothScrollToTop = () => {
      const startPosition = window.scrollY;
      const duration = 800; // Durée en millisecondes
      const startTime = performance.now();

      const easeInOutCubic = (t) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeInOutCubic(progress);
        
        const currentPosition = startPosition * (1 - easeProgress);
        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    // Délai léger pour une transition plus naturelle
    setTimeout(() => {
      smoothScrollToTop();
    }, 150);

  }, [pathname]);

  return null;
};

export default ScrollToTop;