import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'volunteer', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills & Interests', href: '#skills', id: 'skills' },
    { name: 'How I Can Help', href: '#volunteer', id: 'volunteer' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 print:hidden ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      {/* Top Smooth Scroll Reading Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-indigo-600 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand: Portrait thumbnail & William Okafor */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.01]"
        >
          <img
            src={PERSONAL_INFO.imagePath}
            alt={PERSONAL_INFO.fullName}
            className="w-9 h-9 rounded-full object-cover border-2 border-indigo-600/40 shadow-2xs group-hover:border-indigo-600 transition-colors"
          />
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
            William Okafor
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                activeSection === link.id
                  ? 'text-indigo-600 font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-indigo-600 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button: View CV/Resume */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 border border-slate-200 hover:border-indigo-300 rounded-lg bg-slate-50/80 hover:bg-white transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>View Resume</span>
          </button>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          >
            Let’s Connect
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-slate-600 hover:text-indigo-600 rounded-lg border border-slate-200"
            title="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 shadow-lg"
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block py-2 text-base font-medium rounded-lg px-3 transition-colors ${
                  activeSection === link.id
                    ? 'text-indigo-600 bg-indigo-50/80 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 text-sm font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-indigo-600" />
                <span>View Resume / CV</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full py-2.5 text-sm font-semibold text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
              >
                Let’s Connect
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};
