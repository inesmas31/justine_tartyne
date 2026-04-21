import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedSection from './components/FeaturedSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div id="top" className="bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <GallerySection />
      <ContactSection />
    </div>
  );
}
