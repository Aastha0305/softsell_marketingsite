import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director, TechCorp",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "Working with this team transformed our online presence completely. The attention to detail and creative solutions they provided exceeded our expectations. Our conversion rate has increased by 40% since launching our new website!"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO, Innovate Solutions",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "I've worked with many development teams over the years, but none have delivered the level of quality and professionalism I experienced here. They took the time to understand our unique needs and created a solution that perfectly aligned with our vision."
    },
    {
      id: 3,
      name: "Emma Williams",
      position: "Founder, EcoStart",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The team's expertise in both design and functionality is remarkable. They created an intuitive, beautiful platform that our customers love. What impressed me most was their commitment to meeting deadlines without compromising quality."
    },
    {
      id: 4,
      name: "David Rodriguez",
      position: "CTO, FinServe Inc.",
      image: "/api/placeholder/60/60", 
      rating: 4,
      text: "Their technical knowledge and problem-solving abilities are outstanding. They tackled complex integration challenges that other developers couldn't solve. The support after launch has been exceptional too, with quick responses to any questions."
    },
    {
      id: 5,
      name: "Priya Patel",
      position: "E-commerce Manager, StyleHub",
      image: "/api/placeholder/60/60",
      rating: 5,
      text: "The e-commerce solution they built for us has completely transformed our business. User-friendly, fast, and secure - everything we wanted. Our sales have increased by 65% since implementation, and customer feedback has been overwhelmingly positive."
    }
  ];

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setAutoplay(false);
    setActiveIndex(index);
  };

  // Display array of stars based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Don't just take our word for it. Hear what our satisfied clients have to say about their experiences working with us.
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial card */}
          <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 mb-8 relative">
            <div className="absolute -top-6 left-10 text-blue-600">
              <Quote size={48} className="opacity-20" />
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center md:items-start">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="rounded-full w-16 h-16 object-cover mb-4"
                />
                <h3 className="font-bold text-lg text-gray-900 mb-1">{testimonials[activeIndex].name}</h3>
                <p className="text-gray-600 text-sm mb-4">{testimonials[activeIndex].position}</p>
                <div className="flex space-x-1 mb-4">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>
              
              <div className="md:w-3/4 md:pl-8 md:border-l border-gray-200">
                <p className="text-gray-700 text-lg italic leading-relaxed">
                  "{testimonials[activeIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-4 px-4">
            <button 
              onClick={handlePrev}
              className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-md transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNext}
              className="bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-md transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Dots for pagination */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Client logos */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center justify-center h-12">
                <div className="bg-gray-400 rounded w-32 h-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}