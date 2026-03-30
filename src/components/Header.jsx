import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Acasă', path: '/' },
    { name: 'Despre Noi', path: '/about' },
    { name: 'Servicii', path: '/services' },
    { name: 'Portofoliu', path: '/portfolio' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-6"> {/* Vertical padding ensures space for logo */}
        <div className="grid grid-cols-3 items-center">
          <div className="flex items-center justify-start">
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-[var(--primary-blue)] ${
                    location.pathname === item.path
                      ? 'text-[var(--primary-blue)]'
                      : 'text-[var(--dark-blue)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
             <div className="lg:hidden"></div>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/">
              <img alt="AETHER WEB TECHNOLOGIES Logo" className="h-12 lg:h-16 w-auto" src="/logo.png" />
            </Link>
          </div>
          
          <div className="flex items-center justify-end">
             <Link to="/contact" className="hidden lg:block">
              <Button className="bg-[var(--primary-blue)] text-white hover:bg-[var(--dark-blue)]">
                Cere O Ofertă
              </Button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[var(--dark-blue)] hover:text-[var(--primary-blue)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg"
          >
            <nav className="flex flex-col p-4">
              {[...navItems, { name: 'Contact', path: '/contact' }].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 text-sm font-medium text-center transition-colors hover:text-[var(--primary-blue)] ${
                    location.pathname === item.path
                      ? 'text-[var(--primary-blue)]'
                      : 'text-[var(--dark-blue)]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-3">
                <Button className="w-full bg-[var(--primary-blue)] text-white hover:bg-[var(--dark-blue)]">
                  Cere O Ofertă
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;