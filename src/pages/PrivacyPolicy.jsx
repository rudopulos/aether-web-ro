import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Politica de Confidențialitate - AETHER WEB TECHNOLOGIES</title>
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
            <h1 className="text-4xl font-bold dark-text mb-8">Politica de Confidențialitate</h1>
            <p className="text-sm text-gray-500 mb-8">Ultima actualizare: 30 Martie 2026</p>

            <div className="prose prose-blue max-w-none text-[var(--text-light)]">
              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">1. Informații Generale</h2>
              <p className="mb-4">
                Confidențialitatea datelor dumneavoastră cu caracter personal reprezintă una dintre preocupările principale ale AETHER WEB TECHNOLOGIES. 
                Acest document are rolul de a vă informa cu privire la prelucrarea datelor dumneavoastră cu caracter personal, în contextul utilizării paginii de internet <strong>aetherweb.ro</strong> ("Site-ul").
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">2. Categoriile de date cu caracter personal prelucrate</h2>
              <p className="mb-4">
                Dacă sunteți utilizator al Site-ului, vom prelucra datele dumneavoastră cu caracter personal, cum ar fi nume și prenume, număr de telefon, adresa de e-mail,
                precum și date referitoare la modul în care utilizați Site-ul (de exemplu comportamentul/preferințele dumneavoastră în cadrul Site-ului),
                precum și orice alte categorii de date pe care le furnizați în mod direct în contextul transmiterii unui mesaj prin formularul de contact.
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">3. Scopurile și temeiurile prelucrării</h2>
              <p className="mb-4">
                Prelucrăm datele dumneavoastră cu caracter personal astfel:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Pentru a vă răspunde la solicitările și mesajele trimise prin intermediul formularului de contact.</li>
                <li>Pentru activități de marketing, respectiv pentru transmiterea directă de newslettere, doar cu acordul dumneavoastră prealabil.</li>
                <li>Pentru rezolvarea plângerilor, reclamațiilor și pentru a monitoriza traficul și a îmbunătăți experiența oferită pe Site.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">4. Durata prelucrării datelor</h2>
              <p className="mb-4">
                Ca principiu, AETHER WEB TECHNOLOGIES va prelucra datele dumneavoastră cu caracter personal atât cât este necesar pentru realizarea scopurilor de prelucrare menționate mai sus.
                În cazul în care ne contactați prin intermediul formularului, vom stoca datele strict pentru perioada în care vă gestionăm cererea sau discutăm despre un potențial parteneriat.
              </p>

              <h2 className="text-2xl font-semibold dark-text mt-8 mb-4">5. Drepturile dumneavoastră</h2>
              <p className="mb-4">
                În condițiile prevăzute de legislația în materia prelucrării datelor cu caracter personal, beneficiați de următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Dreptul la informare.</li>
                <li>Dreptul de acces la date.</li>
                <li>Dreptul la intervenție asupra datelor (actualizare/rectificare).</li>
                <li>Dreptul la ștergerea datelor („dreptul de a fi uitat”).</li>
                <li>Dreptul la portabilitatea datelor.</li>
                <li>Dreptul de a vă adresa justiției și Autorității Naționale de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).</li>
              </ul>

              <p className="mt-8 font-semibold">
                Pentru orice cerere legată de drepturile de mai sus, ne puteți contacta prin e-mail la adresa: <strong>aetherweb.tech@gmail.com</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
