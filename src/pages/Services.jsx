import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, Palette, Target, PenTool, Image as ImageIcon, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-10 h-10 text-[var(--primary-blue)]" />,
      title: 'Site-uri de Prezentare / Landing Pages',
      description: 'Creăm site-uri rapide și atractive, optimizate special pentru a-ți vinde serviciile și a aduce clienți noi din mediul online.',
      features: ['Design Modern & Responsiv', 'Optimizare pentru Mobil', 'Formulare de Contact', 'Viteză Maximă']
    },
    {
      icon: <Palette className="w-10 h-10 text-[var(--primary-blue)]" />,
      title: 'Redesign & Modernizare',
      description: 'Ai deja un site vechi care nu mai aduce rezultate? Îl refacem complet folosind tehnologii de ultimă generație pentru o experiență premium.',
      features: ['Interfață Nouă', 'Îmbunătățirea Navigării', 'Păstrarea Conținutului vechi', 'Trecere la Tehnologii Noi']
    },
    {
      icon: <Target className="w-10 h-10 text-[var(--primary-blue)]" />,
      title: 'SEO & Prezență pe Google',
      description: 'Te ajutăm să fii găsit mai ușor de clienți. Setăm corect site-ul pentru motoarele de căutare pentru o vizibilitate maximă.',
      features: ['Optimizare Titluri & Meta', 'Structură Corectă', 'Indexare Rapidă', 'Performanță SEO']
    },
    {
      icon: <PenTool className="w-10 h-10 text-[var(--primary-blue)]" />,
      title: 'Copywriting & Conținut',
      description: 'Nu știi ce să scrii? Redactăm texte persuasive și atractive care spun povestea afacerii tale și conving clienții să acționeze.',
      features: ['Texte de Vânzare', 'Descrieri Servicii', 'Corectură', 'Mesaje Clare']
    },
    {
      icon: <ImageIcon className="w-10 h-10 text-[var(--primary-blue)]" />,
      title: 'Branding & Identitate Vizuală',
      description: 'Nu ai fotografii profesionale? Generăm și edităm concepte vizuale, logo-uri și imagini de impact perfect adaptate brandului tău.',
      features: ['Imagini de Calitate', 'Palete de Culori', 'Grafică Web', 'Coerență Vizuală']
    },
    {
      icon: <Shield className="w-10 h-10 text-[var(--primary-blue)]" />,
      title: 'Mentenanță & Suport Tehnic',
      description: 'Scapă de grijile tehnice. Ne ocupăm de actualizări, securitate și rularea perfectă a site-ului, ca tu să te concentrezi doar pe afacerea ta.',
      features: ['Actualizări Periodice', 'Monitorizare', 'Securitate Web', 'Suport Rapid']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicii - AETHER WEB TECHNOLOGIES</title>
        <meta name="description" content="Descoperă serviciile noastre web: creare site-uri de prezentare, redesign, optimizare SEO, copywriting și soluții de branding digital." />
      </Helmet>

      <section className="pt-48 lg:pt-56 pb-20 bg-[var(--light-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold dark-text mb-6">Serviciile <span className="primary-text">Noastre</span></h1>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              Soluții digitale rapide și optimizate, create pentru a-ți crește afacerea și a atrage noi clienți în mediul online.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                <h3 className="text-2xl font-bold dark-text mb-4">{service.title}</h3>
                <p className="text-[var(--text-light)] mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[var(--text-light)]">
                      <div className="w-1.5 h-1.5 bg-[var(--primary-blue)] rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-[var(--dark-blue)] rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ești gata să începem?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Hai să discutăm despre cum putem aduce viziunea ta pe internet, simplu și cu rezultate reale.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[var(--primary-blue)] text-white hover:bg-opacity-90">
                Contactează-ne Astăzi
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;