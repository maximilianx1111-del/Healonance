import Hero from '../components/Hero';
import Services from '../components/Services';
import Booking from '../components/Booking';

export default function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <Services />
      <Booking />
    </div>
  );
}
