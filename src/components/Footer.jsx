import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-[var(--text-light)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img alt="AETHER WEB TECHNOLOGIES Logo" className="h-20 lg:h-24 w-auto mb-4 -ml-4" src="https://horizons-cdn.hostinger.com/bee45e2c-608a-4b91-997a-7b30b0419a03/4683042c1ba432961a2ad98bd174df4e.png" />
            <p className="text-sm mb-4">
              Construim soluții digitale moderne și site-uri rapide pentru afacerile viitorului.
            </p>
          </div>

          <div>
            <span className="text-base font-semibold mb-4 block dark-text">Linkuri Rapide</span>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:primary-text transition-colors">
                Acasă
              </Link>
              <Link to="/about" className="text-sm hover:primary-text transition-colors">
                Despre Noi
              </Link>
              <Link to="/services" className="text-sm hover:primary-text transition-colors">
                Servicii
              </Link>
              <Link to="/portfolio" className="text-sm hover:primary-text transition-colors">
                Portofoliu
              </Link>
              <Link to="/contact" className="text-sm hover:primary-text transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <span className="text-base font-semibold mb-4 block dark-text">Servicii</span>
            <nav className="flex flex-col space-y-2">
              <span className="text-sm">Site-uri de Prezentare</span>
              <span className="text-sm">Redesign Web</span>
              <span className="text-sm">Optimizare SEO</span>
              <span className="text-sm">Mentenanță</span>
            </nav>
          </div>

          <div>
            <span className="text-base font-semibold mb-4 block dark-text">Informații de Contact</span>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} className="primary-text" />
                <span>contact@aetherweb.tech</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone size={16} className="primary-text" />
                <span>+40 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="primary-text" />
                <span>București, România</span>
              </div>
            </div>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[var(--text-light)] hover:primary-text transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[var(--text-light)] hover:primary-text transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[var(--text-light)] hover:primary-text transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[var(--text-light)] hover:primary-text transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm">
            © 2025 AETHER WEB TECHNOLOGIES. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;