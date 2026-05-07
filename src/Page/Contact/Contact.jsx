import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const [loading, setLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('');

  // Office locations data
  const offices = [
    {
      city: 'Lahore',
      province: 'Punjab',
      address: '123, Green Avenue, Near Mall of Lahore, Johar Town',
      phone: '+92 307 1567817',
      email: 'arslansaqi956@gmail.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      map: 'https://maps.google.com/?q=Lahore',
      icon: '🏛️'
    },
    {
      city: 'Karachi',
      province: 'Sindh',
      address: '456, Sea View Road, Clifton, Block 5',
      phone: '+92 21 7654321',
      email: 'karachi@krishimitr.pk',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM',
      map: 'https://maps.google.com/?q=Karachi',
      icon: '🌊'
    },
    {
      city: 'Islamabad',
      province: 'ICT',
      address: '789, Diplomatic Enclave, F-8 Markaz',
      phone: '+92 51 9876543',
      email: 'islamabad@krishimitr.pk',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
      map: 'https://maps.google.com/?q=Islamabad',
      icon: '🏔️'
    }
  ];

  // Support team data with images
  const supportTeam = [
    {
      name: 'Muhammad Arslan',
      role: 'Head of Farmer Support',
      expertise: 'Crop Management',
      email: 'arslansaqi956@gmail.com',
      phone: '+92 307 1567817',
      image: 'Arslan.png',
      whatsapp: 'https://wa.me/923071567817'
    },
    {
      name: 'Sajid Farooq',
      role: 'Agricultural Expert',
      expertise: 'Crop Diseases & Pests',
      email: 'sajifrooq726@gmail.com',
      phone: '+92 306 5584017',
      image: 'Sajid.jpeg',
      whatsapp: 'https://wa.me/923065584017'
    },
    {
      name: 'Muhammad Basit',
      role: 'Technical Support',
      expertise: 'App & Website Support',
      email: 'raisahab2773@gmail.com',
      phone: '+92 3274916727',
      image: 'Basit.jpeg',
      whatsapp: 'https://wa.me/923274916727'
    },
    {
      name: 'Mirza Ahmad',
      role: 'Farmer Helpline',
      expertise: 'Urdu Support',
      email: 'am34420026@gmail.com',
      phone: '+92 3247062828',
      image: 'mirza.jpeg',
      whatsapp: 'https://wa.me/92'
    }
  ];

  // FAQs data
  const faqs = [
    {
      question: 'How do I register as a farmer on KrishiMitr?',
      answer: 'You can register by clicking the "Register as Farmer" button on the homepage. Fill in your basic information including name, CNIC, location, and farming details. It takes less than 5 minutes to complete registration.'
    },
    {
      question: 'Is KrishiMitr completely free for farmers?',
      answer: 'Yes! KrishiMitr is completely free for all Pakistani farmers. We believe in empowering farmers with free access to market prices, weather updates, and agricultural guidance.'
    },
    {
      question: 'How can I get mandi rates on my phone?',
      answer: 'You can subscribe to our SMS/WhatsApp alert service. Just enter your mobile number on any page, and you will receive daily mandi rates for your selected crops.'
    },
    {
      question: 'How accurate are the weather forecasts?',
      answer: 'We use multiple trusted weather sources and local meteorological data to provide accurate forecasts. Our weather predictions are updated every 2 hours for maximum accuracy.'
    },
    {
      question: 'Can I get government scheme information?',
      answer: 'Yes, we provide detailed information about all government agricultural schemes, including Kissan Package, subsidy programs, and loan facilities from ZTBL and other banks.'
    },
    {
      question: 'How do I report a problem with the app?',
      answer: 'You can report any issue through this contact form, call our helpline at 0800-12345, or email us at support@krishimitr.pk. Our technical team responds within 24 hours.'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Thank you for contacting us! Our team will respond within 24 hours.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      setLoading(false);

      setTimeout(() => {
        setFormStatus({ submitted: false, success: false, message: '' });
      }, 5000);
    }, 1500);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterStatus('Subscribed successfully!');
      setTimeout(() => setNewsletterStatus(''), 3000);
      setNewsletterEmail('');
    }
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">

      {/* Hero Section with Background Image - FIXED */}
      <section className="relative bg-gradient-to-r from-green-900 to-emerald-900 text-white overflow-hidden">
        {/* Background Image - z-index low rakho */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1600&h=600&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* Dark Overlay - properly layered */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>

        {/* Background decorations - behind content */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
          <div className="absolute top-10 left-10 text-6xl md:text-8xl animate-pulse">📞</div>
          <div className="absolute bottom-20 right-20 text-6xl md:text-8xl animate-pulse delay-1000">💬</div>
          <div className="absolute top-1/2 left-1/4 text-5xl md:text-7xl animate-bounce">🌾</div>
          <div className="absolute bottom-40 left-1/3 text-5xl md:text-6xl animate-pulse">🤝</div>
        </div>

        {/* Content - highest z-index */}
        <div className="relative z-20 container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1.5 mb-6 md:mb-8">
              <span className="text-sm md:text-base font-semibold text-white">🇵🇰 Get in Touch - KrishiMitr Pakistan</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-white leading-tight">
              We're Here to
              <span className="text-yellow-400 block mt-2">Help You Grow</span>
            </h1>

            {/* FIXED Paragraph - ab definitely dikhega */}
            <p className="text-lg md:text-xl text-white max-w-2xl mx-auto px-4 font-medium leading-relaxed bg-black/30 backdrop-blur-sm rounded-xl py-3 inline-block">
              Have questions? Need support? Our team of agricultural experts is ready to assist you 24/7.
            </p>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L1440 120L1440 0C1440 0 1320 40 1200 40C1080 40 960 0 840 0C720 0 600 40 480 40C360 40 240 0 120 0C60 0 30 10 0 20L0 120Z" fill="#f0fdf4" />
          </svg>
        </div>
      </section>
      {/* Quick Contact Stats */}
      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          <a href="tel:080012345" className="bg-white rounded-2xl shadow-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 text-center block">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2 md:mb-3">📞</div>
            <p className="text-gray-500 text-xs md:text-sm">Helpline</p>
            <p className="text-lg md:text-xl font-bold text-green-700">0800-12345</p>
            <p className="text-xs text-gray-400">Toll Free</p>
          </a>

          <a href="https://wa.me/923071567817" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl shadow-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 text-center block">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2 md:mb-3">💬</div>
            <p className="text-gray-500 text-xs md:text-sm">WhatsApp</p>
            <p className="text-lg md:text-xl font-bold text-green-700">+92 3071567817</p>
            <p className="text-xs text-gray-400">24/7 Support</p>
          </a>

          <a href="mailto:arslansaqi956@gmail.com" className="bg-white rounded-2xl shadow-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 text-center block">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2 md:mb-3">📧</div>
            <p className="text-gray-500 text-xs md:text-sm">Email</p>
            <p className="text-sm md:text-xl font-bold text-green-700 break-all">arslansaqi956@gmail.com</p>
            <p className="text-xs text-gray-400">Response within 24h</p>
          </a>

          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300 text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center text-2xl md:text-3xl mx-auto mb-2 md:mb-3">⏰</div>
            <p className="text-gray-500 text-xs md:text-sm">Support Hours</p>
            <p className="text-lg md:text-xl font-bold text-green-700">24/7</p>
            <p className="text-xs text-gray-400">Always Available</p>
          </div>
        </div>
      </div>

      {/* Contact Form and Info */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 md:px-6 py-3 md:py-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                <span>📝</span> Send us a Message
              </h2>
              <p className="text-green-100 text-xs md:text-sm mt-1">We'll get back to you as soon as possible</p>
            </div>

            <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4 md:space-y-5">
              {formStatus.submitted && (
                <div className={`p-3 md:p-4 rounded-xl ${formStatus.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  <p className={formStatus.success ? 'text-green-700 text-sm' : 'text-red-700 text-sm'}>{formStatus.message}</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm md:text-base"
                    placeholder="Muhammad Arslan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm md:text-base"
                    placeholder="arslansaqi956@gmail.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm md:text-base"
                    placeholder="0307 1567817"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type *</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm md:text-base"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="farming">Farming Advice</option>
                    <option value="market">Market Prices</option>
                    <option value="schemes">Government Schemes</option>
                    <option value="complaint">Complaint</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition text-sm md:text-base"
                  placeholder="Brief subject of your message"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 md:py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition resize-none text-sm md:text-base"
                  placeholder="Please describe your question or concern in detail..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 md:py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 md:px-6 py-3 md:py-4">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                  🏢 Our Offices
                </h2>
                <p className="text-green-100 text-xs md:text-sm mt-1">Visit us at our regional offices</p>
              </div>
              <div className="divide-y divide-gray-100">
                {offices.map((office, idx) => (
                  <div key={idx} className="p-4 md:p-6 hover:bg-green-50 transition-all duration-300">
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className="text-3xl md:text-4xl">{office.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-800 text-base md:text-lg">{office.city}</h3>
                        <p className="text-xs md:text-sm text-gray-500">{office.province}</p>
                        <p className="text-gray-600 text-xs md:text-sm mt-2">{office.address}</p>
                        <div className="mt-3 space-y-1">
                          <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-xs md:text-sm flex items-center gap-2 hover:text-green-600 transition">
                            <span>📞</span> {office.phone}
                          </a>
                          <a href={`mailto:${office.email}`} className="text-xs md:text-sm flex items-center gap-2 hover:text-green-600 transition">
                            <span>✉️</span> {office.email}
                          </a>
                          <p className="text-xs md:text-sm flex items-center gap-2">
                            <span>⏰</span> {office.hours}
                          </p>
                          <a href={office.map} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm flex items-center gap-2 text-green-600 hover:text-green-700 transition">
                            <span>📍</span> View on Map →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <a href="tel:0800435754726" className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-xl p-4 md:p-6 text-white transform hover:scale-105 transition-all duration-300 block">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <span className="text-3xl md:text-4xl">🚨</span>
                <h3 className="text-lg md:text-xl font-bold">Emergency Helpline</h3>
              </div>
              <p className="text-red-100 text-xs md:text-sm mb-2 md:mb-3">24/7 Emergency Support for Farmers</p>
              <p className="text-xl md:text-3xl font-bold mb-2">0800-HELP-KISAN</p>
              <p className="text-red-200 text-xs md:text-sm">(0800-4357-54726)</p>
            </a>
          </div>
        </div>
      </div>

      {/* Support Team Section with Images */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-3">
            Meet Our <span className="text-green-600">Support Team</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto px-2">
            Our dedicated agricultural experts are here to help you succeed
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {supportTeam.map((member, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="relative h-48 md:h-56 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x400?text=Team+Member';
                  }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-4 md:p-5 text-center">
                <h3 className="font-bold text-gray-800 text-base md:text-lg">{member.name}</h3>
                <p className="text-green-600 text-xs md:text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-500 text-xs mt-1">{member.expertise}</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <a href={`mailto:${member.email}`} className="text-xs text-gray-500 flex items-center justify-center gap-1 hover:text-green-600 transition">
                    <span>✉️</span> {member.email}
                  </a>
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-1 hover:text-green-600 transition">
                    <span>📞</span> {member.phone}
                  </a>
                  <a href={member.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs text-green-600 flex items-center justify-center gap-1 mt-2 hover:text-green-700 transition">
                    <span>💬</span> WhatsApp Chat
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 md:px-6 py-3 md:py-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span>❓</span> Frequently Asked Questions
            </h2>
            <p className="text-green-100 text-xs md:text-sm mt-1">Find quick answers to common questions</p>
          </div>

          <div className="divide-y divide-gray-100">
            {faqs.map((faq, idx) => (
              <div key={idx} className="transition-all duration-300">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex justify-between items-center hover:bg-green-50 transition-colors"
                >
                  <span className="font-semibold text-gray-800 text-sm md:text-base">{faq.question}</span>
                  <span className={`text-green-600 transform transition-transform duration-300 ${faqOpen === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${faqOpen === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-4 md:px-6 pb-3 md:pb-4 text-gray-600 text-sm md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Social Media & Newsletter Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span>📱</span> Connect With Us
            </h3>
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              <a href="https://facebook.com/KrishiMitrPK" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                <span className="text-xl md:text-2xl">📘</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">Facebook</p>
                  <p className="text-xs text-gray-500 hidden sm:block">@KrishiMitrPK</p>
                </div>
              </a>
              <a href="https://wa.me/923071567817" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-3 p-2 md:p-3 bg-green-50 rounded-xl hover:bg-green-100 transition">
                <span className="text-xl md:text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-gray-800 text-sm md:text-base">WhatsApp</p>
                  <p className="text-xs text-gray-500 hidden sm:block">+92 307 1567817</p>
                </div>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-xl p-4 md:p-6 text-white">
            <h3 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
              <span>📧</span> Subscribe to Newsletter
            </h3>
            <p className="text-green-100 text-xs md:text-sm mb-3 md:mb-4">
              Get weekly agricultural updates, market prices, and farming tips directly in your inbox
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-3 md:px-4 py-2 md:py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm md:text-base"
              />
              <button type="submit" className="px-4 md:px-6 py-2 md:py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 rounded-xl font-semibold transition-all transform hover:scale-105 text-sm md:text-base">
                Subscribe
              </button>
            </form>
            {newsletterStatus && (
              <p className="text-green-200 text-xs mt-2 md:mt-3">{newsletterStatus}</p>
            )}
            <p className="text-green-200 text-xs mt-2 md:mt-3">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>
      {/* Map Section - Fixed with click to open full map */}
      <div className="container mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 md:px-6 py-3 md:py-4">
            <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
              <span>🗺️</span> Find Us on Map
            </h2>
          </div>

          {/* Clickable Map Container */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=KrishiMitr+Lahore+Pakistan&query_place_id=ChIJ1wcg5oNES4gRYn7sxnvCOg"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative h-64 md:h-96 bg-gray-200 group cursor-pointer overflow-hidden"
          >
            {/* Static Map Preview Image */}
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Lahore,Pakistan&zoom=12&size=800x400&maptype=roadmap&markers=color:red%7Clabel:KM%7C31.5204,74.3587&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
              alt="KrishiMitr Office Location Map"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop';
              }}
            />

            {/* Overlay with icon and text */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/50">
              <div className="text-center px-4 bg-white/90 backdrop-blur rounded-xl py-3 px-6 transform transition-transform duration-300 group-hover:scale-110">
                <div className="text-4xl md:text-5xl mb-2">🗺️</div>
                <p className="text-gray-800 text-sm md:text-base font-semibold">Click to View Full Map →</p>
                <p className="text-gray-500 text-xs mt-1">Opens in Google Maps</p>
              </div>
            </div>

            {/* Location badge */}
            <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur rounded-lg px-3 py-1.5 text-xs font-medium text-gray-700 shadow-lg">
              📍 Lahore, Pakistan
            </div>
          </a>
        </div>
      </div>


      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInDown {
          animation: slideInDown 0.5s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;