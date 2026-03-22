import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Portfolio = () => {
  const { toast } = useToast();

  const projects = [
    {
      title: 'T3 Money Guard',
      category: 'Web Application',
      description: 'Aplicație avansată de management financiar personal (Personal Finance Tracker), cu istoric de tranzacții, statistici lunare și design premium adaptabil.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
      url: 'https://rudopulos.github.io/T3-Money-Guard/'
    },
    {
      title: 'WebStudio - Landing Page',
      category: 'Web Development (Practice)',
      description: 'Implementare modernă de landing page utilizând HTML semantic, cu arhitectură avansată SCSS și metodologie BEM, integrând funcționalități interactive prin JS nativ.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      url: 'https://rudopulos.github.io/goit-markup-hw-08/'
    },
    {
      title: 'Barbershop',
      category: 'Web Development (Practice)',
      description: 'Implementare fidelă de la design Figma la website static, responsiv. Focus pe HTML semantic, SCSS și best practices BEM.',
      image: 'https://rudopulos.github.io/barbershop/images/hero-slider-img1.jpg',
      url: 'https://rudopulos.github.io/barbershop/'
    },
    {
      title: 'Elite Design',
      category: 'Site de Prezentare',
      description: 'Website de prezentare modern și sofisticat, optimizat vizual pentru a evidenția proiectele unei agenții de design.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      url: 'https://byelitedesign.com/'
    },
    {
      title: 'Sistem Rezervări Online',
      category: 'Web Application',
      description: 'Platformă pentru programări și rezervări, ideală pentru clinici sau restaurante.',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      url: null
    },
    {
      title: 'Dashboard Gestiune',
      category: 'UI/UX Concept',
      description: 'Tablou de bord intern cu grafice în timp real pentru administrarea afacerii.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      url: null
    }
  ];

  const handleProjectClick = () => {
    toast({
      title: "🚧 Această pagină este în lucru! Revino curând! 🚀",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Portofoliu - AETHER WEB TECHNOLOGIES</title>
        <meta name="description" content="Explorează portofoliul nostru de concepte web, design-uri moderne și aplicații interactive." />
      </Helmet>

      <section className="pt-48 lg:pt-56 pb-20 bg-[var(--light-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold dark-text mb-6">Portofoliul <span className="primary-text">Nostru</span></h1>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              Explorează colecția noastră de concepte UI, template-uri web și demonstrații tehnice care reflectă nivelul nostru de expertiză.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden h-64">
                  <img alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={project.image} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-[var(--primary-blue)] text-white text-xs font-semibold rounded-full mb-2">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold dark-text mb-3">{project.title}</h3>
                  <p className="text-[var(--text-light)] mb-4">{project.description}</p>
                  <Button
                    onClick={() => project.url ? window.open(project.url, '_blank') : handleProjectClick()}
                    variant="outline"
                    className="border-[var(--primary-blue)] text-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white group"
                  >
                    Vezi Proiectul
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-[var(--text-light)] mb-6">
              Vrei să vezi mai multe sau să discutăm despre ideea ta?
            </p>
            <Button
              onClick={handleProjectClick}
              size="lg"
              className="bg-[var(--primary-blue)] text-white hover:bg-[var(--dark-blue)]"
            >
              Contactează-ne
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;