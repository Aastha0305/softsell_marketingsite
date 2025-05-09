import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Our Team', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'News & Press', href: '#' },
    ],
    services: [
      { name: 'Web Development', href: '#' },
      { name: 'Mobile Apps', href: '#' },
      { name: 'UI/UX Design', href: '#' },
      { name: 'Digital Marketing', href: '#' },
      { name: 'Consulting', href: '#' },
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: <Facebook size={20} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={20} />, href: '#' },
    { name: 'Instagram', icon: <Instagram size={20} />, href: '#' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top Section with Logo and Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-gray-700">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-xl">AppSite</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We help businesses of all sizes build amazing digital experiences that drive growth and customer satisfaction.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Middle Section with Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 border-b border-gray-700">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-blue-500 flex-shrink-0 mt-1" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-blue-500 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-blue-500 flex-shrink-0" />
                <span>contact@appsite.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section with Copyright */}
        <div className="pt-8 md:flex md:items-center md:justify-between">
          <p>&copy; {currentYear} AppSite. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white mr-4 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mr-4 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}