import Hero from '../sections/Hero';
import Contact from '../sections/Contact';
import About from '../sections/About';
import Services from '../sections/Services';
import Gallery from '../sections/Gallery';
import WhyUs from '../sections/WhyUs';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Contact />
      <About />
      <Services />
      <Gallery />
      <WhyUs />
      <Footer />
    </main>
  );
}
