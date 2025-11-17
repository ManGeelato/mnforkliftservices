import { Target, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Leading the industry in forklift services, earth moving, and heavy duty vehicle solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                MN Forklift Services has been at the forefront of heavy machinery solutions, delivering exceptional service and support to businesses across various industries. Our commitment to excellence and customer satisfaction has made us a trusted name in the field.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We specialize in forklift services, earth moving vehicles, and heavy duty equipment, providing comprehensive solutions that keep your operations running smoothly. Our team of experienced professionals ensures every project is handled with precision and care.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a focus on safety, reliability, and efficiency, we've built lasting relationships with our clients by consistently exceeding expectations and delivering results that matter.
              </p>
            </div>
            <div>
              <img
                src="/IMG-20251114-WA0068.jpg"
                alt="Heavy machinery"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Striving for the highest quality in every service we provide
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Teamwork</h3>
              <p className="text-gray-600">
                Collaborating to deliver the best solutions for our clients
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Operating with honesty and transparency in all we do
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our services and solutions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
