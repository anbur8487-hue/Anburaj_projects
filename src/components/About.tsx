import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Expert team with 10+ years of experience',
  'Proven track record of successful projects',
  'Cutting-edge technology and best practices',
  'Transparent communication and collaboration',
  'Dedicated support throughout your journey',
  'Scalable solutions that grow with your business',
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-3xl opacity-20"></div>
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Team collaboration"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Why Choose Us for Your Digital Needs
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're passionate about creating exceptional digital experiences that drive real results.
              Our team combines creativity, technical expertise, and strategic thinking to deliver
              solutions that exceed expectations.
            </p>

            <div className="space-y-4 pt-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start space-x-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
