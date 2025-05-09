import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  // Check system preference for dark mode initially
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true' || prefersDarkMode
  );
  
  // Apply theme on initial load and when changed
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        <div className="py-12">
          <HowItWorks />
        </div>
        
        <div className="py-12 bg-gray-50 dark:bg-gray-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <WhyChooseUs />
        </div>
        
        <div className="py-12">
          <Testimonials />
        </div>
        
        <div className="py-12 bg-gray-50 dark:bg-gray-800 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>

        
      </main>
      
      <ChatWidget />
      <Footer />
    </div>
  );
}

export default App;