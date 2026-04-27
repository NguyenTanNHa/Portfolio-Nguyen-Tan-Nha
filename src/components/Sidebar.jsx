import React, { useState } from 'react';
import { Facebook, Phone, Instagram, Linkedin, Menu, X, Moon, Sun } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';
import useScrollSpy from '../hooks/useScrollSpy';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useDarkMode();

  const sectionIds = ['home', 'about', 'social-media', 'skills', 'education', 'projects', 'work', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 200); // 200px offset

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Social Media', href: '#social-media', id: 'social-media' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Work', href: '#work', id: 'work' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        className="md:hidden fixed top-4 right-4 z-50 p-2 bg-primary text-white rounded-md shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Dark Mode Toggle - Top Left (or inside Sidebar on mobile) */}
      <button 
        className="fixed top-4 left-4 md:left-[320px] z-50 p-3 bg-surface text-heading rounded-full shadow-lg border border-border hover:bg-primary hover:text-white transition-colors duration-300"
        onClick={() => setIsDark(!isDark)}
        title={isDark ? "Bật giao diện sáng" : "Bật giao diện tối"}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Sidebar Content */}
      <aside 
        className={`fixed inset-y-0 left-0 z-40 w-[300px] bg-surface overflow-y-auto transition-transform duration-500 ease-in-out flex flex-col pt-[3em] pb-[40px] border-r border-border
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="text-center px-6">
          <div 
            className="w-[150px] h-[150px] mx-auto mb-[30px] rounded-full bg-cover bg-center bg-no-repeat shadow-md border-4 border-white dark:border-gray-800"
            style={{ backgroundImage: 'url(https://ik.imagekit.io/xyb4py2yu/PORTFOLIO/2_1.JPG?updatedAt=1731581887468)' }}
          ></div>
          <h1 className="text-[22px] font-bold mb-2 font-serif text-heading">
            <a href="#home">NGUYEN TAN NHA</a>
          </h1>
          <span className="block text-[14px] uppercase mb-8 text-primary font-bold tracking-[1px]">
            Backend Developer
          </span>
        </div>

        <nav className="flex-1">
          <ul className="text-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.name} className="mb-2.5">
                  <a 
                    href={link.href}
                    onClick={() => setIsOpen(false)} // Close mobile menu on click
                    className={`relative inline-block pt-2 pb-1 text-[14px] font-bold uppercase tracking-[1.5px] transition-colors duration-300 group
                      ${isActive ? 'text-primary' : 'text-primary/70 dark:text-muted hover:text-heading'}
                    `}
                  >
                    {link.name}
                    {/* Underline Effect */}
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-primary transition-transform duration-300 ease-bounce-soft
                      ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}></span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="px-[20px] text-center mt-8">
          <p className="text-[15px] text-muted mb-4">
            <small>
              &copy; Copyright {new Date().getFullYear()} All rights reserved. <br/>
              Made with 💙 by <a href="https://www.facebook.com/NguyenTnNha/" target="_blank" rel="noreferrer" className="text-primary hover:underline">Tấn Nhã</a>
            </small>
          </p>
          <ul className="flex justify-center gap-4">
            <li><a href="https://www.facebook.com/NguyenTnNha/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors"><Facebook size={18} /></a></li>
            <li><a href="tel:0937219976" className="text-primary hover:text-primary/80 transition-colors"><Phone size={18} /></a></li>
            <li><a href="https://www.instagram.com/_tanhang_/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors"><Instagram size={18} /></a></li>
            <li><a href="https://www.linkedin.com/in/nha-nguyen-tan/" target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors"><Linkedin size={18} /></a></li>
          </ul>
        </div>
      </aside>
    </>
  );
}
