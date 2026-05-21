import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Practitioner() {
  const { t } = useLanguage();

  return (
    <section id="practitioner" className="py-24 relative overflow-hidden bg-white">
      {/* Immersive Deep Healing Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft base gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sage-50 via-white to-purple-50/30"></div>
        
        {/* Animated aura spheres */}
        <motion.div 
          animate={{ scale: [1, 1.15, 1], rotate: [0, 10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px]"
        ></motion.div>
        
        <motion.div 
          animate={{ scale: [1, 1.25, 1], rotate: [0, -10, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-60 w-[800px] h-[800px] bg-sage-200/40 rounded-full blur-[120px]"
        ></motion.div>

        {/* Subtle Crystal/Energy Texture Add-on */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-color-burn" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2 w-full"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0"
            >
              <img 
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop" 
                alt="Ahmed Al-Nuimi - Holistic Healer" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-white/80 text-sm tracking-widest uppercase mb-1">{t('practitioner.guide')}</p>
                <h3 className="text-3xl font-serif text-white">{t('practitioner.name')}</h3>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <h2 className="text-sm font-medium text-sage-600 tracking-widest uppercase mb-3">{t('practitioner.meet')}</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-charcoal-900 mb-8 leading-tight">
              {t('practitioner.guiding')} <span className="italic text-sage-700">{t('practitioner.harmony')}</span>
            </h3>
            
            <div className="space-y-6 text-lg text-charcoal-700 font-light leading-relaxed mb-10">
              <p>
                {t('practitioner.p1')}<strong>{t('practitioner.name')}</strong>{t('practitioner.p1_cont')}
              </p>
              <p>
                {t('practitioner.p2')}<strong>{t('practitioner.online')}</strong>
              </p>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-serif text-charcoal-900 mb-4">{t('practitioner.certifications')}</h4>
              
              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 transition-transform rtl:hover:-translate-x-3">
                <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-sage-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <div>
                  <h5 className="font-medium text-charcoal-900 text-lg">{t('practitioner.reikiMaster')}</h5>
                  <p className="text-charcoal-600 text-sm font-light">{t('practitioner.reikiMasterDesc')}</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 transition-transform rtl:hover:-translate-x-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <div>
                  <h5 className="font-medium text-charcoal-900 text-lg">{t('practitioner.thetaMaster')}</h5>
                  <p className="text-charcoal-600 text-sm font-light">{t('practitioner.thetaMasterDesc')}</p>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="flex items-start gap-4 transition-transform rtl:hover:-translate-x-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <div>
                  <h5 className="font-medium text-charcoal-900 text-lg">{t('practitioner.bodyCodeMaster')}</h5>
                  <p className="text-charcoal-600 text-sm font-light">{t('practitioner.bodyCodeMasterDesc')}</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
