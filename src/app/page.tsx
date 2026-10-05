import NeuralBackground from '@/components/NeuralBackground';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Research from '@/components/Research';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Ideas from '@/components/Ideas';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

// The page only arranges sections; their content lives in src/data/.
export default function Home() {
  return (
    <>
      <NeuralBackground />
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--color-bg)_70%)]" aria-hidden />
      <main id="main" className="relative">
        <Hero />
        <Work />
        <Research />
        <Experience />
        <Skills />
        <Ideas />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
