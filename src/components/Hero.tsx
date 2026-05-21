import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { LetterReveal, FadeInUp } from './ScrollEffects';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const { t } = useLanguage();

  // Deep Parallax transforms
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-beige-50">
      {/* Animated Image Background - Using an abstract soft image that gently scales/pans */}
      <motion.div style={{ y: yImage }} className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -10, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          src="https://images.unsplash.com/photo-1507908708918-778587c9e563?q=80&w=2000&auto=format&fit=crop"
          alt="Abstract Healing Background"
          className="w-full h-full object-cover mix-blend-overlay opacity-50"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Floating Animated Orbs for extra "animated" feel */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-sage-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-300 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-t from-beige-50 via-beige-50/40 to-transparent"></div>

      <motion.div 
        style={{ opacity: opacityText, y: yText }}
        className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl"
      >
        <FadeInUp delay={0.1}>
          <span className="block text-sm md:text-base font-medium text-sage-600 tracking-widest uppercase mb-6 drop-shadow-sm">
            {t('hero.holistic')}
          </span>
        </FadeInUp>
        
        <h1 className="text-5xl md:text-7xl font-serif text-sage-900 mb-6 leading-tight drop-shadow-sm">
          <LetterReveal text={t('hero.title1')} delay={0.2} />
          <br className="hidden md:block" />
          <LetterReveal text={t('hero.title2')} delay={0.8} />
        </h1>
        
        <FadeInUp delay={1.4}>
          <p className="text-lg md:text-xl text-charcoal-800 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            {t('hero.subtitle')}
          </p>
        </FadeInUp>
        
        <FadeInUp delay={1.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="btn-gold-hover px-8 py-4 bg-sage-800 text-white rounded-full text-lg font-medium hover:bg-sage-900 transition-all shadow-lg hover:shadow-xl w-full sm:w-auto relative overflow-hidden group"
            >
              <span className="relative z-10">{t('hero.bookSession')}</span>
              <motion.div 
                className="absolute inset-0 bg-white/20 z-0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="btn-gold-hover px-8 py-4 bg-white/90 backdrop-blur-md border border-sage-300 text-sage-800 rounded-full text-lg font-medium hover:bg-white transition-all w-full sm:w-auto shadow-md hover:shadow-lg"
            >
              {t('hero.exploreServices')}
            </motion.a>
          </div>
        </FadeInUp>
      </motion.div>
    </section>
  );
}
