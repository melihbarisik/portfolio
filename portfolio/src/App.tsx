import { useRef, useEffect, useState } from 'react';
import './App.css';
import AboutMe from './pages/about-me';
import Experiences from './pages/experiences';
import HomePage from './pages/home';
import TechStack from './pages/tech-stack';
import ContactMe from './pages/contact-me';
import Projects from './pages/projects';

function App() {
  const scrollableElement = useRef<HTMLDivElement | null>(null);
  const isScrolling = useRef(false);
  const [currentPage, setCurrentPage] = useState(0);
  const sections = [HomePage, AboutMe, Experiences, TechStack, ContactMe /* Projects */];

  useEffect(() => {
    const element = scrollableElement.current;
    if (!element) return;

    // Handle wheel events for smoother scrolling
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      // Determine scroll direction
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextPage = Math.max(0, Math.min(sections.length - 1, currentPage + direction));
      
      if (nextPage !== currentPage) {
        isScrolling.current = true;
        setCurrentPage(nextPage);
        
        element.scrollTo({
          top: nextPage * element.clientHeight,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    // Handle scroll events for manual scrolling
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      const pageHeight = element.clientHeight;
      const currentScroll = element.scrollTop;
      const nearestPage = Math.round(currentScroll / pageHeight);
      
      // Only snap if we're not already scrolling programmatically
      if (Math.abs(currentScroll - nearestPage * pageHeight) > 20) {
        isScrolling.current = true;
        
        element.scrollTo({
          top: nearestPage * pageHeight,
          behavior: 'smooth'
        });
        
        setCurrentPage(nearestPage);
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    element.addEventListener('wheel', handleWheel, { passive: false });
    element.addEventListener('scroll', handleScroll);
    
    return () => {
      element.removeEventListener('wheel', handleWheel);
      element.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, sections.length]);

  return (
    <div
      className='app-background'
      ref={scrollableElement}
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory'
      }}
    >
      {sections.map((Component, index) => (
        <section
          key={index}
          style={{
            height: '100vh',
            scrollSnapAlign: 'start',
          }}
        >
          <Component />
        </section>
      ))}
    </div>
  );
}

export default App;