import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Schemes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedScheme, setSelectedScheme] = useState(null);

  // Image imports for schemes
  const schemeImages = {
    "Kissan Package 2026": "package2026.webp",
    "Green Tractor Scheme": "aaa.png",
    "Solar Tube Well Scheme": "solar.png",
    "Interest-Free Loan Program": "loan.webp",
    "Crop Insurance Scheme": "insurance.jpg",
    "Cold Storage Subsidy": "cold.jpg",
    "Organic Farming Support": "women.jpg",

  };

  const schemesData = [
    {
      id: 1,
      title: "Kissan Package 2026",
      urduTitle: "کسان پیکیج2026   ",
      category: "Subsidy",
      icon: "",
      image: schemeImages["Kissan Package 2026"],
      description: "Comprehensive package for small farmers including subsidies on fertilizers, seeds, and pesticides.",
      fullDescription: "The Kissan Package 2026 is a landmark initiative by the Government of Pakistan to support small and medium farmers. It provides subsidies on agricultural inputs, easy loans, and technical assistance.",
      benefits: [
        "50% subsidy on DAP fertilizer",
        "Free certified seeds for wheat and rice",
        "Interest-free loans up to PKR 500,000",
        "Solar tube wells subsidy up to 60%",
        "Free soil testing services"
      ],
      eligibility: [
        "Small farmers with 1-5 acres of land",
        "Must have valid CNIC",
        "Registered with local agriculture department",
        "Land ownership proof required"
      ],
      deadline: "February 31, 2026",
      applyLink: "/register",
      status: "Active",
      color: "from-green-500 to-emerald-600",
      bgImage: "linear-gradient(135deg, #059669, #047857)"
    },
    {
      id: 2,
      title: "Green Tractor Scheme",
      urduTitle: "گرین ٹریکٹر اسکیم",
      category: "Equipment",
      icon: "",
      image: schemeImages["Green Tractor Scheme"],
      description: "Providing subsidized tractors to small farmers to modernize farming practices.",
      fullDescription: "The Green Tractor Scheme aims to mechanize agriculture by providing high-quality tractors at subsidized rates to small farmers across Pakistan.",
      benefits: [
        "50% subsidy on tractor price",
        "Easy installment plans",
        "Free maintenance for 2 years",
        "Training on tractor operation",
        "Priority to women farmers"
      ],
      eligibility: [
        "Farmers with 2-10 acres of land",
        "Valid CNIC and land record",
        "No previous tractor ownership",
        "Must complete training program"
      ],
      deadline: "March 31, 2026",
      applyLink: "/register",
      status: "Active",
      color: "from-blue-500 to-cyan-600",
      bgImage: "linear-gradient(135deg, #2563EB, #0891B2)"
    },
    {
      id: 3,
      title: "Solar Tube Well Scheme",
      urduTitle: "سولر ٹیوب ویل اسکیم",
      category: "Energy",
      icon: "",
      image: schemeImages["Solar Tube Well Scheme"],
      description: "Promoting solar energy for agriculture by providing subsidized solar tube wells.",
      fullDescription: "This scheme encourages farmers to switch to solar energy for irrigation, reducing electricity costs and promoting sustainable farming.",
      benefits: [
        "60% subsidy on solar systems",
        "Free installation and maintenance",
        "Net metering facility",
        "10-year warranty on panels",
        "Technical support for 5 years"
      ],
      eligibility: [
        "Farmers with valid land ownership",
        "Existing tube well users priority",
        "Must attend training session",
        "No outstanding electricity bills"
      ],
      deadline: "June 30, 2026",
      applyLink: "/register",
      status: "Upcoming",
      color: "from-yellow-500 to-orange-600",
      bgImage: "linear-gradient(135deg, #EAB308, #EA580C)"
    },
    {
      id: 4,
      title: "Interest-Free Loan Program",
      urduTitle: "بے سود قرضہ پروگرام",
      category: "Loan",
      icon: "",
      image: schemeImages["Interest-Free Loan Program"],
      description: "Providing interest-free loans to farmers for purchasing seeds, fertilizers, and equipment.",
      fullDescription: "The Interest-Free Loan Program supports farmers by providing loans without any interest to purchase agricultural inputs and equipment.",
      benefits: [
        "Loans up to PKR 300,000",
        "0% interest rate",
        "Flexible repayment (2-3 years)",
        "No collateral required for small loans",
        "Quick approval process"
      ],
      eligibility: [
        "Pakistani farmer with valid CNIC",
        "Land holding of 1-25 acres",
        "Previous loan history considered",
        "Must join farmer group"
      ],
      deadline: "Rolling basis",
      applyLink: "/register",
      status: "Active",
      color: "from-purple-500 to-pink-600",
      bgImage: "linear-gradient(135deg, #9333EA, #DB2777)"
    },
    {
      id: 5,
      title: "Crop Insurance Scheme",
      urduTitle: "فصل بیمہ اسکیم",
      category: "Insurance",
      icon: "",
      image: schemeImages["Crop Insurance Scheme"],
      description: "Protecting farmers against crop losses due to natural disasters and climate change.",
      fullDescription: "The Crop Insurance Scheme provides financial protection to farmers against losses from floods, droughts, pests, and other natural calamities.",
      benefits: [
        "Coverage up to 80% of crop value",
        "Premium subsidy by government",
        "Quick claim processing",
        "Covers all major crops",
        "Weather index-based insurance"
      ],
      eligibility: [
        "Registered farmers with land record",
        "Crops must be insured before planting",
        "Minimum 1 acre cultivation",
        "Valid CNIC required"
      ],
      deadline: "Before each cropping season",
      applyLink: "/register",
      status: "Active",
      color: "from-red-500 to-rose-600",
      bgImage: "linear-gradient(135deg, #EF4444, #E11D48)"
    },
    {
      id: 6,
      title: "Cold Storage Subsidy",
      urduTitle: "کولڈ سٹوریج سبسڈی",
      category: "Infrastructure",
      icon: "",
      image: schemeImages["Cold Storage Subsidy"],
      description: "Financial assistance for building cold storage facilities to reduce post-harvest losses.",
      fullDescription: "This scheme helps farmers and agri-businesses establish cold storage facilities to preserve fruits, vegetables, and other perishable produce.",
      benefits: [
        "40% subsidy on construction",
        "Technical assistance provided",
        "Priority for farmer cooperatives",
        "Women farmers special quota",
        "Energy efficiency support"
      ],
      eligibility: [
        "Farmer groups or cooperatives",
        "Individual farmers with 10+ acres",
        "Land ownership or lease proof",
        "Business plan required"
      ],
      deadline: "September 30, 2026",
      applyLink: "/register",
      status: "Active",
      color: "from-teal-500 to-cyan-600",
      bgImage: "linear-gradient(135deg, #14B8A6, #06B6D4)"
    },
    {
      id: 7,
      title: "Organic Farming Support",
      urduTitle: "نامیاتی کاشتکاری سپورٹ",
      category: "Training",
      icon: "",
      image: schemeImages["Organic Farming Support"],
      description: "Supporting farmers to transition to organic farming practices with training and certification.",
      fullDescription: "The Organic Farming Support Scheme promotes sustainable agriculture by helping farmers adopt organic practices and obtain certification.",
      benefits: [
        "Free organic farming training",
        "Subsidy on organic inputs",
        "Certification cost covered",
        "Market linkage support",
        "Premium price for organic produce"
      ],
      eligibility: [
        "Farmers willing to convert to organic",
        "Minimum 2 acres land",
        "No chemical use for 2 years",
        "Must attend training program"
      ],
      deadline: "December 31, 2026",
      applyLink: "/register",
      status: "Active",
      color: "from-green-500 to-emerald-600",
      bgImage: "linear-gradient(135deg, #22C55E, #059669)"
    },
  ];

  const categories = [
    { id: 'all', name: 'All Schemes', icon: '📋', link: '/schemes' },
    { id: 'Subsidy', name: 'Subsidies', icon: '💰', link: '/schemes?category=subsidy' },
    { id: 'Loan', name: 'Loans', icon: '🏦', link: '/schemes?category=loan' },
    { id: 'Equipment', name: 'Equipment', icon: '🚜', link: '/schemes?category=equipment' },
    { id: 'Insurance', name: 'Insurance', icon: '🛡️', link: '/schemes?category=insurance' },
    { id: 'Training', name: 'Training', icon: '📚', link: '/schemes?category=training' },
    { id: 'Energy', name: 'Energy', icon: '☀️', link: '/schemes?category=energy' },
    { id: 'Infrastructure', name: 'Infrastructure', icon: '🏗️', link: '/schemes?category=infrastructure' },
  ];

  const filteredSchemes = schemesData.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.urduTitle.includes(searchTerm) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || scheme.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const activeCount = schemesData.filter(s => s.status === 'Active').length;
  const upcomingCount = schemesData.filter(s => s.status === 'Upcoming').length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">

      {/* Hero Section with Image */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=800&fit=crop"
            alt="Government Agricultural Schemes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
            Government <span className="text-yellow-400">Schemes</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp delay-100">
            Empowering Pakistani farmers through government initiatives and financial support
          </p>

          {/* Stats Row */}
          <div className="flex justify-center gap-6 mt-8 animate-fadeInUp delay-200">
            <Link to="/schemes?status=active" className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/30 transition-all duration-300">
              <div className="text-2xl font-bold text-white">{activeCount}</div>
              <div className="text-sm text-yellow-200">Active Schemes</div>
            </Link>
            <Link to="/schemes?status=upcoming" className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/30 transition-all duration-300">
              <div className="text-2xl font-bold text-white">{upcomingCount}</div>
              <div className="text-sm text-yellow-200">Upcoming</div>
            </Link>
            <Link to="/schemes?benefited=true" className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 hover:bg-white/30 transition-all duration-300">
              <div className="text-2xl font-bold text-white">50K+</div>
              <div className="text-sm text-yellow-200">Farmers Benefited</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search schemes (Kissan Package, Tractor Scheme, etc.)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto lg:flex-wrap">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.link}
                  onClick={() => setFilterCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${filterCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSchemes.map((scheme, index) => (
              <div
                key={scheme.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedScheme(scheme)}
              >
                {/* Scheme Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={scheme.image}
                    alt={scheme.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold z-10 ${scheme.status === 'Active'
                      ? 'bg-green-500 text-white'
                      : 'bg-yellow-500 text-white'
                    }`}>
                    {scheme.status}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold z-10">
                    <span className="flex items-center gap-1">
                      {scheme.icon} {scheme.category}
                    </span>
                  </div>

                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4 text-5xl drop-shadow-lg z-10">
                    {scheme.icon}
                  </div>
                </div>

                {/* Scheme Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {scheme.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{scheme.urduTitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {scheme.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs">Deadline: {scheme.deadline}</span>
                    </div>


                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredSchemes.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No schemes found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </section>

      {/* Scheme Detail Modal */}
      {selectedScheme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedScheme(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Image */}
            <div className="relative h-80 overflow-hidden">
              <img
                src={selectedScheme.image}
                alt={selectedScheme.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <button
                onClick={() => setSelectedScheme(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition z-10"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="absolute bottom-6 left-6 z-10">
                <div className="text-6xl mb-2 drop-shadow-lg">{selectedScheme.icon}</div>
                <h2 className="text-3xl font-bold text-white">{selectedScheme.title}</h2>
                <p className="text-blue-200 text-lg">{selectedScheme.urduTitle}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Status and Deadline */}
              <div className="flex gap-4 mb-6">
                <div className={`px-4 py-2 rounded-lg font-semibold ${selectedScheme.status === 'Active'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                  }`}>
                  {selectedScheme.status}
                </div>
                <div className="px-4 py-2 bg-gray-100 rounded-lg">
                  <span className="text-gray-600">Deadline: </span>
                  <span className="font-semibold">{selectedScheme.deadline}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Benefits */}
                <div className="bg-green-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span></span> Benefits
                  </h3>
                  <ul className="space-y-2">
                    {selectedScheme.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div className="bg-blue-50 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span>📋</span> Eligibility Criteria
                  </h3>
                  <ul className="space-y-2">
                    {selectedScheme.eligibility.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-blue-600 mt-0.5">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📝 About this Scheme</h3>
                <p className="text-gray-600 leading-relaxed">{selectedScheme.fullDescription}</p>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex gap-4">
                <Link
                  to={selectedScheme.applyLink}
                  className="flex-1 text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                </Link>
                <button
                  onClick={() => setSelectedScheme(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>

              {/* Help Text */}
              <p className="text-center text-xs text-gray-400 mt-4">
                For assistance, call <a href="tel:080012345" className="text-blue-600">0800-12345</a> or visit your nearest agriculture department
              </p>
            </div>
          </div>
        </div>
      )}

      {/* How to Apply Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to <span className="text-blue-600">Apply</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple process to get benefits from government schemes
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/eligibility-check" className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition transform group-hover:scale-110">
                <span className="text-3xl">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Check Eligibility</h3>
              <p className="text-sm text-gray-600">Review scheme requirements</p>
            </Link>
            <Link to="/register" className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition transform group-hover:scale-110">
                <span className="text-3xl">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Register Online</h3>
              <p className="text-sm text-gray-600">Fill the application form</p>
            </Link>
            <Link to="/documents" className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition transform group-hover:scale-110">
                <span className="text-3xl">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Submit Documents</h3>
              <p className="text-sm text-gray-600">Upload required documents</p>
            </Link>
            <Link to="/status-check" className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition transform group-hover:scale-110">
                <span className="text-3xl">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Get Approval</h3>
              <p className="text-sm text-gray-600">Receive benefits after verification</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about government schemes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/faq#who-can-apply" className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">Who can apply for these schemes?</h3>
              <p className="text-gray-600 text-sm">Pakistani farmers with valid CNIC and land ownership proof can apply for most schemes.</p>
            </Link>
            <Link to="/faq#fees" className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">Is there any fee to apply?</h3>
              <p className="text-gray-600 text-sm">Most schemes have no application fee. Some may have nominal processing charges.</p>
            </Link>
            <Link to="/faq#approval-time" className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">How long does approval take?</h3>
              <p className="text-gray-600 text-sm">Approval typically takes 15-30 days after document verification.</p>
            </Link>
            <Link to="/faq#women-farmers" className="bg-gray-50 rounded-xl p-5 hover:shadow-md transition">
              <h3 className="font-bold text-gray-900 mb-2">Can women farmers apply?</h3>
              <p className="text-gray-600 text-sm">Yes, there are special quotas and schemes specifically for women farmers.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&h=400&fit=crop"
            alt="Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

         <div className="container mx-auto px-4 text-center relative z-10"> 
           <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-blue-9 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
          >
            Contact Our Experts
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-5px); }
          75% { transform: translateY(-20px) translateX(15px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-1000 { animation-delay: 1s; }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Schemes;