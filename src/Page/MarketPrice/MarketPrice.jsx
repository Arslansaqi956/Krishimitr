import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';

const MarketPrices = () => {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [viewMode, setViewMode] = useState('grid');
  const [loading, setLoading] = useState(true);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  // Complete Market Data for Pakistan
  const marketData = [
    // Punjab - Wheat
    { id: 1, crop: "Wheat", cropUrdu: "گندم", price: 3500, unit: "40kg", change: "+2.5%", trend: "up", city: "Lahore", district: "Punjab", mandi: "Lahore Grain Market", demand: "High", quality: "Premium" },
    { id: 2, crop: "Wheat", cropUrdu: "گندم", price: 3400, unit: "40kg", change: "+1.8%", trend: "up", city: "Faisalabad", district: "Punjab", mandi: "Faisalabad Grain Market", demand: "High", quality: "Good" },
    { id: 3, crop: "Wheat", cropUrdu: "گندم", price: 3350, unit: "40kg", change: "+1.2%", trend: "up", city: "Multan", district: "Punjab", mandi: "Multan Grain Market", demand: "Medium", quality: "Standard" },
    { id: 4, crop: "Wheat", cropUrdu: "گندم", price: 3550, unit: "40kg", change: "+0.9%", trend: "up", city: "Rawalpindi", district: "Punjab", mandi: "Rawalpindi Grain Market", demand: "High", quality: "Premium" },

    // Rice
    { id: 5, crop: "Basmati Rice", cropUrdu: "باسمتی چاول", price: 12500, unit: "100kg", change: "-1.2%", trend: "down", city: "Lahore", district: "Punjab", mandi: "Rice Export Market", demand: "Very High", quality: "Premium" },
    { id: 6, crop: "Basmati Rice", cropUrdu: "باسمتی چاول", price: 12300, unit: "100kg", change: "-0.8%", trend: "down", city: "Sheikhupura", district: "Punjab", mandi: "Rice Mandi", demand: "High", quality: "Good" },
    { id: 7, crop: "Irri Rice", cropUrdu: "اری چاول", price: 8500, unit: "100kg", change: "+0.5%", trend: "up", city: "Lahore", district: "Punjab", mandi: "Rice Market", demand: "Medium", quality: "Standard" },
    { id: 8, crop: "Irri Rice", cropUrdu: "اری چاول", price: 8400, unit: "100kg", change: "+0.3%", trend: "up", city: "Gujranwala", district: "Punjab", mandi: "Gujranwala Rice Mandi", demand: "Medium", quality: "Standard" },

    // Cotton
    { id: 9, crop: "Cotton", cropUrdu: "کپاس", price: 18500, unit: "40kg", change: "+3.2%", trend: "up", city: "Multan", district: "Punjab", mandi: "Cotton Market", demand: "Very High", quality: "Premium" },
    { id: 10, crop: "Cotton", cropUrdu: "کپاس", price: 18350, unit: "40kg", change: "+2.8%", trend: "up", city: "Faisalabad", district: "Punjab", mandi: "Cotton Mandi", demand: "Very High", quality: "Good" },
    { id: 11, crop: "Cotton", cropUrdu: "کپاس", price: 18200, unit: "40kg", change: "+2.1%", trend: "up", city: "Rahim Yar Khan", district: "Punjab", mandi: "RYK Cotton Market", demand: "High", quality: "Good" },

    // Sugarcane
    { id: 12, crop: "Sugarcane", cropUrdu: "گنا", price: 425, unit: "40kg", change: "0%", trend: "neutral", city: "Lahore", district: "Punjab", mandi: "Sugar Mills", demand: "High", quality: "Good" },
    { id: 13, crop: "Sugarcane", cropUrdu: "گنا", price: 420, unit: "40kg", change: "-0.5%", trend: "down", city: "Faisalabad", district: "Punjab", mandi: "Sugar Mills", demand: "Medium", quality: "Standard" },

    // Maize
    { id: 14, crop: "Maize", cropUrdu: "مکئی", price: 4200, unit: "40kg", change: "+1.5%", trend: "up", city: "Lahore", district: "Punjab", mandi: "Grain Market", demand: "High", quality: "Good" },
    { id: 15, crop: "Maize", cropUrdu: "مکئی", price: 4150, unit: "40kg", change: "+1.2%", trend: "up", city: "Multan", district: "Punjab", mandi: "Grain Market", demand: "Medium", quality: "Standard" },

    // Mango
    { id: 16, crop: "Mango", cropUrdu: "آم", price: 3200, unit: "dozen", change: "-2.5%", trend: "down", city: "Multan", district: "Punjab", mandi: "Fruit Market", demand: "Very High", quality: "Premium" },
    { id: 17, crop: "Mango", cropUrdu: "آم", price: 3500, unit: "dozen", change: "-1.8%", trend: "down", city: "Lahore", district: "Punjab", mandi: "Fruit Mandi", demand: "High", quality: "Premium" },

    // Vegetables
    { id: 18, crop: "Onion", cropUrdu: "پیاز", price: 2800, unit: "50kg", change: "+5.2%", trend: "up", city: "Lahore", district: "Punjab", mandi: "Vegetable Market", demand: "Very High", quality: "Good" },
    { id: 19, crop: "Onion", cropUrdu: "پیاز", price: 2750, unit: "50kg", change: "+4.8%", trend: "up", city: "Sukkur", district: "Sindh", mandi: "Vegetable Mandi", demand: "High", quality: "Good" },
    { id: 20, crop: "Tomato", cropUrdu: "ٹماٹر", price: 1800, unit: "25kg", change: "-3.5%", trend: "down", city: "Lahore", district: "Punjab", mandi: "Vegetable Market", demand: "High", quality: "Good" },
    { id: 21, crop: "Tomato", cropUrdu: "ٹماٹر", price: 1750, unit: "25kg", change: "-4.2%", trend: "down", city: "Peshawar", district: "KPK", mandi: "Vegetable Market", demand: "Medium", quality: "Standard" },
    { id: 22, crop: "Potato", cropUrdu: "آلو", price: 2000, unit: "50kg", change: "+1.2%", trend: "up", city: "Lahore", district: "Punjab", mandi: "Vegetable Market", demand: "High", quality: "Good" },
    { id: 23, crop: "Potato", cropUrdu: "آلو", price: 2200, unit: "50kg", change: "+0.8%", trend: "up", city: "Okara", district: "Punjab", mandi: "Potato Market", demand: "Very High", quality: "Premium" },

    // Sindh Crops
    { id: 24, crop: "Rice", cropUrdu: "چاول", price: 11800, unit: "100kg", change: "+1.2%", trend: "up", city: "Hyderabad", district: "Sindh", mandi: "Rice Market", demand: "High", quality: "Good" },
    { id: 25, crop: "Cotton", cropUrdu: "کپاس", price: 18100, unit: "40kg", change: "+2.5%", trend: "up", city: "Sukkur", district: "Sindh", mandi: "Cotton Market", demand: "High", quality: "Good" },

    // KPK Crops
    { id: 26, crop: "Maize", cropUrdu: "مکئی", price: 4100, unit: "40kg", change: "+1.8%", trend: "up", city: "Peshawar", district: "KPK", mandi: "Grain Market", demand: "High", quality: "Good" },
    { id: 27, crop: "Wheat", cropUrdu: "گندم", price: 3650, unit: "40kg", change: "+1.0%", trend: "up", city: "Peshawar", district: "KPK", mandi: "Grain Market", demand: "High", quality: "Good" },
  ];

  const cities = [
    { name: "Lahore", icon: "🏛️", mandis: 8, district: "Punjab" },
    { name: "Faisalabad", icon: "🏭", mandis: 6, district: "Punjab" },
    { name: "Multan", icon: "🥭", mandis: 7, district: "Punjab" },
    { name: "Rawalpindi", icon: "🏔️", mandis: 5, district: "Punjab" },
    { name: "Peshawar", icon: "⛰️", mandis: 5, district: "KPK" },
    { name: "Hyderabad", icon: "🌊", mandis: 4, district: "Sindh" },
    { name: "Sukkur", icon: "🏞️", mandis: 3, district: "Sindh" },
    { name: "Quetta", icon: "🏜️", mandis: 3, district: "Balochistan" }
  ];

  const districts = ["All", "Punjab", "Sindh", "KPK", "Balochistan"];

  const crops = [
    { name: "all", label: "All Crops", icon: "🌾", color: "bg-green-100" },
    { name: "Wheat", label: "Wheat", urdu: "گندم", icon: "🌾", color: "bg-amber-100" },
    { name: "Basmati Rice", label: "Basmati Rice", urdu: "باسمتی چاول", icon: "🍚", color: "bg-blue-100" },
    { name: "Irri Rice", label: "Irri Rice", urdu: "اری چاول", icon: "🍚", color: "bg-blue-100" },
    { name: "Cotton", label: "Cotton", urdu: "کپاس", icon: "🌿", color: "bg-sky-100" },
    { name: "Sugarcane", label: "Sugarcane", urdu: "گنا", icon: "🎋", color: "bg-emerald-100" },
    { name: "Maize", label: "Maize", urdu: "مکئی", icon: "🌽", color: "bg-yellow-100" },
    { name: "Mango", label: "Mango", urdu: "آم", icon: "🥭", color: "bg-orange-100" },
    { name: "Onion", label: "Onion", urdu: "پیاز", icon: "🧅", color: "bg-purple-100" },
    { name: "Tomato", label: "Tomato", urdu: "ٹماٹر", icon: "🍅", color: "bg-red-100" },
    { name: "Potato", label: "Potato", urdu: "آلو", icon: "🥔", color: "bg-stone-100" }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Auto refresh every 2 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdate(new Date());
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  const filteredData = useMemo(() => {
    return marketData.filter(item => {
      const matchesCity = selectedCity === 'all' || item.city === selectedCity;
      const matchesDistrict = selectedDistrict === '' || selectedDistrict === 'All' || item.district === selectedDistrict;
      const matchesCrop = selectedCrop === 'all' || item.crop === selectedCrop;
      const matchesSearch = searchTerm === '' ||
        item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cropUrdu.includes(searchTerm) ||
        item.mandi.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.city.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCity && matchesDistrict && matchesCrop && matchesSearch;
    });
  }, [selectedCity, selectedDistrict, selectedCrop, searchTerm]);

  const getTrendIcon = (trend) => {
    if (trend === 'up') return '📈';
    if (trend === 'down') return '📉';
    return '➡️';
  };

  const getTrendColor = (trend) => {
    if (trend === 'up') return 'text-green-600 bg-green-50 border-green-200';
    if (trend === 'down') return 'text-red-600 bg-red-50 border-red-200';
    return 'text-yellow-600 bg-yellow-50 border-yellow-200';
  };

  const getDemandBadge = (demand) => {
    const config = {
      'Very High': { color: 'bg-red-500', text: '🔥 Very High' },
      'High': { color: 'bg-orange-500', text: '📈 High' },
      'Medium': { color: 'bg-yellow-500', text: '📊 Medium' },
      'Low': { color: 'bg-blue-500', text: '📉 Low' }
    };
    return config[demand] || config['Medium'];
  };

  const getCropIcon = (crop) => {
    const icons = {
      'Wheat': '🌾',
      'Basmati Rice': '🍚',
      'Irri Rice': '🍚',
      'Cotton': '🌿',
      'Sugarcane': '🎋',
      'Maize': '🌽',
      'Mango': '🥭',
      'Onion': '🧅',
      'Tomato': '🍅',
      'Potato': '🥔',
      'Rice': '🍚'
    };
    return icons[crop] || '🌱';
  };

  // Function to get image URL for a crop
  const getCropImage = (crop) => {
    const imageMap = {
      'Wheat': 'wheat.jpg',
      'Basmati Rice': 'download.jpg',
      'Irri Rice': 'irri rice.webp',
      'Cotton': 'cotton.jpg',
      'Sugarcane': 'sugarcane.jpg',
      'Maize': 'maize.jpg',
      'Mango': 'mango.jpg',
      'Onion': 'onion.avif',
      'Tomato': 'tomato.avif',
      'Potato': 'potato.jpg',
      'Rice': 'Rice3.avif'
    };
    return imageMap[crop] || 'https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&auto=format';
  };

  const statistics = useMemo(() => {
    const avgPrice = filteredData.length > 0 ? filteredData.reduce((acc, item) => acc + item.price, 0) / filteredData.length : 0;
    const topGainer = [...filteredData].sort((a, b) => parseFloat(b.change) - parseFloat(a.change))[0];
    const topLoser = [...filteredData].sort((a, b) => parseFloat(a.change) - parseFloat(b.change))[0];
    return { avgPrice, topGainer, topLoser };
  }, [filteredData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-800 font-medium">Loading market prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Hero Section - No Images */}
      <section className="relative bg-gradient-to-r from-green-800 to-emerald-800 text-white overflow-hidden">
        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-1 mb-6">
              <span className="text-sm font-semibold">🇵🇰 Pakistan Mandi Rates 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Live Market
              <span className="text-yellow-400 block">Price Updates</span>
            </h1>

            <p className="text-lg text-green-100 max-w-2xl mx-auto mb-8">
              Real-time mandi rates from 50+ markets across Punjab, Sindh, KPK & Balochistan
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('market-tips')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 justify-center"
              >
                <span>💡</span>
                <span>Expert Tips</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L1440 120L1440 0C1440 0 1320 40 1200 40C1080 40 960 0 840 0C720 0 600 40 480 40C360 40 240 0 120 0C60 0 30 10 0 20L0 120Z" fill="#f0fdf4" />
          </svg>
        </div>
      </section>

      {/* Stats Cards */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Average Price</p>
                <p className="text-3xl font-bold text-green-700">₨ {Math.round(statistics.avgPrice).toLocaleString()}</p>
                <p className="text-xs text-gray-400 mt-1">per selected items</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">💰</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Top Gainer</p>
                <p className="text-2xl font-bold text-green-700">{statistics.topGainer?.crop || 'N/A'}</p>
                <p className="text-green-600 text-sm">{statistics.topGainer?.change || '0%'}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">📈</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Markets</p>
                <p className="text-3xl font-bold text-green-700">{filteredData.length}</p>
                <p className="text-xs text-gray-400 mt-1">prices available</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🏪</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">🔍</div>
            <h2 className="text-xl font-bold text-gray-800">Filter Market Prices</h2>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">📊</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* District Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">📍 Province</label>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                {districts.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            {/* City Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">🏙️ City</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="all">All Cities</option>
                {cities.map(city => (
                  <option key={city.name} value={city.name}>
                    {city.icon} {city.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Crop Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">🌾 Crop</label>
              <select
                value={selectedCrop}
                onChange={(e) => setSelectedCrop(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                {crops.map(crop => (
                  <option key={crop.name} value={crop.name}>
                    {crop.icon} {crop.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">🔍 Search</label>
              <input
                type="text"
                placeholder="Search crop, mandi, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap justify-between items-center mt-4 pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {selectedDistrict && selectedDistrict !== 'All' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  📍 {selectedDistrict}
                  <button onClick={() => setSelectedDistrict('')} className="ml-1 hover:text-green-900">×</button>
                </span>
              )}
              {selectedCity !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  🏙️ {selectedCity}
                  <button onClick={() => setSelectedCity('all')} className="ml-1 hover:text-green-900">×</button>
                </span>
              )}
              {selectedCrop !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  🌾 {selectedCrop}
                  <button onClick={() => setSelectedCrop('all')} className="ml-1 hover:text-green-900">×</button>
                </span>
              )}
              {searchTerm && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  🔍 {searchTerm}
                  <button onClick={() => setSearchTerm('')} className="ml-1 hover:text-green-900">×</button>
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition ${viewMode === 'list' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Last Update & Results Count */}
      <div className="container mx-auto px-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Last updated: {lastUpdate.toLocaleTimeString()}</span>
          </div>
          <div className="text-sm font-medium text-green-700">
            📊 {filteredData.length} prices found
          </div>
        </div>
      </div>

      {/* Results Grid/List - With Images in Grid View */}
      <div className="container mx-auto px-4 pb-20">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">📋</div>
          <h2 className="text-lg font-semibold text-gray-700">Current Market Rates</h2>
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">💰</div>
        </div>

        {filteredData.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
              >
                {/* Image header - real crop image */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={getCropImage(item.crop)}
                    alt={item.crop}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-white font-bold text-lg drop-shadow-md">{item.crop}</h3>
                        <p className="text-green-200 text-xs drop-shadow">{item.cropUrdu}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-lg text-xs font-bold text-white ${getDemandBadge(item.demand).color} shadow-md`}>
                        {getDemandBadge(item.demand).text}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">₨ {item.price.toLocaleString()}</span>
                      <span className="text-xs text-gray-400 ml-1">/{item.unit}</span>
                    </div>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium border ${getTrendColor(item.trend)}`}>
                      <span>{getTrendIcon(item.trend)}</span>
                      <span>{item.change}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm mb-3">
                    <div className="flex items-center gap-1 text-gray-600">
                      <span>📍</span>
                      <span>{item.city}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <span>🏪</span>
                      <span className="truncate max-w-[120px]">{item.mandi}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-xs text-gray-400">Quality: {item.quality}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-green-700 to-emerald-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Crop</th>
                    <th className="px-6 py-4 text-left">Mandi</th>
                    <th className="px-6 py-4 text-left">City</th>
                    <th className="px-6 py-4 text-right">Price</th>
                    <th className="px-6 py-4 text-center">Change</th>
                    <th className="px-6 py-4 text-center">Demand</th>
                    <th className="px-6 py-4 text-center">Quality</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredData.map((item) => (
                    <tr key={item.id} className="hover:bg-green-50 transition-all duration-300">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                            {getCropIcon(item.crop)}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{item.crop}</div>
                            <div className="text-xs text-gray-400">{item.cropUrdu}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700">{item.mandi}</td>
                      <td className="px-6 py-4 text-gray-700">{item.city}</td>
                      <td className="px-6 py-4 text-right font-bold text-gray-900">
                        ₨ {item.price.toLocaleString()}
                        <span className="text-xs text-gray-400 ml-1">/{item.unit}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTrendColor(item.trend)}`}>
                          <span>{getTrendIcon(item.trend)}</span>
                          <span>{item.change}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`px-2 py-1 rounded-lg text-xs font-bold text-white ${getDemandBadge(item.demand).color}`}>
                          {item.demand}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                          {item.quality}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Market Tips Section */}
      <section id="market-tips" className="py-16 bg-gradient-to-r from-green-800 to-emerald-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="flex justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <span className="text-4xl">💰</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <span className="text-4xl">📊</span>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur">
                <span className="text-4xl">🌾</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Expert Market Tips</h2>
            <p className="text-green-200">Maximize your profit with these insights</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">📈</div>
              <h3 className="font-bold text-lg mb-2">Best Time to Sell</h3>
              <p className="text-green-200 text-sm">Wheat prices peak in April-May. Store properly for better rates.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-lg mb-2">Transportation Tips</h3>
              <p className="text-green-200 text-sm">Sell to nearest mandi to save transport costs up to 15%.</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Price Alerts</h3>
              <p className="text-green-200 text-sm">Subscribe to get SMS alerts when prices reach your target.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
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

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default MarketPrices;