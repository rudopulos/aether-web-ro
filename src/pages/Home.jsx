import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, PenTool, ImageIcon, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Site-uri de Prezentare',
      description: 'Creăm site-uri rapide și atractive, optimizate special pentru a-ți vinde serviciile.',
    },
    {
      icon: <PenTool className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Copywriting Inteligent',
      description: 'Redactăm texte persuasive bazate pe AI pentru a capta atenția viitorilor tăi clienți.',
    },
    {
      icon: <ImageIcon className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Branding Digital',
      description: 'Generăm și optimizăm concepte vizuale și logo-uri care spun povestea afacerii tale.',
    },
    {
      icon: <Shield className="w-8 h-8 text-[var(--primary-blue)]" />,
      title: 'Mentenanță Completă',
      description: 'Ne ocupăm de toate detaliile tehnice pentru ca tu să te concentrezi doar pe afacerea ta.',
    }
  ];

  return (
    <>
      <Helmet>
        <title>AETHER WEB TECHNOLOGIES - Creează. Inovează.</title>
        <meta name="description" content="Servicii de web development și soluții digitale bazate pe AI. Creăm site-uri de prezentare de impact pentru afacerile moderne." />
      </Helmet>

      <section className="relative flex items-center overflow-hidden pt-56 pb-20 bg-[var(--light-bg)]"> {/* Increased top padding here */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <motion.div {...fadeInUp} className="w-full text-center max-w-4xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight dark-text">
                Creează.
                <br />
                <span className="primary-text">Inovează.</span>
              </h1>
              <p className="text-xl text-[var(--text-light)] mb-8 max-w-2xl mx-auto">
                Transformăm rapid viziunea afacerii tale într-o prezență online de succes. Servicii digitale complete, optimizate inteligent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-[var(--primary-blue)] text-white hover:bg-[var(--dark-blue)] group">
                    Începe Acum
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white">
                    Vezi Portofoliul
                  </Button>
                </Link>
              </div>
            </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold dark-text mb-4">Serviciile Noastre</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Soluții digitale rapide concepute special pentru afacerea ta
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold dark-text mb-3">{service.title}</h3>
                <p className="text-[var(--text-light)]">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--dark-blue)] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ne apucăm de treabă?</h2>
            <p className="text-xl mb-8 opacity-90">
              Hai să discutăm despre cum putem aduce proiectul tău online.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[var(--primary-blue)] text-white hover:bg-opacity-90">
                Contactează-ne Astăzi
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;