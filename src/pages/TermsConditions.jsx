import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Termeni și Condiții - AETHER WEB TECHNOLOGIES</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="pt-32 pb-20 bg-[var(--light-bg)] min-h-screen">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100"
          >
            <h1 className="text-4xl font-bold dark-text mb-8">Termeni și Condiții de Utilizare</h1>
            <p className="text-sm text-gray-500 mb-8">Ultima actualizare: 30 Martie 2026</p>

            <div className="prose prose-blue max-w-none text-[var(--text-light)]">
              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">1. Introducere</h2>
              <p className="mb-4">
                Accesarea, vizitarea și folosirea site-ului <strong>aetherweb.ro</strong> ("Site-ul") implică acceptarea termenilor și condițiilor ce vor fi detaliate în continuare.
                Vă recomandăm să citiți cu atenție acest document pentru folosirea în cele mai bune condiții a platformei și a serviciilor oferite de AETHER WEB TECHNOLOGIES.
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">2. Accesul la Site</h2>
              <p className="mb-4">
                Ne rezervăm dreptul de a restricționa sau de a bloca accesul oricărui vizitator sau client dacă suspectăm că activitatea acestuia are rolul de a frauda, copia
                informații fără drept sau de a afecta integritatea Site-ului.
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">3. Serviciile Oferite</h2>
              <p className="mb-4">
                Prin intermediul Site-ului, compania noastră prezintă portofoliul și serviciile de dezvoltare web, realizare de platforme software personalizate,
                promovare digitală și asistență tehnică. Ne rezervăm dreptul de a modifica prețurile serviciilor (oferte personalizate) și disponibilitatea acestora 
                fără nicio notificare prealabilă, în funcție de complexitatea fiecărui proiect.
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">4. Proprietatea Intelectuală</h2>
              <p className="mb-4">
                Întregul conținut al Site-ului (imagini, texte, grafice, simboluri, elemente de grafică web, scripturi, programe) reprezintă vizualizarea identității 
                AETHER WEB TECHNOLOGIES și este apărat de legea pentru protecția drepturilor de autor.
              </p>
              <p className="mb-4">
                Folosirea fără acordul companiei noastre a oricăror elemente enumerate mai sus se pedepsește conform legilor în vigoare.
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">5. Soluționarea Litigiilor</h2>
              <p className="mb-4">
                Prin folosirea site-ului, vă exprimați acordul că orice conflict va fi rezolvat pe cale amiabilă. 
                În cazul în care acest lucru nu va fi posibil, conflictul va fi soluționat de instanțele judecătorești române competente din sediul social al societății.
              </p>

              <div className="mt-8 p-6 bg-blue-50/50 rounded-lg border border-blue-100">
                <p className="mb-2 font-semibold dark-text">Pentru întrebări sau sugestii:</p>
                <p>Contactați-ne prin e-mail la: <a href="mailto:aetherweb.tech@gmail.com" className="text-[var(--primary-blue)] hover:underline">aetherweb.tech@gmail.com</a></p>
                <p>Sau la telefon: <a href="tel:0744915610" className="text-[var(--primary-blue)] hover:underline">0744915610</a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
