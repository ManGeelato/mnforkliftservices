import { Mail, Phone, MapPin } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/da1860cb-3cd1-4bec-b1a2-159f292be52c_removalai_preview.png"
                alt="MN Forklift Services"
                className="h-12 w-12"
              />
              <h3 className="text-lg font-bold">MN FORKLIFT SERVICES</h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your trusted partner for forklift services, earth moving vehicles, and heavy duty equipment solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">+27 (0) 74 276 5244</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@mnforklift.co.za</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MN Forklift Services. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Designed by&nbsp;
                <a href="https://www.linkedin.com/in/emmanuel-kaome-0247b7224/" target="_blank"
                  >Emmanuel 'Gadaffi' Kaome</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
