import ImageCarousel from '../components/ImageCarousel';
import { CheckCircle } from 'lucide-react';

export default function HeavyDutyServicesPage() {
  const heavyDutyImages = [
    '/IMG-20251114-WA0009.jpg',
    '/IMG-20251114-WA0010.jpg',
    '/IMG-20251114-WA0011.jpg',
    '/IMG-20251114-WA0012.jpg',
    '/IMG-20251114-WA0014.jpg',
    '/IMG-20251114-WA0017.jpg',
    '/IMG-20251114-WA0018.jpg',
    '/IMG-20251114-WA0023.jpg',
    '/IMG-20251114-WA0037.jpg',
    '/IMG-20251114-WA0042.jpg',
    '/IMG-20251114-WA0044.jpg',
    '/IMG-20251114-WA0045.jpg',
    '/IMG-20251114-WA0048.jpg',
    '/IMG-20251114-WA0051.jpg',
    
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Heavy Duty Services</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Comprehensive maintenance and repair for heavy duty trucks and vehicles
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Gallery</h2>
            <ImageCarousel images={heavyDutyImages} title="Heavy Duty Services" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Professional Heavy Duty Vehicle Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our expert technicians provide comprehensive services for heavy duty trucks and vehicles. From
                engine diagnostics to transmission repair, we handle all aspects of heavy vehicle maintenance and
                support your fleet's reliability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Engine Diagnostics</h4>
                    <p className="text-gray-600 text-sm">Advanced diagnostics and engine repair services</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Transmission Service</h4>
                    <p className="text-gray-600 text-sm">Complete transmission and drivetrain services</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Brake System Maintenance</h4>
                    <p className="text-gray-600 text-sm">Safety-critical brake system servicing</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Fleet Management</h4>
                    <p className="text-gray-600 text-sm">Coordinated maintenance for vehicle fleets</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Roadside Assistance</h4>
                    <p className="text-gray-600 text-sm">24/7 emergency support and breakdown assistance</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 md:p-10 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Trust Us?</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Expert Technicians</h4>
                  <p className="text-gray-600 text-sm">
                    Certified professionals with extensive heavy vehicle experience
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Modern Equipment</h4>
                  <p className="text-gray-600 text-sm">
                    State-of-the-art diagnostic and repair equipment
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">24/7 Availability</h4>
                  <p className="text-gray-600 text-sm">
                    Round-the-clock support for emergency situations
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Fleet Solutions</h4>
                  <p className="text-gray-600 text-sm">
                    Customized programs for commercial fleet operators
                  </p>
                </div>
              </div>

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
                Request Service
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Heavy Duty Support</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Keep your heavy duty vehicles operating at peak performance with our professional services
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
