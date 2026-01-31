import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Achievements from '@/components/sections/Achievements';
import Stats from '@/components/sections/Stats';
import Resume from '@/components/sections/Resume';
import Projects from '@/components/sections/Projects';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';
import DarkModeToggle from '@/components/ui/DarkModeToggle';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Achievements />
      <Resume />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
      <DarkModeToggle />
    </main>
  );
}
