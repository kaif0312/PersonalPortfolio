import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/sections/Hero';
import Achievements from '@/components/sections/Achievements';
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
