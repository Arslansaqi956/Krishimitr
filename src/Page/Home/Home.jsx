import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom';

// Punjab Crop Guide Detail Component
const PunjabCropGuideDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-amber-600 to-orange-600 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Punjab Crop Guide</h1>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Complete Guide for Punjab Farmers</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-amber-800 mb-4">Major Crops of Punjab</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Wheat (گندم) - Rabi season (Nov-Apr)</li>
                  <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Rice (چاول) - Kharif season (May-Nov)</li>
                  <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Sugarcane (گنا) - Throughout year</li>
                  <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Cotton (کپاس) - Kharif season (Apr-Aug)</li>
                  <li className="flex items-center gap-2"><span className="text-amber-600">•</span> Maize (مکئی) - Kharif season (Jun-Sep)</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Best Farming Practices</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2"><span className="text-green-600">•</span> Land preparation before sowing</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">•</span> Use of certified seeds</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">•</span> Proper irrigation scheduling</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">•</span> Integrated pest management</li>
                  <li className="flex items-center gap-2"><span className="text-green-600">•</span> Timely harvesting</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-800 mb-4">Seasonal Calendar for Punjab</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-amber-600">Winter (Rabi)</p>
                  <p className="text-sm text-gray-600">Wheat, Barley, Gram</p>
                  <p className="text-xs text-gray-500">Oct-Mar</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-green-600">Summer (Kharif)</p>
                  <p className="text-sm text-gray-600">Rice, Cotton, Maize</p>
                  <p className="text-xs text-gray-500">Apr-Sep</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-purple-600">Zaid (Spring)</p>
                  <p className="text-sm text-gray-600">Vegetables, Melons</p>
                  <p className="text-xs text-gray-500">Mar-Jun</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-red-600">Perennial</p>
                  <p className="text-sm text-gray-600">Sugarcane, Fruits</p>
                  <p className="text-xs text-gray-500">Year Round</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Need Expert Advice?</h3>
              <p className="mb-4">Contact Agriculture Department Punjab or visit your nearest extension office</p>
              <button className="bg-white text-amber-700 px-6 py-2 rounded-full font-semibold hover:shadow-lg transition">Call Helpline: 0800-12345</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mandi Rates Detail Component
const MandiRatesDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-green-700 to-emerald-700 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Mandi Rates</h1>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Live Market Prices Across Pakistan</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-green-700 to-emerald-700 text-white">
                    <th className="px-4 py-3 text-left">Crop</th>
                    <th className="px-4 py-3 text-left">City</th>
                    <th className="px-4 py-3 text-right">Price (40kg)</th>
                    <th className="px-4 py-3 text-center">Change</th>
                    <th className="px-4 py-3 text-center">Demand</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-3 font-semibold">Wheat (گندم)</td>
                    <td className="px-4 py-3">Lahore</td>
                    <td className="px-4 py-3 text-right text-green-700 font-bold">₨ 3,850</td>
                    <td className="px-4 py-3 text-center text-green-600">+2.5% ↑</td>
                    <td className="px-4 py-3 text-center"><span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">High</span></td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-3 font-semibold">Basmati Rice</td>
                    <td className="px-4 py-3">Lahore</td>
                    <td className="px-4 py-3 text-right text-green-700 font-bold">₨ 12,500</td>
                    <td className="px-4 py-3 text-center text-red-600">-1.2% ↓</td>
                    <td className="px-4 py-3 text-center"><span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Very High</span></td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-3 font-semibold">Cotton (کپاس)</td>
                    <td className="px-4 py-3">Multan</td>
                    <td className="px-4 py-3 text-right text-green-700 font-bold">₨ 18,500</td>
                    <td className="px-4 py-3 text-center text-green-600">+3.2% ↑</td>
                    <td className="px-4 py-3 text-center"><span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Very High</span></td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-3 font-semibold">Sugarcane (گنا)</td>
                    <td className="px-4 py-3">Faisalabad</td>
                    <td className="px-4 py-3 text-right text-green-700 font-bold">₨ 420</td>
                    <td className="px-4 py-3 text-center text-yellow-600">0% →</td>
                    <td className="px-4 py-3 text-center"><span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs">High</span></td>
                  </tr>
                  <tr className="hover:bg-green-50">
                    <td className="px-4 py-3 font-semibold">Mango (آم)</td>
                    <td className="px-4 py-3">Multan</td>
                    <td className="px-4 py-3 text-right text-green-700 font-bold">₨ 3,200</td>
                    <td className="px-4 py-3 text-center text-red-600">-2.5% ↓</td>
                    <td className="px-4 py-3 text-center"><span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">Very High</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-2xl p-5">
                <h3 className="font-bold text-green-800 mb-2">Major Mandis</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Lahore Grain Market</li>
                  <li>• Faisalabad Mandi</li>
                  <li>• Multan Cotton Market</li>
                  <li>• Rawalpindi Grain Market</li>
                  <li>• Sukkur Vegetable Mandi</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-2xl p-5">
                <h3 className="font-bold text-amber-800 mb-2">Tips for Best Prices</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Sell during peak season</li>
                  <li>• Check multiple mandi rates</li>
                  <li>• Store properly for better prices</li>
                  <li>• Join farmer cooperative groups</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-2xl p-5">
                <h3 className="font-bold text-blue-800 mb-2">Get Price Alerts</h3>
                <p className="text-sm text-gray-700">Subscribe to receive SMS when prices reach your target rate.</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Subscribe Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Government Schemes Detail Component
const GovernmentSchemesDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-blue-700 to-indigo-700 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Government Schemes</h1>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Agricultural Schemes for Pakistani Farmers</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Kissan Package 2026</h3>
                <p className="text-blue-100 text-sm mb-3">Subsidies on seeds, fertilizers, and agricultural machinery</p>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• 50% subsidy on high-quality seeds</li>
                  <li>• 30% subsidy on fertilizers</li>
                  <li>• Up to 40% off on tractors</li>
                </ul>
                <button className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">Apply Now →</button>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-green-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">ZTBL Easy Loans</h3>
                <p className="text-emerald-100 text-sm mb-3">Agricultural financing with low markup rates</p>
                <ul className="text-sm text-emerald-100 space-y-1">
                  <li>• Loans up to PKR 10,00,000</li>
                  <li>• Markup rate: Only 8%</li>
                  <li>• Flexible repayment options</li>
                </ul>
                <button className="mt-4 bg-white text-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold">Check Eligibility →</button>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Water Conservation Scheme</h3>
                <p className="text-amber-100 text-sm mb-3">Subsidies for drip irrigation and water-saving technologies</p>
                <ul className="text-sm text-amber-100 space-y-1">
                  <li>• 60% subsidy on drip irrigation</li>
                  <li>• Free water testing</li>
                  <li>• Training for efficient water use</li>
                </ul>
                <button className="mt-4 bg-white text-amber-700 px-4 py-2 rounded-lg text-sm font-semibold">Register →</button>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Organic Farming Support</h3>
                <p className="text-purple-100 text-sm mb-3">Promoting organic and sustainable agriculture</p>
                <ul className="text-sm text-purple-100 space-y-1">
                  <li>• Certification assistance</li>
                  <li>• Premium prices for organic produce</li>
                  <li>• Free organic farming training</li>
                </ul>
                <button className="mt-4 bg-white text-purple-700 px-4 py-2 rounded-lg text-sm font-semibold">Learn More →</button>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">Helpline Numbers</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-green-700">Kissan Helpline</p>
                  <p className="text-2xl font-bold">0800-12345</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-green-700">ZTBL Support</p>
                  <p className="text-2xl font-bold">111-111-9825</p>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <p className="font-bold text-green-700">Agri Extension</p>
                  <p className="text-2xl font-bold">0800-67890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Weather Forecast Detail Component
const WeatherForecastDetail = () => {
  const [selectedCity, setSelectedCity] = useState('Lahore');

  const weatherData = {
    Lahore: { temp: 32, condition: "Sunny", humidity: 45, rain: "0%", wind: "12 km/h" },
    Multan: { temp: 35, condition: "Hot & Dry", humidity: 38, rain: "0%", wind: "10 km/h" },
    Faisalabad: { temp: 33, condition: "Partly Cloudy", humidity: 48, rain: "10%", wind: "14 km/h" },
    Peshawar: { temp: 30, condition: "Clear Sky", humidity: 42, rain: "0%", wind: "11 km/h" },
    Karachi: { temp: 34, condition: "Humid", humidity: 65, rain: "5%", wind: "18 km/h" }
  };

  const currentWeather = weatherData[selectedCity] || weatherData.Lahore;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-cyan-600 to-blue-700 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Weather Forecast</h1>
          </div>

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <label className="block text-gray-700 font-semibold mb-2">Select District:</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="Lahore">Lahore</option>
                <option value="Multan">Multan</option>
                <option value="Faisalabad">Faisalabad</option>
                <option value="Peshawar">Peshawar</option>
                <option value="Karachi">Karachi</option>
              </select>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl font-bold mb-2">{selectedCity}</h2>
              <div className="flex items-center justify-between flex-wrap">
                <div>
                  <div className="text-6xl font-bold">{currentWeather.temp}°C</div>
                  <div className="text-xl mt-2">{currentWeather.condition}</div>
                </div>
                <div className="text-right">
                  <div>Humidity: {currentWeather.humidity}%</div>
                  <div>Rain: {currentWeather.rain}</div>
                  <div>Wind: {currentWeather.wind}</div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-4">7-Day Forecast</h3>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-3 mb-8">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                <div key={day} className="bg-gray-50 rounded-xl p-3 text-center">
                  <p className="font-semibold text-gray-700">{day}</p>
                  <div className="text-2xl my-2">{i % 2 === 0 ? '☀️' : '⛅'}</div>
                  <p className="text-sm font-bold">{32 - i}°C</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-2xl p-6">
              <h3 className="font-bold text-amber-800 mb-2">Farming Advice Based on Weather</h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• {currentWeather.temp > 30 ? 'High temperatures expected - irrigate crops early morning or evening' : 'Favorable weather for crop spraying'}</li>
                <li>• {currentWeather.humidity > 60 ? 'High humidity - watch for fungal diseases' : 'Good conditions for harvesting'}</li>
                <li>• Check daily for any weather alerts in your district</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Easy Loans Detail Component
const EasyLoansDetail = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-purple-700 to-indigo-700 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Easy Loans for Farmers</h1>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Agricultural Financing Options</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">ZTBL (Zari Taraqiati Bank Limited)</h3>
                <p className="text-purple-100 text-sm mb-3">Pakistan's premier agricultural development bank</p>
                <ul className="text-sm text-purple-100 space-y-1">
                  <li>• Production Loans: Up to PKR 5,00,000</li>
                  <li>• Development Loans: Up to PKR 20,00,000</li>
                  <li>• Markup: As low as 7.5%</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Kissan Credit Card</h3>
                <p className="text-emerald-100 text-sm mb-3">Easy access to credit for farming inputs</p>
                <ul className="text-sm text-emerald-100 space-y-1">
                  <li>• Credit limit: Up to PKR 3,00,000</li>
                  <li>• Purchase seeds, fertilizers, pesticides</li>
                  <li>• Interest-free period: 90 days</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Tractor & Machinery Loan</h3>
                <p className="text-blue-100 text-sm mb-3">Special financing for farm equipment</p>
                <ul className="text-sm text-blue-100 space-y-1">
                  <li>• Up to 90% financing on tractors</li>
                  <li>• Repayment up to 5 years</li>
                  <li>• Subsidized markup rates</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Livestock & Poultry Loan</h3>
                <p className="text-amber-100 text-sm mb-3">For dairy, meat, and poultry farming</p>
                <ul className="text-sm text-amber-100 space-y-1">
                  <li>• Loans for cattle, goats, and poultry</li>
                  <li>• Dairy equipment financing</li>
                  <li>• Flexible repayment schedules</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 rounded-2xl p-6 mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-3">Required Documents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Valid CNIC</li>
                  <li>✓ Land ownership documents</li>
                  <li>✓ Recent utility bill</li>
                </ul>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Passport size photographs</li>
                  <li>✓ Farming experience certificate</li>
                  <li>✓ Bank statement (if applicable)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-700 to-emerald-800 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Apply?</h3>
              <p className="mb-4">Visit your nearest ZTBL branch or apply online</p>
              <button className="bg-yellow-500 text-green-900 px-8 py-3 rounded-full font-bold hover:shadow-lg transition">Apply Now →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Training Videos Detail Component
const TrainingVideosDetail = () => {
  const videos = [
    { title: "Modern Wheat Farming Techniques", duration: "15:30", level: "Beginner", views: "50K+" },
    { title: "Rice Cultivation - Complete Guide", duration: "22:15", level: "Intermediate", views: "35K+" },
    { title: "Pest Control for Cotton Crop", duration: "18:45", level: "Advanced", views: "28K+" },
    { title: "Drip Irrigation Installation", duration: "12:20", level: "Beginner", views: "42K+" },
    { title: "Organic Farming Methods", duration: "25:00", level: "Intermediate", views: "31K+" },
    { title: "Harvesting & Storage Tips", duration: "14:10", level: "All Levels", views: "45K+" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-r from-pink-600 to-rose-700 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center px-4">Training Videos</h1>
          </div>

          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Learn Modern Farming Techniques</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {videos.map((video, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition">
                  <div className="relative h-40 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-5xl mb-2">📹</div>
                      <div className="text-white text-sm">{video.duration}</div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1">{video.title}</h3>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{video.level}</span>
                      <span>{video.views}</span>
                    </div>
                    <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition">Watch Now →</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-pink-600 to-rose-700 rounded-2xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-2">Want More Training?</h3>
              <p className="mb-4">Join our free workshops and get certified in modern farming</p>
              <button className="bg-white text-pink-700 px-6 py-2 rounded-full font-semibold">Register for Workshop →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Registration Modal Component
const RegistrationModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    cnic: '',
    phone: '',
    email: '',
    district: '',
    cropType: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const districts = ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Sialkot', 'Sargodha', 'Bahawalpur', 'Sheikhupura', 'Jhang'];
  const cropTypes = ['Wheat (گندم)', 'Rice (چاول)', 'Cotton (کپاس)', 'Sugarcane (گنا)', 'Maize (مکئی)', 'Mango (آم)', 'Mixed Crops'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess('Registration successful! A confirmation SMS has been sent.');
      setTimeout(() => {
        setSuccess('');
        onClose();
        setFormData({ fullName: '', cnic: '', phone: '', email: '', district: '', cropType: '', password: '', confirmPassword: '' });
      }, 2000);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-4 rounded-t-2xl">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">Farmer Registration</h2>
                <p className="text-green-100 text-sm">Join KrishiMitr Pakistan - Free Registration</p>
              </div>
              <button onClick={onClose} className="text-white hover:bg-white/20 rounded-full p-2 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {success && <div className="bg-green-50 border border-green-200 rounded-xl p-4"><p className="text-green-700 text-sm">{success}</p></div>}
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="Muhammad Aslam" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">CNIC Number *</label><input type="text" name="cnic" value={formData.cnic} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="12345-6789012-3" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="03XX-XXXXXXX" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label><input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="farmer@example.com" /></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">District *</label><select name="district" value={formData.district} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"><option value="">Select District</option>{districts.map((d, i) => <option key={i} value={d}>{d}</option>)}</select></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Main Crop *</label><select name="cropType" value={formData.cropType} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"><option value="">Select Crop</option>{cropTypes.map((c, i) => <option key={i} value={c}>{c}</option>)}</select></div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Password *</label><input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="••••••••" /></div>
              <div><label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password *</label><input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" placeholder="••••••••" /></div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 text-center"><p className="text-green-800 text-sm">By registering, you agree to receive SMS updates about mandi rates, weather alerts, and government schemes.</p></div>
            <button type="submit" disabled={loading} className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50">{loading ? "Registering..." : "Register as Farmer"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Main Home Component (No Footer, No Feature Links)
const Home = () => {
  const [counters, setCounters] = useState({ farmers: 0, crops: 0, districts: 0, satisfaction: 0 });
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  useEffect(() => {
    const target = { farmers: 25000, crops: 60, districts: 150, satisfaction: 95 };
    const duration = 2000;
    const step = 30;
    const increments = { farmers: target.farmers / (duration / step), crops: target.crops / (duration / step), districts: target.districts / (duration / step), satisfaction: target.satisfaction / (duration / step) };
    let current = { farmers: 0, crops: 0, districts: 0, satisfaction: 0 };
    const timer = setInterval(() => {
      let allCompleted = true;
      Object.keys(current).forEach(key => {
        if (current[key] < target[key]) { current[key] = Math.min(current[key] + increments[key], target[key]); allCompleted = false; }
      });
      setCounters({ ...current });
      if (allCompleted) clearInterval(timer);
    }, step);
  }, []);

  // Features without links - just cards
  const features = [
    { title: "Punjab Crop Guide", description: "Expert advice on wheat, rice, sugarcane cultivation for Punjab region with seasonal tips.", image: "Punjab crop guide.jpg" },
    { title: "Mandi Rates", description: "Real-time market prices from Lahore, Faisalabad, Multan, and all major mandis across Pakistan.", image: "mandi.jpg" },
    { title: "Government Schemes", description: "Updates on Kissan Package, subsidy programs, and agricultural loans from Government of Pakistan.", image: "govt.gif" },
    { title: "Weather Forecast", description: "Accurate weather predictions for all provinces including Punjab, Sindh, KPK, and Balochistan.", image: "weather.jpg" },
    { title: "Easy Loans", description: "Connect with Zari Taraqiati Bank Limited (ZTBL) and other banks for agricultural financing.", image: "loan.webp" },
    { title: "Training Videos", description: "Educational content in Urdu and regional languages about modern farming techniques.", image: "training.jpg" }
  ];

  const crops = [
    { name: "Wheat (گندم)", season: "Rabi (Nov-Apr)", region: "Punjab, Sindh", link: "/crops/wheat", image: "wheat.jpg" },
    { name: "Rice (چاول)", season: "Kharif (May-Nov)", region: "Punjab, Sindh", link: "/crops/rice", image: "download.jpg" },
    { name: "Cotton (کپاس)", season: "Kharif (Apr-Aug)", region: "Punjab, Sindh", link: "/crops/cotton", image: "cotton.jpg" },
    { name: "Sugarcane (گنا)", season: "Throughout Year", region: "Punjab, KPK", link: "/crops/sugarcane", image: "Sugar.png" },
    { name: "Maize (مکئی)", season: "Kharif (Jun-Sep)", region: "KPK, Punjab", link: "/crops/maize", image: "maize.jpg" },
    { name: "Mango (آم)", season: "Summer (May-Aug)", region: "Punjab, Sindh", link: "/crops/mango", image: "mango.jpg" }
  ];

  const testimonials = [
    { name: "Mirza Ahmad", location: "Sheikhupura, Punjab", text: "KrishiMitr ne meri zindagi badal di. Market rates ki information se mujhe apni gandam ki fasal ka behtreen daam mila!", image: "mirza.jpeg" },
    { name: "Muhammad Arslan", location: "Rahim Yar Khan, Punjab", text: "Government schemes ki information bohat helpful hai. Main ne naye farming equipment par subsidy hasil ki.", image: "Arslan.png" },
    { name: "Sajid Farooq", location: "Tando Allahyar, Sindh", text: "Weather alerts ne meri cotton ki crop ko unexpected rain se bacha liya. Best platform for Pakistani farmers!", image: "Sajid.jpeg" },
    { name: "Muhammad Basit", location: "Mardan, KPK", text: "Training videos ne mujhe modern farming techniques sikhain. Meri maize ki paidaish 40% barh gayi!", image: "Basit.jpeg" }
  ];

  const scrollToCrops = () => { document.getElementById('crops')?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <>
      <Routes>
        <Route path="/crops-guide" element={<PunjabCropGuideDetail />} />
        <Route path="/mandi-rates" element={<MandiRatesDetail />} />
        <Route path="/schemes" element={<GovernmentSchemesDetail />} />
        <Route path="/weather" element={<WeatherForecastDetail />} />
        <Route path="/loans" element={<EasyLoansDetail />} />
        <Route path="/training" element={<TrainingVideosDetail />} />
        <Route path="/" element={
          <div className="bg-gradient-to-b from-green-50 to-white">
            <RegistrationModal isOpen={isRegisterModalOpen} onClose={() => setIsRegisterModalOpen(false)} />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white overflow-hidden">
              <div className="container mx-auto px-4 py-16 text-center">
                <div className="inline-block mb-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full">
                  <span className="text-green-300 text-sm font-semibold">KrishiMitr Pakistan</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Empowering Pakistani <span className="text-green-400">Farmers</span></h1>
                <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Crop guidance, mandi rates, government schemes & modern farming techniques in Urdu.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setIsRegisterModalOpen(true)} className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-semibold transition transform hover:scale-105">Register Today →</button>
                  <button onClick={scrollToCrops} className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-semibold transition border border-white/30">Explore Crops</button>
                </div>
                <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mt-8 pt-6 border-t border-white/20">
                  <div><p className="text-xl font-bold text-green-300">50K+</p><p className="text-sm text-gray-300">Farmers</p></div>
                  <div><p className="text-xl font-bold text-green-300">100+</p><p className="text-sm text-gray-300">Crops</p></div>
                  <div><p className="text-xl font-bold text-green-300">24/7</p><p className="text-sm text-gray-300">Support</p></div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-800">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div><div className="text-4xl font-bold text-white mb-2">{Math.floor(counters.farmers)}+</div><div className="text-green-200">Registered Farmers</div></div>
                  <div><div className="text-4xl font-bold text-white mb-2">{Math.floor(counters.crops)}+</div><div className="text-green-200">Crop Varieties</div></div>
                  <div><div className="text-4xl font-bold text-white mb-2">{Math.floor(counters.districts)}+</div><div className="text-green-200">Districts Covered</div></div>
                  <div><div className="text-4xl font-bold text-white mb-2">{Math.floor(counters.satisfaction)}%</div><div className="text-green-200">Farmer Satisfaction</div></div>
                </div>
              </div>
            </section>

            {/* Features Section - No Links */}
            <section id="features" className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need, <span className="text-green-600">One Platform</span></h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Complete agricultural solutions for Pakistani farmers</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer">
                      <div className="relative h-56 overflow-hidden">
                        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* // Popular Crops Section - No Links (sirf display ke liye) */}
            <section id="crops" className="py-20 bg-gradient-to-b from-green-50 to-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular <span className="text-green-600">Crops</span> in Pakistan</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Major crops grown across different regions of Pakistan</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {crops.map((crop, index) => (
                    <div key={index} className="group text-center bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                      <div className="relative h-36 overflow-hidden">
                        <img src={crop.image} alt={crop.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-gray-900 text-sm">{crop.name}</h3>
                        <p className="text-xs text-gray-500 mt-1">{crop.season}</p>
                        <p className="text-xs text-green-600 mt-1 font-medium">{crop.region}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How <span className="text-green-600">KrishiMitr</span> Works</h2>
                <p className="text-gray-600 mb-12">Simple steps to transform your farming journey</p>
                <div className="grid md:grid-cols-3 gap-8">
                  <div><div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4"><span className="text-3xl font-bold text-white">1</span></div><h3 className="text-xl font-bold mb-2">Register</h3><p className="text-gray-600">Create your free account</p></div>
                  <div><div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4"><span className="text-3xl font-bold text-white">2</span></div><h3 className="text-xl font-bold mb-2">Explore</h3><p className="text-gray-600">Access guides, rates, schemes</p></div>
                  <div><div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4"><span className="text-3xl font-bold text-white">3</span></div><h3 className="text-xl font-bold mb-2">Grow Better</h3><p className="text-gray-600">Increase yield & profit</p></div>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-green-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What <span className="text-green-600">Pakistani Farmers</span> Say</h2></div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
                      <div className="flex items-center gap-4 mb-4"><img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" /><div><h4 className="font-bold text-gray-900">{testimonial.name}</h4><p className="text-sm text-gray-500">{testimonial.location}</p></div></div>
                      <div className="flex mb-3 text-yellow-500">★★★★★</div>
                      <p className="text-gray-600 italic">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-green-700 to-emerald-800 text-center">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Kya Aap Apni Farming Ko Behtar Banana Chahte Hain?</h2>
                <p className="text-green-200 mb-8 text-lg">Aaj hi KrishiMitr Pakistan mein register karein aur free mein tamam agricultural resources hasil karein!</p>
                <button onClick={() => setIsRegisterModalOpen(true)} className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-green-900 rounded-full font-semibold text-lg transition transform hover:scale-105">Register as Farmer</button>
              </div>
            </section>

          </div>
        } />
      </Routes>
    </>
  );
};

export default Home;