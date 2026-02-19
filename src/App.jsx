import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Deployment from './components/Deployment';
import ModelSection from './components/ModelSection';
import Features from './components/Features';
import Security from './components/Security';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <Deployment />
      <ModelSection />
      <Features />
      <Security />
      <UseCases />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
