import ImageCarousel from '../components/ImageCarousel';
import { CheckCircle } from 'lucide-react';

export default function ForkliftServicesPage() {
  const forkliftImages = [
    '/IMG-20251114-WA0058.jpg',
    '/IMG-20251114-WA0059.jpg',
    'IMG-20251114-WA0063.jpg',
    'IMG-20251114-WA0064.jpg',
    'IMG-20251114-WA0069.jpg',
    'IMG-20251114-WA0069.jpg',
    'IMG-20251114-WA0019.jpg',
    'IMG-20251114-WA0020.jpg',
    'IMG-20251114-WA0025.jpg',
    'IMG-20251114-WA0026.jpg',
    'IMG-20251114-WA0034.jpg',
    'IMG-20251114-WA0035.jpg',
    'IMG-20251114-WA0053.jpg',
    'IMG-20251114-WA0054.jpg',
    'IMG-20251114-WA0055.jpg',
    'IMG-20251114-WA0056.jpg',
    'IMG-20251114-WA0069.jpg',
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Forklift Services</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Professional forklift maintenance, repairs, and support services
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Gallery</h2>
            <ImageCarousel images={forkliftImages} title="Forklift Services" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Comprehensive Forklift Solutions
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our expert technicians provide complete forklift services to keep your material handling
                operations running smoothly. From routine maintenance to emergency repairs, we're here to support
                your business.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Preventive Maintenance</h4>
                    <p className="text-gray-600 text-sm">Regular service schedules to prevent breakdowns</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Emergency Repairs</h4>
                    <p className="text-gray-600 text-sm">24/7 support for urgent equipment failures</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Parts Supply</h4>
                    <p className="text-gray-600 text-sm">Genuine parts for all forklift models</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Safety Inspections</h4>
                    <p className="text-gray-600 text-sm">Certified safety checks and compliance verification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Technical Support</h4>
                    <p className="text-gray-600 text-sm">Expert guidance on equipment optimization</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 md:p-10 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Service?</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Certified Technicians</h4>
                  <p className="text-gray-600 text-sm">
                    Our team has extensive training and certification in all forklift models
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Quick Turnaround</h4>
                  <p className="text-gray-600 text-sm">
                    Minimize downtime with our rapid response and efficient repair services
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Competitive Pricing</h4>
                  <p className="text-gray-600 text-sm">
                    Transparent pricing with no hidden fees or surprise charges
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Warranty Protection</h4>
                  <p className="text-gray-600 text-sm">
                    All repairs backed by comprehensive warranty coverage
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Professional Service?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today to schedule your forklift maintenance or get emergency support
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
