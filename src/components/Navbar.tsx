import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll progress bar at top of window
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'vision', 'contact'];
      const scrollPosition = window.scrollY + 160;

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
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'SKILLS', href: '#skills', id: 'skills' },
    { name: 'PORTFOLIO', href: '#projects', id: 'projects' },
    { name: 'ACADEMIC & VISION', href: '#vision', id: 'vision' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
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
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3.5 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      {/* Top Smooth Scroll Reading Progress Indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo styled exactly like SATNER in screenshot */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold tracking-wider text-slate-900 group transition-transform duration-200 hover:scale-[1.02]"
        >
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent uppercase tracking-widest font-['Space_Grotesk']">
            WILLIAM
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block group-hover:scale-125 group-hover:bg-purple-600 transition-all duration-300" />
        </a>

        {/* Desktop Nav Items with Hover Transitions */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-xs font-bold tracking-widest uppercase transition-all duration-200 relative py-1 hover:-translate-y-0.5 ${
                  isActive
                    ? 'text-indigo-600 font-extrabold'
                    : 'text-slate-600 hover:text-indigo-600'
                }`}
              >
                {link.name}
                {isActive ? (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                ) : (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-200 rounded-full scale-x-0 hover:scale-x-100 transition-transform duration-200 origin-left" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTA with Interactive Hover Effects */}
        <div className="hidden lg:flex items-center space-x-3">
          <button
            id="nav-get-cv-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg text-xs font-bold tracking-wider uppercase hover:bg-indigo-50 hover:border-indigo-700 hover:text-indigo-700 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-sm cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            <span>GET CV</span>
          </button>
          <a
            id="nav-hire-me-btn"
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg text-xs font-bold tracking-wider uppercase shadow-md shadow-indigo-500/25 hover:shadow-indigo-500/45 hover:from-indigo-700 hover:to-indigo-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <span>HIRE ME</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center lg:hidden space-x-2">
          <button
            onClick={onOpenResume}
            className="p-2 text-indigo-600 hover:bg-indigo-50 active:scale-95 rounded-lg border border-indigo-200 transition-transform"
            title="View CV"
          >
            <FileDown className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-indigo-600 active:scale-95 focus:outline-none transition-transform"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-extrabold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 border-2 border-indigo-600 text-indigo-600 rounded-lg text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-indigo-50 active:bg-indigo-100 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>VIEW / DOWNLOAD CV</span>
            </button>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 shadow-md shadow-indigo-600/30 text-center transition-colors"
            >
              <span>GET IN TOUCH / HIRE ME</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

