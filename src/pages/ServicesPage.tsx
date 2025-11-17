import { Forklift, Shovel, Truck, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Comprehensive heavy machinery solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Forklift services"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Forklift size={32} className="text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Forklift Services</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our comprehensive forklift services keep your material handling operations running at peak efficiency. We offer expert maintenance, repairs, and support for all forklift models.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Preventive maintenance programs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Emergency repair services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Parts supply and replacement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Safety inspections and certifications</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shovel size={32} className="text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Earth Moving Vehicles</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Specialized services for earth moving equipment including excavators, bulldozers, and loaders. We ensure your heavy machinery operates safely and efficiently on every project.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Equipment maintenance and servicing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Hydraulic system repairs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Track and undercarriage services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">On-site emergency support</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Earth moving vehicles"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Heavy duty vehicles"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Truck size={32} className="text-white" />
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Heavy Duty Vehicles</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete service solutions for heavy duty trucks and vehicles. Our expert technicians handle everything from routine maintenance to complex repairs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Engine diagnostics and repairs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Transmission and drivetrain services</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Brake system maintenance</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fleet management support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Our Services?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to discuss your specific requirements and receive a customized service plan
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            Request a Quote
          </a>
        </div>
      </section>
    </div>
  );
}
