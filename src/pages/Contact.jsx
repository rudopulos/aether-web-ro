import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mesaj Trimis! ✉️",
      description: "Îți mulțumim. Vom reveni cu un răspuns în cel mai scurt timp!",
      duration: 5000,
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-[var(--primary-blue)]" />,
      title: 'Email',
      content: 'aetherweb.tech@gmail.com',
      link: 'mailto:aetherweb.tech@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-[var(--primary-blue)]" />,
      title: 'Telefon',
      content: '0744915610',
      link: 'tel:0744915610'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[var(--primary-blue)]" />,
      title: 'Locație',
      content: 'București, România',
      link: '#'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - AETHER WEB TECHNOLOGIES</title>
        <meta name="description" content="Ia legătura cu noi pentru servicii web, dezvoltare site-uri sau oferte personalizate." />
      </Helmet>

      <section className="pt-32 pb-20 bg-[var(--light-bg)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold dark-text mb-6">Hai Să <span className="primary-text">Vorbim</span></h1>
            <p className="text-xl text-[var(--text-light)] max-w-3xl mx-auto">
              Ai un proiect în minte? Scrie-ne acum și vom transforma ideea ta într-un produs real.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold dark-text mb-6">Trimite-ne un mesaj</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium dark-text mb-2">
                      Nume Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="Ion Popescu"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium dark-text mb-2">
                      Adresă Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="contact@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium dark-text mb-2">
                      Număr de Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="07XX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium dark-text mb-2">
                      Subiect *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all bg-gray-50"
                      placeholder="Creare Site Prezentare"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium dark-text mb-2">
                      Mesajul Tău *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[var(--primary-blue)] focus:border-transparent outline-none transition-all resize-none bg-gray-50"
                      placeholder="Spune-ne câteva detalii despre proiectul tău..."
                    ></textarea>
                  </div>

                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="gdpr-consent" 
                      required 
                      className="mt-1 w-4 h-4 text-[var(--primary-blue)] border-gray-300 rounded focus:ring-[var(--primary-blue)]"
                    />
                    <label htmlFor="gdpr-consent" className="text-sm text-[var(--text-light)]">
                      Sunt de acord cu <a href="/terms" target="_blank" className="text-[var(--primary-blue)] hover:underline">Termenii și Condițiile</a> și 
                      am citit <a href="/privacy-policy" target="_blank" className="text-[var(--primary-blue)] hover:underline">Politica de Confidențialitate</a> referitoare la datele mele personale *
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[var(--primary-blue)] text-white hover:bg-[var(--dark-blue)] group">
                    Trimite Mesajul
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h2 className="text-3xl font-bold dark-text mb-6">Informații de Contact</h2>
                <p className="text-lg text-[var(--text-light)] mb-8">
                  Ne poți scrie sau telefona prin oricare dintre metodele de mai jos. Suntem aici să te ajutăm!
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start space-x-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold dark-text mb-1">{info.title}</h3>
                        <p className="text-[var(--text-light)]">{info.content}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>


            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;