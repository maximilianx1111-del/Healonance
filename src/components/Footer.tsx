import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import logoUrl from '../assets/images/healonace_logo_1779369184258.png';

export default function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="bg-sage-900 text-beige-50 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-6 bg-white w-fit rounded-xl overflow-hidden p-1">
              <img src={logoUrl} alt="Healonace Logo" className="h-10 md:h-12 w-auto" />
            </Link>
            <p className="text-sage-200 font-light leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-sage-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-sage-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-sage-800 flex items-center justify-center hover:bg-sage-700 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-white">{t('footer.services')}</h4>
            <ul className="space-y-4 text-sage-200 font-light">
              <li><Link to="/#services" className="hover:text-white transition-colors">{t('services.reikiTitle')}</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">{t('services.thetaTitle')}</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">{t('services.bodyCodeTitle')}</Link></li>
              <li><Link to="/#services" className="hover:text-white transition-colors">{t('footer.distanceHealing')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-white">{t('footer.quickLinks')}</h4>
            <ul className="space-y-4 text-sage-200 font-light">
              <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">{t('nav.shop')}</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif mb-6 text-white">{t('footer.newsletter')}</h4>
            <p className="text-sage-200 font-light mb-4">
              {t('footer.newsletterDesc')}
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className={`bg-sage-800 border border-sage-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-sage-500 placeholder:text-sage-400 ${dir === 'rtl' ? 'text-right' : ''}`}
              />
              <button
                type="submit"
                className="bg-beige-200 text-sage-900 px-4 py-3 rounded-lg font-medium hover:bg-white transition-colors"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-sage-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sage-400 text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Healonace. {t('footer.rights')}</p>
          <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
