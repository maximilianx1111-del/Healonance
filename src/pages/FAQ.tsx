import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FadeInUp, LetterReveal } from '../components/ScrollEffects';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqsItems = [
    {
      question: t('faq.q1'),
      answer: t('faq.a1')
    },
    {
      question: t('faq.q2'),
      answer: t('faq.a2')
    },
    {
      question: t('faq.q3'),
      answer: t('faq.a3')
    },
    {
      question: t('faq.q4'),
      answer: t('faq.a4')
    },
    {
      question: t('faq.q5'),
      answer: t('faq.a5')
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden min-h-screen">
        {/* Soft elegant gradient and moving spheres for FAQ */}
        <div className="absolute inset-0 bg-gradient-to-br from-beige-50 via-sage-50/30 to-white -z-20"></div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[1000px] h-[1000px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] rounded-full blur-[80px]"
          />
        </div>

        <div className="container mxauto px-6 md:px-12 max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6">
              <LetterReveal text={t('faq.title')} />
            </h1>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-charcoal-700 font-light">
                {t('faq.subtitle')}
              </p>
            </FadeInUp>
          </div>

          <div className="space-y-4">
            {faqsItems.map((faq, index) => (
              <FadeInUp key={index} delay={0.1 * index}>
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-sage-300 shadow-md' : 'border-transparent shadow-sm hover:shadow-md'}`}
                >
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="font-serif text-lg text-sage-900">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-sage-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`} 
                    />
                  </button>
                  <div 
                    className={`px-6 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-charcoal-700 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
