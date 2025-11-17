import ImageCarousel from '../components/ImageCarousel';
import { CheckCircle } from 'lucide-react';

export default function EarthMovingServicesPage() {
  const earthMovingImages = [
    '/IMG-20251114-WA0071.jpg',
    '/IMG-20251114-WA0072.jpg',
    '/IMG-20251114-WA0073.jpg',
    '/IMG-20251114-WA0074.jpg',
    '/IMG-20251114-WA0075.jpg',
    '/IMG-20251114-WA0079.jpg',
    '/IMG-20251114-WA0080.jpg',
    '/IMG-20251114-WA0081.jpg',
    '/IMG-20251114-WA0082.jpg',
    '/IMG-20251114-WA0084.jpg',
    '/IMG-20251114-WA0085.jpg',
    '/IMG-20251114-WA0087.jpg',
    '/IMG-20251114-WA0089.jpg',
    '/IMG-20251114-WA0090.jpg',
    '/IMG-20251114-WA0092.jpg',
    '/IMG-20251114-WA0093.jpg',
    '/IMG-20251114-WA0094.jpg',
    '/IMG-20251114-WA0095.jpg',
    '/IMG-20251114-WA00100.jpg',
    '/IMG-20251114-WA00101.jpg',
    '/IMG-20251114-WA00103.jpg',
    '/IMG-20251114-WA00104.jpg',
    '/IMG-20251114-WA00106.jpg',
    '/IMG-20251114-WA00107.jpg',
    
  ];

  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Earth Moving Services</h1>
          <p className="text-lg text-gray-200 max-w-3xl">
            Expert maintenance and support for excavators, bulldozers, and heavy earth moving equipment
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Gallery</h2>
            <ImageCarousel images={earthMovingImages} title="Earth Moving Services" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
                Complete Earth Moving Equipment Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From excavators to bulldozers and loaders, our specialized team ensures your earth moving
                equipment operates at peak performance. We handle complex mechanical and hydraulic systems with
                precision and expertise.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Equipment Maintenance</h4>
                    <p className="text-gray-600 text-sm">Routine servicing to extend equipment lifespan</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Hydraulic System Repairs</h4>
                    <p className="text-gray-600 text-sm">Expert repair of complex hydraulic systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Track & Undercarriage</h4>
                    <p className="text-gray-600 text-sm">Specialized maintenance for tracks and undercarriage</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">On-Site Support</h4>
                    <p className="text-gray-600 text-sm">Emergency response and on-site repairs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Operator Training</h4>
                    <p className="text-gray-600 text-sm">Training programs to maximize equipment efficiency</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 md:p-10 rounded-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Expertise</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">All Equipment Types</h4>
                  <p className="text-gray-600 text-sm">
                    Excavators, bulldozers, loaders, scrapers, and more
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Specialized Knowledge</h4>
                  <p className="text-gray-600 text-sm">
                    Deep expertise in hydraulic and mechanical systems
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Mobile Service Units</h4>
                  <p className="text-gray-600 text-sm">
                    Equipped to service equipment on-site at any location
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-slate-900 mb-1">Parts Inventory</h4>
                  <p className="text-gray-600 text-sm">
                    Extensive stock of genuine parts for major brands
                  </p>
                </div>
              </div>

              <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all">
                Schedule Service
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Keep Your Equipment Running Strong</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
            Trust our expert technicians to maintain and repair your earth moving equipment
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
