import { useState, FormEvent } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import 'react-day-picker/dist/style.css';
import { useLanguage } from '../context/LanguageContext';

const timeSlots = [
  '09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'
];

export default function Booking() {
  const { t, dir } = useLanguage();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string>('reiki');

  const handleBookWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      const dateStr = format(selectedDate, 'MMM d, yyyy');
      // Prepare localized or english message
      const message = `Hello, I would like to book a ${selectedService.toUpperCase()} session on ${dateStr} at ${selectedTime}.`;
      
      const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "1234567890"; // Please replace with real number in .env
      const cleanNumber = whatsappNumber.replace(/[^0-9]/g, '');
      const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    }
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
                <label className="block text-sm font-medium text-sage-800 mb-3 uppercase tracking-wider">{t('booking.selectService')}</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['reiki', 'theta healing', 'body code'].map((serviceKey) => {
                    const serviceName = serviceKey === 'reiki' ? t('services.reikiTitle') 
                      : serviceKey === 'theta healing' ? t('services.thetaTitle') 
                      : t('services.bodyCodeTitle');
                      
                    return (
                      <button
                        key={serviceKey}
                        type="button"
                        onClick={() => setSelectedService(serviceKey)}
                        className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Calendar */}
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-3 uppercase tracking-wider">{t('booking.selectDate')}</label>
                  <div className="border border-beige-200 rounded-2xl p-4 bg-beige-50/50 flex justify-center w-full max-w-[fit-content]" dir="ltr">
                    <DayPicker
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: new Date() }}
                      className="font-sans"
                      modifiersClassNames={{
                        selected: 'bg-sage-600 text-white hover:bg-sage-700',
                        today: 'text-sage-600 font-bold'
                      }}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-sage-800 mb-3 uppercase tracking-wider">{t('booking.selectTime')}</label>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                            selectedTime === time
                              ? 'bg-sage-600 border-sage-600 text-white'
                              : 'bg-transparent border-beige-200 text-charcoal-800 hover:border-sage-400'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full min-h-[200px] border border-dashed border-beige-300 rounded-2xl flex items-center justify-center bg-beige-50/30 text-charcoal-800/50 text-sm">
                      {t('booking.selectDateFirst')}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-beige-100">
                <button
                  type="submit"
                  disabled={!selectedDate || !selectedTime}
                  className="w-full py-4 bg-[#25D366] text-white rounded-xl text-lg font-medium hover:bg-[#1ebd5b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  {dir === 'rtl' ? 'تأكيد الحجز عبر واتساب' : 'Book via WhatsApp'}
                </button>
                <p className="mt-3 text-center text-sm text-charcoal-600 font-light">
                  {dir === 'rtl' ? 'سيتم تحويلك إلى تطبيق واتساب لتأكيد الموعد.' : 'You will be redirected to WhatsApp to confirm the appointment.'}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
