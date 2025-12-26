import React from 'react';
import contactData from '../data/contact.json';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500 gap-4">
        <p>© {new Date().getFullYear()} {contactData.footer.copyright}</p>
        <div className="flex flex-wrap justify-center gap-6">
          <a href={contactData.footer.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href={contactData.footer.links.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href={`mailto:${contactData.contact.email}`} className="hover:text-white transition-colors">{contactData.contact.email}</a>
          <a href={contactData.footer.links.phoneLink} className="hover:text-white transition-colors">{contactData.footer.links.phone}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
