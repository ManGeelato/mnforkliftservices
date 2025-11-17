import { Wrench, Truck, Shield, ArrowRight } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url(/IMG-20251114-WA0049.jpg)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Heavy Duty Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Expert forklift services, earth moving vehicles, and heavy duty equipment at your service. Professional, reliable, and efficient.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Our Services</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all shadow-lg"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in heavy machinery services with unmatched expertise and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Wrench size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Expert Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our certified technicians provide top-tier maintenance and repair services for all types of heavy machinery.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Wide Range</h3>
              <p className="text-gray-600 leading-relaxed">
                From forklifts to earth movers, we handle all your heavy equipment needs with comprehensive solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Reliable Partner</h3>
              <p className="text-gray-600 leading-relaxed">
                Count on us for dependable service, safety compliance, and professional support whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your heavy machinery needs and get a customized solution
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
