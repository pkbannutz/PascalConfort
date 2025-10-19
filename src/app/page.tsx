import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { TrustBar } from './components/sections/TrustBar';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Portfolio } from './components/sections/Portfolio';
import { FAQ } from './components/sections/FAQ';
import { ContactForm } from './components/sections/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Portfolio />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
