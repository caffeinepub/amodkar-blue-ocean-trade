import { Header } from './components/site/Header';
import { HeroSection } from './components/site/sections/HeroSection';
import { AboutSection } from './components/site/sections/AboutSection';
import { MissionSection } from './components/site/sections/MissionSection';
import { ProductsSection } from './components/site/sections/ProductsSection';
import { QualityExportsSection } from './components/site/sections/QualityExportsSection';
import { ContactSection } from './components/site/sections/ContactSection';
import { Footer } from './components/site/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ProductsSection />
        <QualityExportsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
