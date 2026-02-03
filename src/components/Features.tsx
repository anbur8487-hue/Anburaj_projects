import { Zap, Shield, Smartphone, TrendingUp, Globe, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your site loads instantly, keeping visitors engaged.',
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee for peace of mind.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Perfectly optimized for all devices, from smartphones to desktop screens.',
  },
  {
    icon: TrendingUp,
    title: 'SEO Optimized',
    description: 'Built-in SEO best practices help your site rank higher in search results.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'CDN-powered delivery ensures fast loading times worldwide.',
  },
  {
    icon: Users,
    title: 'User Focused',
    description: 'Intuitive interfaces designed with your users in mind for maximum engagement.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-gray-600">
            Powerful features and tools designed to help you build, grow, and scale your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <feature.icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
