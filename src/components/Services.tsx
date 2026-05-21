import { Flower2, Sparkles, Activity } from 'lucide-react';
import { FadeInUp, LetterReveal } from './ScrollEffects';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 'reiki',
      title: t('services.reikiTitle'),
      description: t('services.reikiDesc'),
      icon: Flower2,
      duration: '60 Min',
      price: '$90',
    },
    {
      id: 'theta',
      title: t('services.thetaTitle'),
      description: t('services.thetaDesc'),
      icon: Sparkles,
      duration: '75 Min',
      price: '$120',
    },
    {
      id: 'body-code',
      title: t('services.bodyCodeTitle'),
      description: t('services.bodyCodeDesc'),
      icon: Activity,
      duration: '60 Min',
      price: '$110',
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-white">
      {/* Decorative Aura Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-purple-100 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-sage-200 rounded-full blur-[100px]"
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6 uppercase tracking-wide">
            <LetterReveal text={t('services.pillars')} />
          </h2>
          <FadeInUp delay={0.3}>
            <p className="text-lg text-charcoal-800 font-light leading-relaxed">
              {t('services.subtitle')}
            </p>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="h-full">
              <FadeInUp delay={index * 0.2} className="h-full">
                <div className="relative bg-beige-50 rounded-3xl p-8 md:p-10 border border-beige-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 flex flex-col h-full group overflow-hidden">
                  
                  {/* Nested Energy Hand Transition (Fades in on hover) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-1000 pointer-events-none z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?q=80&w=1871&auto=format&fit=crop" 
                      alt="Healing energy" 
                      className="w-full h-full object-cover mix-blend-multiply" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-beige-50 via-transparent to-transparent"></div>
                  </div>

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                      className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-8 text-sage-600 group-hover:bg-sage-600 group-hover:text-white transition-colors duration-700"
                    >
                      <service.icon size={32} strokeWidth={1.5} />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-sage-900 mb-4">{service.title}</h3>
                    <p className="text-charcoal-800 font-light mb-10 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-beige-200 mt-auto">
                      <div className="text-sm font-medium text-sage-500 uppercase tracking-widest">
                        {service.duration}
                      </div>
                      <div className="text-xl font-serif text-sage-900">
                        {service.price}
                      </div>
                    </div>
                    <div className="mt-6 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-700 h-0 group-hover:h-auto overflow-hidden translate-y-4 group-hover:translate-y-0">
                       <a href="#booking" className="btn-gold-hover block w-full text-center py-3 bg-sage-800 text-white rounded-xl font-medium shadow-md hover:shadow-lg">
                         {t('services.bookSession')}
                       </a>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
