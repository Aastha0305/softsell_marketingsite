import { CheckCircleIcon, Clipboard, CreditCardIcon } from 'lucide-react';

function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: 'Upload Your Licenses',
      description: 'Simply share your license details through our secure platform.',
      icon: <Clipboard className="w-12 h-12" />,
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
    },
    {
      id: 2,
      title: 'Receive Valuation',
      description: 'Our experts analyze your licenses and provide a competitive market valuation within 24 hours.',
      icon: <CheckCircleIcon className="w-12 h-12" />,
      color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
    },
    {
      id: 3,
      title: 'Get Paid Quickly',
      description: 'Accept our offer and receive payment through your preferred method within 2-3 business days.',
      icon: <CreditCardIcon className="w-12 h-12" />,
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <section id="how-it-works" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">How SoftSell Works</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Our streamlined process makes selling software licenses simple, secure, and profitable.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 dark:bg-gray-700 z-0 transform -translate-x-1/2" />
                )}
                
                {/* Step Card */}
                <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center z-10 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 rounded-full bg-blue-600 dark:bg-blue-500 w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                  
                  {/* Icon */}
                  <div className={`mx-auto p-3 rounded-full ${step.color}`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="mt-6 text-xl font-medium text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-500 dark:text-gray-400 flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            Start Your Valuation
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;