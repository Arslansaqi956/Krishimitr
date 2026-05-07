import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Crops = () => {
  const [selectedCrop, setSelectedCrop] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeason, setFilterSeason] = useState('all');

  // Image imports for crops
  const cropImages = {
    Wheat: "wheat.jpg",
    Rice: "download.jpg",
    Cotton: "cotton.jpg",
    Sugarcane: "Sugar.png",
    Maize: "maize.jpg",
    Mango: "mango.jpg"
  };

  const cropsData = [
    {
      id: 1,
      name: "Wheat",
      urduName: "گندم",
      icon: "",
      image: cropImages.Wheat,
      season: "Rabi",
      seasonIcon: "",
      plantingTime: "October - December",
      harvestingTime: "April - May",
      duration: "120-150 days",
      temperature: "15°C - 25°C",
      rainfall: "75-100 cm",
      soil: "Loamy soil, clay loam",
      majorRegions: "Punjab, Sindh, KPK",
      bgColor: "linear-gradient(135deg, #F59E0B, #D97706)",
      description: "Wheat is the staple food crop of Pakistan, grown primarily in Punjab and Sindh provinces. It's a Rabi season crop sown in winter and harvested in spring.",
      tips: [
        "Use certified seeds for better yield",
        "Apply fertilizer at recommended times",
        "Control weeds through proper cultivation",
        "Irrigate at critical growth stages"
      ],
      varieties: ["Galaxy-2013", "Faisalabad-2008", "Millat-2011", "Punjab-2011"],
      yield: "40-50 maunds per acre"
    },
    {
      id: 2,
      name: "Rice",
      urduName: "چاول",
      icon: "",
      image: cropImages.Rice,
      season: "Kharif",
      seasonIcon: "",
      plantingTime: "May - July",
      harvestingTime: "October - November",
      duration: "120-150 days",
      temperature: "20°C - 35°C",
      rainfall: "100-200 cm",
      soil: "Clay loam, alluvial soil",
      majorRegions: "Punjab (Basmati), Sindh",
      bgColor: "linear-gradient(135deg, #06B6D4, #0891B2)",
      description: "Pakistan is famous for its aromatic Basmati rice. Rice is a Kharif crop that requires plenty of water and warm temperatures.",
      tips: [
        "Use high-quality Basmati seeds",
        "Maintain proper water level in fields",
        "Apply nitrogen fertilizer in splits",
        "Harvest at proper maturity"
      ],
      varieties: ["Super Basmati", "Basmati-515", "KS-282", "IRRI-9"],
      yield: "30-40 maunds per acre"
    },
    {
      id: 3,
      name: "Cotton",
      urduName: "کپاس",
      icon: "",
      image: cropImages.Cotton,
      season: "Kharif",
      seasonIcon: "",
      plantingTime: "April - June",
      harvestingTime: "August - December",
      duration: "150-180 days",
      temperature: "24°C - 35°C",
      rainfall: "50-100 cm",
      soil: "Well-drained loamy soil",
      majorRegions: "Punjab, Sindh, KPK",
      bgColor: "linear-gradient(135deg, #22C55E, #16A34A)",
      description: "Cotton is Pakistan's most important cash crop, earning valuable foreign exchange through textile exports.",
      tips: [
        "Use Bt cotton seeds for pest resistance",
        "Maintain proper plant spacing",
        "Apply balanced fertilizers",
        "Control bollworms and whiteflies"
      ],
      varieties: ["FH-142", "MNH-886", "CIM-602", "BH-184"],
      yield: "20-30 maunds per acre"
    },
    {
      id: 4,
      name: "Sugarcane",
      urduName: "گنا",
      icon: "",
      image: cropImages.Sugarcane,
      season: "Throughout",
      seasonIcon: "",
      plantingTime: "February - March / September - October",
      harvestingTime: "November - March",
      duration: "10-12 months",
      temperature: "20°C - 35°C",
      rainfall: "100-150 cm",
      soil: "Deep loamy soil",
      majorRegions: "Punjab, Sindh, KPK",
      bgColor: "linear-gradient(135deg, #8B5CF6, #7C3AED)",
      description: "Sugarcane is a major cash crop used for sugar production. It's planted twice a year in different regions.",
      tips: [
        "Use healthy seed canes",
        "Apply sufficient organic matter",
        "Provide proper irrigation",
        "Harvest at optimum maturity"
      ],
      varieties: ["CP-77-400", "CPF-237", "HSF-240", "SPF-234"],
      yield: "600-800 maunds per acre"
    },
    {
      id: 5,
      name: "Maize",
      urduName: "مکئی",
      icon: "",
      image: cropImages.Maize,
      season: "Kharif",
      seasonIcon: "",
      plantingTime: "June - July",
      harvestingTime: "October - November",
      duration: "100-120 days",
      temperature: "21°C - 27°C",
      rainfall: "50-100 cm",
      soil: "Well-drained loamy soil",
      majorRegions: "KPK, Punjab",
      bgColor: "linear-gradient(135deg, #EAB308, #CA8A04)",
      description: "Maize is an important cereal crop used for food, feed, and industrial purposes.",
      tips: [
        "Plant at proper spacing",
        "Apply nitrogen at different stages",
        "Control weeds early",
        "Harvest when grains are mature"
      ],
      varieties: ["Islamabad-1", "Pahari", "Azam", "Jalal"],
      yield: "40-50 maunds per acre"
    },
    {
      id: 6,
      name: "Mango",
      urduName: "آم",
      icon: "",
      image: cropImages.Mango,
      season: "Summer",
      seasonIcon: "",
      plantingTime: "February - March",
      harvestingTime: "May - August",
      duration: "3-5 years (first harvest)",
      temperature: "24°C - 35°C",
      rainfall: "50-100 cm",
      soil: "Deep well-drained soil",
      majorRegions: "Punjab (Multan), Sindh",
      bgColor: "linear-gradient(135deg, #F97316, #EA580C)",
      description: "Pakistan's mangoes are known as 'King of Fruits' and are exported worldwide for their sweet taste.",
      tips: [
        "Plant grafted varieties",
        "Apply fertilizer before flowering",
        "Control mango hoppers",
        "Harvest at proper maturity"
      ],
      varieties: ["Sindhri", "Chaunsa", "Anwar Ratol", "Langra", "Dasehri"],
      yield: "100-200 maunds per acre"
    }
  ];

  const filteredCrops = cropsData.filter(crop => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.urduName.includes(searchTerm);
    const matchesSeason = filterSeason === 'all' || crop.season === filterSeason;
    return matchesSearch && matchesSeason;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">

      {/* Hero Section with Image */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1920&h=800&fit=crop"
            alt="Pakistan Agriculture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeInUp">
            Pakistan's <span className="text-green-400">Major Crops</span>
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto animate-fadeInUp delay-100">
            Discover detailed information about Pakistan's agricultural heritage
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-6 bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search crops (Wheat, Rice, Cotton, etc.)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setFilterSeason('all')}
                className={`px-5 py-2 rounded-lg font-semibold transition ${filterSeason === 'all'
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                🌾 All Crops
              </button>
              <button
                onClick={() => setFilterSeason('Rabi')}
                className={`px-5 py-2 rounded-lg font-semibold transition ${filterSeason === 'Rabi'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                ❄️ Rabi
              </button>
              <button
                onClick={() => setFilterSeason('Kharif')}
                className={`px-5 py-2 rounded-lg font-semibold transition ${filterSeason === 'Kharif'
                    ? 'bg-orange-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                ☀️ Kharif
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrops.map((crop) => (
              <div
                key={crop.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedCrop(crop)}
              >
                {/* Crop Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Season Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold">
                    <span className={crop.season === 'Rabi' ? 'text-blue-600' : crop.season === 'Kharif' ? 'text-orange-600' : 'text-green-600'}>
                      {crop.seasonIcon} {crop.season}
                    </span>
                  </div>

                  {/* Crop Icon Overlay */}
                  <div className="absolute bottom-3 left-3 text-4xl drop-shadow-lg">
                    {crop.icon}
                  </div>
                </div>

                {/* Crop Info */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {crop.name}
                      </h3>
                      <p className="text-sm text-gray-500">{crop.urduName}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">Planting</p>
                      <p className="text-xs font-semibold text-gray-700">{crop.plantingTime}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {crop.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                      📍 {crop.majorRegions.split(',')[0]}
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      ⏱️ {crop.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCrops.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">No crops found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          )}
        </div>
      </section>

      {/* Crop Detail Modal */}
      {selectedCrop && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedCrop(null)}>
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header with Image */}
            <div className="relative h-64 overflow-hidden">
              <img
                src={selectedCrop.image}
                alt={selectedCrop.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <button
                onClick={() => setSelectedCrop(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4">
                <div className="text-5xl mb-1 drop-shadow-lg">{selectedCrop.icon}</div>
                <h2 className="text-3xl font-bold text-white">{selectedCrop.name}</h2>
                <p className="text-green-200 text-lg">{selectedCrop.urduName}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">📋 Crop Information</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Season</span>
                      <span className="font-semibold">{selectedCrop.season} {selectedCrop.seasonIcon}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Planting Time</span>
                      <span className="font-semibold">{selectedCrop.plantingTime}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Harvesting Time</span>
                      <span className="font-semibold">{selectedCrop.harvestingTime}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Duration</span>
                      <span className="font-semibold">{selectedCrop.duration}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Temperature</span>
                      <span className="font-semibold">{selectedCrop.temperature}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Rainfall</span>
                      <span className="font-semibold">{selectedCrop.rainfall}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">🌍 Growing Conditions</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Soil Type</span>
                      <span className="font-semibold text-right">{selectedCrop.soil}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Major Regions</span>
                      <span className="font-semibold text-right">{selectedCrop.majorRegions}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="text-gray-600">Expected Yield</span>
                      <span className="font-semibold text-green-600">{selectedCrop.yield}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mt-5 mb-3">🌱 Popular Varieties</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCrop.varieties.map((variety, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                        {variety}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📝 About {selectedCrop.name}</h3>
                <p className="text-gray-600 leading-relaxed">{selectedCrop.description}</p>
              </div>

              <div className="mt-5 bg-green-50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">💡 Farming Tips</h3>
                <ul className="space-y-1">
                  {selectedCrop.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-600">✓</span>
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 flex gap-3">
                <Link
                  to="/expert-consultation"
                  className="flex-1 text-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Get Expert Consultation
                </Link>
                <button
                  onClick={() => setSelectedCrop(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg font-semibold hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Stats Section */}
      <section className="py-10 bg-gradient-to-r from-green-700 to-emerald-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Link to="/crops/varieties" className="group">
              <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">🌾</div>
              <div className="text-2xl font-bold text-white">60+</div>
              <div className="text-green-200 text-sm">Crop Varieties</div>
            </Link>
            <Link to="/districts" className="group">
              <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">📍</div>
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-green-200 text-sm">Districts</div>
            </Link>
            <Link to="/farmers" className="group">
              <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">👨‍🌾</div>
              <div className="text-2xl font-bold text-white">25K+</div>
              <div className="text-green-200 text-sm">Farmers</div>
            </Link>
            <Link to="/guides" className="group">
              <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">📚</div>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-green-200 text-sm">Guides</div>
            </Link>
          </div>
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
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
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
        
        .animate-pulse {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
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

export default Crops;