import { useState } from 'react';

function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    // Handle submission logic here
    console.log('Email submitted:', email);
    // Reset form
    setEmail('');
    // Show success message or redirect
  };

  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-900/20 dark:to-teal-900/20 transform skew-y-3 -translate-y-24"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        {/* Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            <span className="block text-blue-600 dark:text-blue-400">Transform</span>
            <span className="block">Unused Software Into</span>
            <span className="block">Immediate Revenue</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            SoftSell helps businesses recover value from unused software licenses. Get an instant valuation and payment within days.
          </p>
          
          <div className="mt-8 sm:flex justify-center md:justify-start">
            <div className="mt-3 sm:mt-0">
              <a 
                href="#contact" 
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors shadow-md hover:shadow-lg"
              >
                Get Free Valuation
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a 
                href="#how-it-works" 
                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800 bg-blue-${i*100} dark:bg-blue-${i*100+200}`}></div>
              ))}
            </div>
            <p className="mt-3 sm:mt-0 sm:ml-4 text-sm text-gray-500 dark:text-gray-400">
              Trusted by 2,000+ businesses worldwide
            </p>
          </div>
        </div>
        
        {/* Hero image/illustration */}
        <div className="mt-12 md:mt-0 relative">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Instant License Valuation</h2>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Enter your email to get started with a free valuation.</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={handleSubmit}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                      Get Started Now
                    </button>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-500 dark:text-gray-400 text-center">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="bg-gray-50 dark:bg-gray-700 px-8 py-6 border-t border-gray-200 dark:border-gray-600">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">$25M+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Recovered</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">48hrs</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Avg. Payment</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5,000+</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Transactions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 dark:bg-yellow-500/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-200 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;