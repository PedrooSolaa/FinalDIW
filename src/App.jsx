import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Testimonials from './components/layout/Testimonials';
import VideoButton from './components/layout/VideoButton';
import Section from './components/ui/Section';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white transition-colors duration-300">
      <Navbar theme={theme} onToggleDarkMode={toggleTheme} />
      <Hero />
      <Home />
      <Testimonials />
      <VideoButton />
      <Footer />
    </div>
  );
}

export default App;
