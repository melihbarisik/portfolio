import { useRef, useEffect } from 'react';
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
  const sections = [HomePage, AboutMe, Experiences, Projects, TechStack, ContactMe];

  useEffect(() => {
    const element = scrollableElement.current;
    if (!element) return;

    const handleScroll = () => {
      if (isScrolling.current) return;

      const pageHeight = element.clientHeight;
      const currentScroll = element.scrollTop;
      const currentPage = Math.floor(currentScroll / pageHeight);
      const halfwayPoint = currentPage * pageHeight + pageHeight * 0.5;
      let targetPage = currentPage;

      if (currentScroll > halfwayPoint) {
        targetPage = Math.min(currentPage + 1, sections.length - 1);
      } /* else {
        targetPage = Math.max(currentPage - 1, 0);
      } */

      if (targetPage !== currentPage) {
        isScrolling.current = true;
        element.scrollTo({
          top: targetPage * pageHeight,
          behavior: 'smooth'
        });


        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

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
            scrollSnapAlign: 'start'
          }}
        >
          <Component />
        </section>
      ))}
    </div>
  );
}

export default App;