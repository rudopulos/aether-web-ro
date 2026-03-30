import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('aether_cookie_consent');
    if (!consent) {
      // Show after a small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('aether_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('aether_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="container mx-auto max-w-5xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
              <button 
                onClick={handleDecline}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors md:hidden"
              >
                <X size={20} />
              </button>

              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cookie className="text-[var(--primary-blue)]" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold dark-text mb-2">Respectăm confidențialitatea ta</h3>
                  <p className="text-sm text-[var(--text-light)]">
                    Folosim cookie-uri pentru a-ți asigura cea mai bună experiență pe site-ul nostru, 
                    pentru a analiza traficul și pentru a personaliza conținutul. Apăsând "Accept toate", 
                    ești de acord cu stocarea cookie-urilor pe dispozitivul tău. 
                    {' '}<a href="/privacy-policy" className="text-[var(--primary-blue)] hover:underline whitespace-nowrap">Află mai multe</a>.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-4 md:mt-0">
                <Button 
                  variant="outline" 
                  onClick={handleDecline}
                  className="w-full sm:w-auto border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  Doar strict necesare
                </Button>
                <Button 
                  onClick={handleAccept}
                  className="w-full sm:w-auto bg-[var(--primary-blue)] text-white hover:bg-[var(--dark-blue)]"
                >
                  Accept toate
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
