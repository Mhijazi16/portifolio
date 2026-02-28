import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import GithubHeatmap from './components/GithubHeatmap';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';

// Lazy load heavy components
const About = React.lazy(() => import('./components/About'));

const App: React.FC = () => {
  return (
     <div className="relative min-h-screen text-white selection:bg-white selection:text-black overflow-hidden">
      {/* Language Selector Popup */}
      <LanguageSelector />

      {/* Blurred gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 w-[32rem] h-[32rem] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
      </div>

      {/* Content on top of blurred background */}
      <div className="relative z-10 bg-black/40 backdrop-blur-2xl">
        <Navbar />
        <main>
          <Hero />
          <React.Suspense fallback={<div className="h-screen" />}>
            <About />
          </React.Suspense>
          <Skills />
          <WorkExperience />
          <Projects />
          <GithubHeatmap />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
