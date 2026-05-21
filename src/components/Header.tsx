import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage, dir } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.shop'), href: '/shop' },
    { name: t('nav.faq'), href: '/faq' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-beige-50/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="text-2xl font-serif font-semibold tracking-widest text-sage-900">
          HEALONACE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium tracking-wide hover:text-sage-600 transition-colors relative group ${
                location.pathname === link.href ? 'text-sage-700' : 'text-charcoal-800'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 ${dir === 'rtl' ? 'right-0' : 'left-0'} h-[2px] bg-sage-400 transition-all duration-300 ${
                location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-sage-800 hover:text-sage-600 transition-colors flex items-center gap-1 font-medium text-sm"
            >
              <Globe size={18} />
              {language === 'en' ? 'عربي' : 'English'}
            </button>
            <Link
              to="/#booking"
              className="btn-gold-hover px-6 py-2.5 bg-sage-800 text-white text-sm font-medium rounded-full hover:bg-sage-900 transition-all shadow-md"
            >
              {t('nav.bookNow')}
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-sage-800 hover:text-sage-600 transition-colors flex items-center gap-1 font-medium text-sm"
          >
            <Globe size={18} />
            {language === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            className="text-sage-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-beige-50/95 backdrop-blur-xl shadow-xl border-t border-beige-200 md:hidden overflow-hidden"
          >
            <nav className="flex flex-col py-8 px-8 space-y-6">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-2xl font-serif ${
                    location.pathname === link.href ? 'text-sage-700' : 'text-sage-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.span
                    initial={{ opacity: 0, x: dir === 'rtl' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
              <Link
                to="/#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-gold-hover mt-4 text-center px-6 py-4 bg-sage-800 text-white text-lg font-medium rounded-xl shadow-md"
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {t('nav.bookNow')}
                </motion.span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
