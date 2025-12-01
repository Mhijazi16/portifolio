import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} Mohammed Hijazi. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <p>Designed with Gemini & React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;