import { useState } from 'react';
import { Check, Shield, Clock, Zap, Heart, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const features = [
    {
      icon: <Shield className="text-blue-600" />,
      title: "Trusted Experience",
      description: "With over 15 years in the industry, we've built a reputation for excellence and reliability that our clients trust."
    },
    {
      icon: <Check className="text-green-600" />,
      title: "Quality Guaranteed",
      description: "We stand behind every project with our satisfaction guarantee and commitment to using only premium materials."
    },
    {
      icon: <Clock className="text-amber-600" />,
      title: "On-Time Delivery",
      description: "We understand the value of your time, which is why we pride ourselves on meeting deadlines without compromising quality."
    },
    {
      icon: <Zap className="text-purple-600" />,
      title: "Innovative Solutions",
      description: "Our team brings creative thinking and cutting-edge approaches to solve your most complex challenges."
    },
    {
      icon: <Heart className="text-red-600" />,
      title: "Personalized Service",
      description: "We take the time to understand your unique needs, ensuring tailored solutions that align with your vision."
    },
    {
      icon: <Award className="text-yellow-600" />,
      title: "Award-Winning Team",
      description: "Our talented professionals have been recognized in the industry for their exceptional work and dedication."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover the difference that sets us apart and why clients continue to choose our services for their most important projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 transform ${
                hoveredCard === index ? 'scale-105 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 mx-auto">
                <div className="w-8 h-8">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}