import Practitioner from '../components/Practitioner';
import { FadeInUp } from '../components/ScrollEffects';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-24 bg-beige-50">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-serif text-sage-900 mb-6">About Us</h1>
            <p className="text-xl text-charcoal-700 font-light leading-relaxed">
              We believe in the profound connection between mind, body, and spirit. Our mission is to guide you on a journey of profound healing, self-discovery, and spiritual awakening.
            </p>
          </FadeInUp>
        </div>
      </section>
      <Practitioner />
      <section className="py-24 bg-sage-900 text-white text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Philosophy</h2>
            <p className="text-lg text-sage-100 font-light leading-relaxed">
              True healing comes from within. We simply provide the tools, the space, and the energetic support to help you unlock your own innate ability to heal. Every session is tailored to your unique energetic blueprint.
            </p>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
