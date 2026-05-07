import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');
  const navigate = useNavigate();

 const quickLinks = [
  { name: "Home", path: "/", icon: "🏠" },
  { name: "Crop", path: "/crop", icon: "🌾" },
  { name: "Schemes", path: "/schemes", icon: "📋" },
  { name: "Market", path: "/marketprice", icon: "💰" },
  { name: "Weather", path: "/weather", icon: "🌤️" },
  { name: "Contact", path: "/contact", icon: "📞" }
];

  const resources = [
    { name: "Crop Guide", path: "/crop", icon: "🌾" },
    { name: "Loans", path: "/loans", icon: "🏦" },
    { name: "Success Stories", path: "/success-stories", icon: "⭐" },
    { name: "FAQ", path: "/faq", icon: "❓" },
    { name: "Blog", path: "/blog", icon: "📝" }
  ];

  const contactInfo = [
    { icon: "📞", text: "0800-12345", link: "tel:080012345" },
    { icon: "💬", text: "+92 307 1567817", link: "https://wa.me/923071567817" },
    { icon: "📧", text: "arslansaqi956@gmail.com", link: "arslansaqi956@gmail.com" },
  ];

  const socialLinks = [
    { icon: "📘", link: "https://facebook.com/KrishiMitrPK", color: "hover:bg-blue-600" },
    { icon: "🐦", link: "https://twitter.com/KrishiMitr", color: "hover:bg-sky-500" },
    { icon: "💬", link: "https://wa.me/923071567817", color: "hover:bg-green-500" },
    { icon: "📸", link: "https://instagram.com/krishimitr.pk", color: "hover:bg-pink-600" },
  ];

  const provinces = [
    { name: "Punjab", icon: "🌾" },
    { name: "Sindh", icon: "🌊" },
    { name: "KPK", icon: "⛰️" },
    { name: "Balochistan", icon: "🏜️" }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus('Subscribed! ✅');
      setTimeout(() => setNewsletterStatus(''), 2000);
      setNewsletterEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (path, shouldScrollToTop = true) => {
    const currentPath = window.location.pathname;
    
    if (currentPath === path) {
      if (shouldScrollToTop) {
        scrollToTop();
      }
    } else {
      navigate(path);
      if (shouldScrollToTop) {
        setTimeout(() => {
          scrollToTop();
        }, 100);
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-700 to-emerald-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🇵🇰</span>
              <h2 className="text-xl font-extrabold bg-gradient-to-r from-green-300 to-emerald-300 bg-clip-text text-transparent">
                KrishiMitr
              </h2>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-2 font-medium">
              Empowering Pakistani farmers since 2026.
            </p>
            <div className="flex items-center gap-2 text-green-300 text-xs font-semibold">
              <span>24/7 Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-extrabold mb-3 flex items-center gap-2">
              <span className="text-sm">🔗</span> Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {quickLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigation(link.path, true)}
                  className="text-gray-200 hover:text-green-300 transition-colors duration-300 flex items-center gap-2 text-sm font-semibold py-1 text-left cursor-pointer w-full"
                >
                  <span className="text-xs">{link.icon}</span>
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Coverage */}
          <div>
            <h3 className="text-base font-extrabold mb-3 flex items-center gap-2">
              <span className="text-sm">📞</span> Contact
            </h3>
            <ul className="space-y-2">
              {contactInfo.map((contact, idx) => (
                <li key={idx}>
                  <a 
                    href={contact.link}
                    target={contact.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="text-gray-200 hover:text-green-300 transition-colors duration-300 flex items-center gap-2 text-sm font-semibold"
                  >
                    <span className="text-sm">{contact.icon}</span>
                    <span>{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Provinces */}
            <div className="mt-4">
              <h4 className="text-xs font-extrabold mb-2 text-gray-200">Coverage Areas</h4>
              <div className="flex flex-wrap gap-2">
                {provinces.map((province, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-white/10 rounded-full text-xs font-semibold hover:bg-green-600 transition-colors duration-300 flex items-center gap-1 cursor-default"
                  >
                    <span className="text-xs">{province.icon}</span>
                    <span>{province.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-6 pt-4 border-t border-green-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-lg">📧</span>
              <p className="text-gray-200 text-sm font-semibold">Get weekly updates</p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Your email address"
                className="px-3 py-2 w-64 bg-green-800/50 border border-green-600 rounded-lg text-white text-sm placeholder-gray-300 focus:outline-none focus:border-green-400 font-medium"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold transition"
              >
                Subscribe
              </button>
            </form>
            {newsletterStatus && (
              <p className="text-green-300 text-sm font-semibold">{newsletterStatus}</p>
            )}
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-6 pt-4 border-t border-green-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex gap-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-green-800/50 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="flex gap-4 text-sm font-semibold text-gray-200">
              <button onClick={() => handleNavigation('/privacy-policy', true)} className="hover:text-green-300 transition cursor-pointer">
                Privacy Policy
              </button>
              <button onClick={() => handleNavigation('/terms-of-service', true)} className="hover:text-green-300 transition cursor-pointer">
                Terms of Service
              </button>
              <button onClick={scrollToTop} className="hover:text-green-300 transition cursor-pointer">
                Sitemap
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 border-t border-green-700 text-center">
          <p className="text-gray-300 text-xs font-semibold">
            © {currentYear} KrishiMitr Pakistan. All rights reserved.
          </p>
          <p className="text-green-400 text-[10px] mt-1 font-medium">
            🇵🇰 Made with for Pakistani Farmers
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/923071567817"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg transition-all duration-300 hover:scale-110 z-50 group"
      >
        <span className="group-hover:animate-pulse">💬</span>
      </a>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 left-4 bg-gray-800 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-lg transition-all duration-300 hover:scale-110 z-50"
        aria-label="Back to top"
      >
        ↑
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
