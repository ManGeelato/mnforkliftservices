import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'services' | 'forklift' | 'earthmoving' | 'heavyduty' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const serviceItems: { label: string; page: Page }[] = [
    { label: 'Forklift Services', page: 'forklift' },
    { label: 'Earth Moving Services', page: 'earthmoving' },
    { label: 'Heavy Duty Services', page: 'heavyduty' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="/da1860cb-3cd1-4bec-b1a2-159f292be52c_removalai_preview.png"
              alt="MN Forklift Services"
              className="h-14 w-14"
            />
            <div>
              <h1 className="text-xl font-bold">MN FORKLIFT SERVICES</h1>
              <p className="text-xs text-blue-300">Forklifts, Earth Moving and Heavy Duty Solutions</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => handleNavigate('home')}
              className={`text-sm font-semibold transition-colors hover:text-blue-400 ${
                currentPage === 'home' ? 'text-blue-400 border-b-2 border-blue-400' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`text-sm font-semibold transition-colors hover:text-blue-400 ${
                currentPage === 'about' ? 'text-blue-400 border-b-2 border-blue-400' : ''
              }`}
            >
              About
            </button>

            <div className="relative group">
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`text-sm font-semibold transition-colors hover:text-blue-400 flex items-center space-x-1 ${
                  ['services', 'forklift', 'earthmoving', 'heavyduty'].includes(currentPage)
                    ? 'text-blue-400'
                    : ''
                }`}
              >
                <span>Services</span>
                <ChevronDown size={16} />
              </button>

              <div className="absolute left-0 mt-0 w-48 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {serviceItems.map((item) => (
                  <button
                    key={item.page}
                    onClick={() => handleNavigate(item.page)}
                    className={`block w-full text-left px-4 py-3 text-sm font-semibold hover:bg-slate-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      currentPage === item.page ? 'text-blue-400 bg-slate-700' : 'text-gray-200'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavigate('contact')}
              className={`text-sm font-semibold transition-colors hover:text-blue-400 ${
                currentPage === 'contact' ? 'text-blue-400 border-b-2 border-blue-400' : ''
              }`}
            >
              Contact
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-1">
            <button
              onClick={() => handleNavigate('home')}
              className={`block w-full text-left py-2 px-4 text-sm font-semibold transition-colors hover:bg-slate-800 ${
                currentPage === 'home' ? 'text-blue-400 bg-slate-800' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`block w-full text-left py-2 px-4 text-sm font-semibold transition-colors hover:bg-slate-800 ${
                currentPage === 'about' ? 'text-blue-400 bg-slate-800' : ''
              }`}
            >
              About
            </button>

            <div>
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="block w-full text-left py-2 px-4 text-sm font-semibold transition-colors hover:bg-slate-800 flex items-center justify-between"
              >
                <span>Services</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {servicesDropdownOpen && (
                <div className="bg-slate-800">
                  {serviceItems.map((item) => (
                    <button
                      key={item.page}
                      onClick={() => handleNavigate(item.page)}
                      className={`block w-full text-left py-2 px-8 text-sm font-semibold transition-colors hover:bg-slate-700 ${
                        currentPage === item.page ? 'text-blue-400' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('contact')}
              className={`block w-full text-left py-2 px-4 text-sm font-semibold transition-colors hover:bg-slate-800 ${
                currentPage === 'contact' ? 'text-blue-400 bg-slate-800' : ''
              }`}
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
