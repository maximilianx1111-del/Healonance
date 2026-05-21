import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Booking() {
  const { t, dir } = useLanguage();
  const [selectedService, setSelectedService] = useState<string>('reiki');

  const handleBookWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    // Prepare localized or english message
    const serviceName = selectedService === 'reiki' ? t('services.reikiTitle') 
      : selectedService === 'theta healing' ? t('services.thetaTitle') 
      : t('services.bodyCodeTitle');

    const message = dir === 'rtl' 
      ? `مرحباً، أود حجز جلسة ${serviceName}.`
      : `Hello, I would like to book a ${serviceName} session.`;
    
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890"; // Please replace with real number in .env
    const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-sage-50">
      
      {/* Dynamic Energy Background layer */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[30%] -right-[10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,transparent_60%)] rounded-full blur-3xl mix-blend-multiply"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-[20%] -left-[10%] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(113,128,118,0.1)_0%,transparent_60%)] rounded-full blur-3xl mix-blend-multiply"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-serif text-sage-900 mb-6">{t('booking.title')}</h2>
            <p className="text-lg text-charcoal-800 font-light mb-8 leading-relaxed">
              {t('booking.subtitle')}
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-xl text-sage-800 mb-2">{t('booking.location')}</h4>
                <p className="text-charcoal-800 font-light">
                  <span className="font-medium">{t('booking.online')}</span><br/>
                  {t('booking.onlineDesc')}
                </p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-sage-800 mb-2">{t('booking.practitioner')}</h4>
                <p className="text-charcoal-800 font-light whitespace-pre-line">{t('booking.practitionerDesc')}</p>
              </div>
              <div>
                <h4 className="font-serif text-xl text-sage-800 mb-2">{t('booking.contact')}</h4>
                <p className="text-charcoal-800 font-light">hello@healonace.com</p>
              </div>
            </div>
          </div>

          {/* Booking Form Side */}
          <div className="lg:w-2/3 w-full bg-white rounded-3xl shadow-lg p-8 md:p-10">
            <form onSubmit={handleBookWhatsApp} className="space-y-8">
              
              {/* Service Selection */}
              <div>
                <label className="block text-sm font-medium text-sage-800 mb-6 uppercase tracking-wider text-center">{t('booking.selectService')}</label>
                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                  {['reiki', 'theta healing', 'body code'].map((serviceKey) => {
                    const serviceName = serviceKey === 'reiki' ? t('services.reikiTitle') 
                      : serviceKey === 'theta healing' ? t('services.thetaTitle') 
                      : t('services.bodyCodeTitle');
                      
                    return (
                      <button
                        key={serviceKey}
                        type="button"
                        onClick={() => setSelectedService(serviceKey)}
                        className={`py-4 px-6 rounded-xl border text-lg font-medium transition-all w-full shadow-sm hover:shadow-md ${
                          selectedService === serviceKey
                            ? 'bg-sage-600 border-sage-600 text-white'
                            : 'bg-transparent border-beige-200 text-charcoal-800 hover:border-sage-400'
                        }`}
                      >
                        {serviceName}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-8 mt-8 border-t border-beige-100 max-w-md mx-auto">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl text-lg font-medium hover:bg-[#1ebd5b] transition-colors flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  {dir === 'rtl' ? 'مراسلة عبر واتساب الآن' : 'Message on WhatsApp Now'}
                </button>
                <p className="mt-4 text-center text-sm text-charcoal-600 font-light">
                  {dir === 'rtl' ? 'سيتم تحويلك لترتيب موعد الجلسة مباشرة عبر واتساب.' : 'You will be redirected to WhatsApp to arrange your session time.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
