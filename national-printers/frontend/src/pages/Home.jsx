import Hero from '../sections/Hero';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Services from '../sections/Services';
import Gallery from '../sections/Gallery';
import WhyUs from '../sections/WhyUs';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Contact />
      <Services />
      <Gallery />
      <WhyUs />
      <Footer />
    </main>
  );
}
