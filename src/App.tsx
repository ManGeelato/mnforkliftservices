import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ForkliftServicesPage from './pages/ForkliftServicesPage';
import EarthMovingServicesPage from './pages/EarthMovingServicesPage';
import HeavyDutyServicesPage from './pages/HeavyDutyServicesPage';
import ContactPage from './pages/ContactPage';

type Page = 'home' | 'about' | 'services' | 'forklift' | 'earthmoving' | 'heavyduty' | 'contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage onNavigate={setCurrentPage} />;
      case 'forklift':
        return <ForkliftServicesPage />;
      case 'earthmoving':
        return <EarthMovingServicesPage />;
      case 'heavyduty':
        return <HeavyDutyServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}

export default App;
