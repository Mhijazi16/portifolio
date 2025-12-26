import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
        <p>© {new Date().getFullYear()} Mohammed Hijazi. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://www.linkedin.com/in/mhijazi16/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/Mhijazi16" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="mailto:m4hijaziii@gmail.com" className="hover:text-white transition-colors">m4hijaziii@gmail.com</a>
          <a href="tel:+970597053900" className="hover:text-white transition-colors">+970 597 053 900</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
