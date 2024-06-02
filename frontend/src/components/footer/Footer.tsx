// components/Footer.js
import React from 'react';

const Footer = () => {
  const footerData = {
    sections: [
      {
        title: 'Dazzle',
        links: ['За нас'],
        href:"/about-us"
      },
    
      {
        title: 'Свържи се с нас',
        links: ['Контакти'],
        href:"/contact-us"
      },
    ],
  };
 
  return (
    <footer className="bg-pink-200 text-gray-600 py-12 rounded-2xl mb-10 container max-w-5xl mx-auto mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className="mb-2">
                    <a href={section.href} className="text-sm hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-pink-100 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">&copy; 2024 Dazzle. Всички права са запазени.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
