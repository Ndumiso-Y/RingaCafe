import { useRef, useEffect, useState } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

export default function HorizontalScroll({
  children,
  autoScroll = true,
  autoScrollInterval = 3000,
  showArrows = true,
  className = ''
}) {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 1
    );
  };

  // Scroll to next item
  const scrollNext = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.scroll-item')?.offsetWidth || 300;
    const gap = 24; // 1.5rem = 24px
    container.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
  };

  // Scroll to previous item
  const scrollPrev = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.querySelector('.scroll-item')?.offsetWidth || 300;
    const gap = 24;
    container.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!autoScroll || isHovering) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      // Check if we're at the end
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
        // Reset to start
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll to next
        scrollNext();
      }
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, isHovering]);

  // Update scroll indicators on scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    checkScroll();
    container.addEventListener('scroll', checkScroll);

    // Check on resize too
    const resizeObserver = new ResizeObserver(checkScroll);
    resizeObserver.observe(container);

    return () => {
      container.removeEventListener('scroll', checkScroll);
      resizeObserver.disconnect();
    };
  }, [children]);

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Scroll Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {children}
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          {/* Left Arrow */}
          {canScrollLeft && (
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border border-black/10 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ringa-red"
              aria-label="Scroll left"
            >
              <HiChevronLeft className="w-6 h-6 text-slate-950" />
            </button>
          )}

          {/* Right Arrow */}
          {canScrollRight && (
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white border border-black/10 shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ringa-red"
              aria-label="Scroll right"
            >
              <HiChevronRight className="w-6 h-6 text-slate-950" />
            </button>
          )}
        </>
      )}
    </div>
  );
}
