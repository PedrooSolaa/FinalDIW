import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Testimonials from './components/layout/Testimonials';
import Section from './components/ui/Section';

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar theme={theme} onToggleDarkMode={toggleTheme} />
      <Hero />
      <Home />
      <Testimonials />
      <Section background="default" padding="sm" />
      <Footer />
    </div>
  );
}

export default App;
