import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';
import founderImg from '/founder.JPG';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <Target className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Misiunea Noastră',
      description: 'Să sprijinim afacerile locale cu soluții digitale inovatoare care generează creștere reală și vizibilitate pe internet.'
    },
    {
      icon: <Eye className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Viziunea Noastră',
      description: 'Să devenim partenerul tehnic de bază pentru antreprenorii non-tehnici care doresc o tranziție ușoară și eficientă în online.'
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Echipa Noastră',
      description: 'Un grup dedicat de tehnicieni și creativi, concentrați exclusiv pe livrarea de rezultate excepționale, fără termeni complicați.'
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Valorile Noastre',
      description: 'Claritate, inovație, eficiență și comunicare directă. La noi, succesul tău este prioritatea absolută.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Despre Noi - AETHER WEB TECHNOLOGIES</title>
        <meta name="description" content="Află mai multe despre AETHER WEB TECHNOLOGIES - misiunea, viziunea și echipa din spatele soluțiilor tale digitale." />
      </Helmet>

      <section className="pt-48 lg:pt-56 pb-20 bg-[var(--light-bg)]">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold dark-text mb-6">Despre <span className="primary-text">Noi</span></h1>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              Suntem o echipă de profesioniști pasionați, dedicați construirii prezenței tale de succes în mediul online.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img alt="AETHER WEB TECHNOLOGIES team collaboration" className="w-full h-auto rounded-2xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold dark-text mb-6">Cine Suntem</h2>
              <p className="text-lg text-[var(--text-light)] mb-4">
                AETHER WEB TECHNOLOGIES este o agenție digitală modernă, specializată în web development integrat cu soluții AI, optimizare SEO și design de impact.
              </p>
              <p className="text-lg text-[var(--text-light)] mb-4">
                Ne diferențiem prin modul în care simplificăm tehnologia. Oferim antreprenorilor non-tehnici un parteneriat transparent, preluând toată complexitatea codului și transformând ideile lor în site-uri ultra-rapide și profitabile.
              </p>
              <p className="text-lg text-[var(--text-light)]">
                Utilizăm cele mai noi inovații din domeniu pentru a ne asigura că afacerea ta beneficiază de un produs final impecabil, la o fracțiune din timpul agențiilor tradiționale gigantice.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold dark-text mb-3">{value.title}</h3>
                <p className="text-[var(--text-light)]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="py-20 bg-[var(--dark-blue)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12 border border-white/10 rounded-3xl p-8 lg:p-12 bg-white/5 backdrop-blur-sm">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-white/20 shadow-xl relative group">
                {/* Poza fondatorului va fi preluată din folderul public */}
              <img 
                src={founderImg} 
                alt="Radu - Fondator Aether Web Technologies" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2">Despre mine</h2>
              <p className="text-[var(--primary-blue)] font-medium mb-6 uppercase tracking-wider text-sm">Dezvoltator Web Pasionat</p>
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                "Salut! Am fondat AETHER WEB TECHNOLOGIES dintr-o credință simplă: fiecare afacere merită o prezență digitală remarcabilă, fără stresul și bataia de cap date de complexitatea tehnică."
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Combin expertiza de programare cu noile unelte AI pentru a construi site-uri care nu doar arată senzațional, ci și vând. Eu mă ocup personal de supervizarea codului, a vitezei și a calității, ca tu să te poți baza pe un site care funcționează perfect 24/7. Hai să lucrăm împreună!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark-text mb-6">De Ce Noi <span className="primary-text">?</span></h2>
            <p className="text-xl text-[var(--text-light)] mb-8">
              Combinăm excelența tehnică cu inovația pentru a livra rezultate care fac diferența cu adevărat.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="bg-[var(--light-bg)] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold dark-text mb-3">Implicare Directă</h3>
                <p className="text-[var(--text-light)]">Comunici direct cu omul care scrie codul. Fără intermediari, fără mesaje pierdute. Doar acțiune și soluții rapide.</p>
              </div>
              <div className="bg-[var(--light-bg)] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold dark-text mb-3">Soluții Agile</h3>
                <p className="text-[var(--text-light)]">Folosind puterea Inteligenței Artificiale și a tehnologiilor moderne, livrez la standarde înalte într-un timp record comparativ cu agențiile tradiționale.</p>
              </div>
              <div className="bg-[var(--light-bg)] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold dark-text mb-3">Fără Bani Aruncați</h3>
                <p className="text-[var(--text-light)]">Plătești strict pentru rezultatul care aduce valoare, orientat spre conversie, fără a susține costurile ascunse ale unui întreg birou corporativ.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;