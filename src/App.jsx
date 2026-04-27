import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import SocialMedia from './components/SocialMedia';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex min-h-screen w-full relative overflow-hidden">
      <Sidebar />
      <main className="w-full md:w-[calc(100%-300px)] md:ml-[300px] transition-all duration-500 bg-background">
        <Hero />
        <About />
        <SocialMedia />
        <Skills />
        <Education />
        <Projects />
        <Work />
        <Contact />
      </main>
    </div>
  );
}

export default App;
