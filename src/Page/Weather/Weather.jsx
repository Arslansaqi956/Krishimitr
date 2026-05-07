import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState('Lahore');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('current');
  const [unit, setUnit] = useState('celsius'); // celsius or fahrenheit
  const [alerts, setAlerts] = useState([]);

  // Complete weather data for Pakistani cities
  const citiesData = {
    Lahore: {
      name: 'Lahore',
      province: 'Punjab',
      lat: 31.5497,
      lon: 74.3436,
      current: {
        temp: 32,
        feelsLike: 34,
        humidity: 55,
        windSpeed: 12,
        pressure: 1012,
        uvIndex: 8,
        visibility: 8,
        condition: 'Sunny',
        icon: '☀️',
        description: 'Clear sky with moderate heat',
        airQuality: 'Moderate',
        farmingAdvice: 'Ideal for wheat harvesting. Protect crops from direct sunlight.'
      },
      forecast: [
        { day: 'Today', tempMax: 34, tempMin: 24, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 55 },
        { day: 'Tomorrow', tempMax: 33, tempMin: 25, condition: 'Partly Cloudy', icon: '⛅', rainChance: 10, humidity: 58 },
        { day: 'Wed', tempMax: 31, tempMin: 23, condition: 'Cloudy', icon: '☁️', rainChance: 25, humidity: 65 },
        { day: 'Thu', tempMax: 29, tempMin: 22, condition: 'Light Rain', icon: '🌧️', rainChance: 60, humidity: 75 },
        { day: 'Fri', tempMax: 30, tempMin: 23, condition: 'Partly Cloudy', icon: '⛅', rainChance: 15, humidity: 60 },
        { day: 'Sat', tempMax: 32, tempMin: 24, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 52 },
        { day: 'Sun', tempMax: 33, tempMin: 25, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 50 }
      ]
    },
    Karachi: {
      name: 'Karachi',
      province: 'Sindh',
      lat: 24.8607,
      lon: 67.0011,
      current: {
        temp: 30,
        feelsLike: 32,
        humidity: 70,
        windSpeed: 18,
        pressure: 1008,
        uvIndex: 9,
        visibility: 6,
        condition: 'Humid',
        icon: '🌊',
        description: 'Coastal humidity with sea breeze',
        airQuality: 'Moderate',
        farmingAdvice: 'High humidity alert. Monitor cotton crops for fungal diseases.'
      },
      forecast: [
        { day: 'Today', tempMax: 32, tempMin: 26, condition: 'Humid', icon: '🌊', rainChance: 20, humidity: 72 },
        { day: 'Tomorrow', tempMax: 31, tempMin: 27, condition: 'Partly Cloudy', icon: '⛅', rainChance: 15, humidity: 70 },
        { day: 'Wed', tempMax: 33, tempMin: 26, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 65 },
        { day: 'Thu', tempMax: 32, tempMin: 27, condition: 'Cloudy', icon: '☁️', rainChance: 30, humidity: 68 },
        { day: 'Fri', tempMax: 31, tempMin: 26, condition: 'Light Rain', icon: '🌧️', rainChance: 45, humidity: 75 },
        { day: 'Sat', tempMax: 32, tempMin: 27, condition: 'Partly Cloudy', icon: '⛅', rainChance: 10, humidity: 66 },
        { day: 'Sun', tempMax: 33, tempMin: 28, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 60 }
      ]
    },
    Islamabad: {
      name: 'Islamabad',
      province: 'ICT',
      lat: 33.6844,
      lon: 73.0479,
      current: {
        temp: 28,
        feelsLike: 29,
        humidity: 48,
        windSpeed: 8,
        pressure: 1015,
        uvIndex: 7,
        visibility: 10,
        condition: 'Pleasant',
        icon: '🌤️',
        description: 'Beautiful weather with cool breeze',
        airQuality: 'Good',
        farmingAdvice: 'Perfect conditions for vegetable farming. Good time for planting.'
      },
      forecast: [
        { day: 'Today', tempMax: 29, tempMin: 18, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 48 },
        { day: 'Tomorrow', tempMax: 28, tempMin: 17, condition: 'Partly Cloudy', icon: '⛅', rainChance: 5, humidity: 50 },
        { day: 'Wed', tempMax: 27, tempMin: 16, condition: 'Cloudy', icon: '☁️', rainChance: 20, humidity: 55 },
        { day: 'Thu', tempMax: 26, tempMin: 15, condition: 'Light Rain', icon: '🌧️', rainChance: 40, humidity: 65 },
        { day: 'Fri', tempMax: 27, tempMin: 16, condition: 'Partly Cloudy', icon: '⛅', rainChance: 10, humidity: 52 },
        { day: 'Sat', tempMax: 28, tempMin: 17, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 46 },
        { day: 'Sun', tempMax: 29, tempMin: 18, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 44 }
      ]
    },
    Multan: {
      name: 'Multan',
      province: 'Punjab',
      lat: 30.1575,
      lon: 71.5249,
      current: {
        temp: 38,
        feelsLike: 42,
        humidity: 35,
        windSpeed: 10,
        pressure: 1005,
        uvIndex: 10,
        visibility: 7,
        condition: 'Hot & Dry',
        icon: '🔥',
        description: 'Extreme heat conditions',
        airQuality: 'Poor',
        farmingAdvice: 'Heat wave alert! Provide shade to livestock. Irrigate crops early morning.'
      },
      forecast: [
        { day: 'Today', tempMax: 40, tempMin: 28, condition: 'Hot', icon: '🔥', rainChance: 0, humidity: 35 },
        { day: 'Tomorrow', tempMax: 39, tempMin: 27, condition: 'Hot', icon: '🔥', rainChance: 0, humidity: 38 },
        { day: 'Wed', tempMax: 38, tempMin: 26, condition: 'Partly Cloudy', icon: '⛅', rainChance: 10, humidity: 40 },
        { day: 'Thu', tempMax: 37, tempMin: 26, condition: 'Cloudy', icon: '☁️', rainChance: 20, humidity: 45 },
        { day: 'Fri', tempMax: 36, tempMin: 25, condition: 'Light Rain', icon: '🌧️', rainChance: 35, humidity: 55 },
        { day: 'Sat', tempMax: 37, tempMin: 26, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 42 },
        { day: 'Sun', tempMax: 38, tempMin: 27, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 38 }
      ]
    },
    Peshawar: {
      name: 'Peshawar',
      province: 'KPK',
      lat: 34.0151,
      lon: 71.5249,
      current: {
        temp: 30,
        feelsLike: 31,
        humidity: 45,
        windSpeed: 9,
        pressure: 1013,
        uvIndex: 8,
        visibility: 9,
        condition: 'Clear',
        icon: '☀️',
        description: 'Pleasant weather',
        airQuality: 'Moderate',
        farmingAdvice: 'Good conditions for maize cultivation. Monitor for pests.'
      },
      forecast: [
        { day: 'Today', tempMax: 32, tempMin: 20, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 45 },
        { day: 'Tomorrow', tempMax: 31, tempMin: 19, condition: 'Partly Cloudy', icon: '⛅', rainChance: 10, humidity: 48 },
        { day: 'Wed', tempMax: 30, tempMin: 18, condition: 'Cloudy', icon: '☁️', rainChance: 25, humidity: 55 },
        { day: 'Thu', tempMax: 29, tempMin: 17, condition: 'Light Rain', icon: '🌧️', rainChance: 50, humidity: 65 },
        { day: 'Fri', tempMax: 30, tempMin: 18, condition: 'Partly Cloudy', icon: '⛅', rainChance: 15, humidity: 52 },
        { day: 'Sat', tempMax: 31, tempMin: 19, condition: 'Sunny', icon: '☀️', rainChance: 5, humidity: 46 },
        { day: 'Sun', tempMax: 32, tempMin: 20, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 44 }
      ]
    },
    Quetta: {
      name: 'Quetta',
      province: 'Balochistan',
      lat: 30.1798,
      lon: 66.975,
      current: {
        temp: 22,
        feelsLike: 22,
        humidity: 30,
        windSpeed: 15,
        pressure: 1020,
        uvIndex: 9,
        visibility: 12,
        condition: 'Clear & Cool',
        icon: '❄️',
        description: 'Cool mountain weather',
        airQuality: 'Good',
        farmingAdvice: 'Ideal for apple orchards. Protect early crops from unexpected frost.'
      },
      forecast: [
        { day: 'Today', tempMax: 24, tempMin: 12, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 30 },
        { day: 'Tomorrow', tempMax: 23, tempMin: 11, condition: 'Partly Cloudy', icon: '⛅', rainChance: 5, humidity: 32 },
        { day: 'Wed', tempMax: 22, tempMin: 10, condition: 'Cloudy', icon: '☁️', rainChance: 15, humidity: 38 },
        { day: 'Thu', tempMax: 21, tempMin: 9, condition: 'Light Rain', icon: '🌧️', rainChance: 30, humidity: 45 },
        { day: 'Fri', tempMax: 22, tempMin: 10, condition: 'Partly Cloudy', icon: '⛅', rainChance: 10, humidity: 35 },
        { day: 'Sat', tempMax: 23, tempMin: 11, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 30 },
        { day: 'Sun', tempMax: 24, tempMin: 12, condition: 'Sunny', icon: '☀️', rainChance: 0, humidity: 28 }
      ]
    }
  };

  const cities = [
    { name: 'Lahore', province: 'Punjab', icon: '🏛️' },
    { name: 'Karachi', province: 'Sindh', icon: '🌊' },
    { name: 'Islamabad', province: 'ICT', icon: '🏔️' },
    { name: 'Multan', province: 'Punjab', icon: '🥭' },
    { name: 'Peshawar', province: 'KPK', icon: '⛰️' },
    { name: 'Quetta', province: 'Balochistan', icon: '🏜️' },
    { name: 'Faisalabad', province: 'Punjab', icon: '🏭' },
    { name: 'Rawalpindi', province: 'Punjab', icon: '🏘️' }
  ];

  // Generate weather alerts based on conditions
  useEffect(() => {
    const currentWeather = citiesData[selectedCity]?.current;
    if (currentWeather) {
      const newAlerts = [];
      if (currentWeather.temp > 38) {
        newAlerts.push({ type: 'danger', message: 'Heat Wave Alert! Temperature above 38°C. Protect crops and livestock.', icon: '🔥' });
      }
      if (currentWeather.humidity > 70) {
        newAlerts.push({ type: 'warning', message: 'High Humidity! Risk of fungal diseases in crops.', icon: '💧' });
      }
      if (currentWeather.uvIndex > 8) {
        newAlerts.push({ type: 'warning', message: 'High UV Index! Avoid working in fields during peak hours (11am-3pm).', icon: '☀️' });
      }
      if (currentWeather.windSpeed > 15) {
        newAlerts.push({ type: 'warning', message: 'Strong Winds! Secure loose structures and protect young plants.', icon: '💨' });
      }
      setAlerts(newAlerts);
    }
  }, [selectedCity]);

  // Load weather data on city change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const data = citiesData[selectedCity];
      if (data) {
        setWeatherData(data.current);
        setForecastData(data.forecast);
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedCity]);

  const convertTemp = useCallback((temp) => {
    if (unit === 'fahrenheit') {
      return Math.round((temp * 9 / 5) + 32);
    }
    return temp;
  }, [unit]);

  const getCropRecommendation = (condition, temp) => {
    if (temp > 35) {
      return { crop: 'Cotton, Mango, Sugarcane', advice: 'Heat-tolerant crops recommended', icon: '🌿' };
    } else if (temp < 15) {
      return { crop: 'Wheat, Barley, Peas', advice: 'Cool season crops ideal', icon: '🌾' };
    } else if (condition.includes('Rain')) {
      return { crop: 'Rice, Sugarcane', advice: 'Good for water-intensive crops', icon: '🌧️' };
    }
    return { crop: 'Vegetables, Maize, Pulses', advice: 'Optimal conditions for most crops', icon: '🥬' };
  };

  const getWeatherIcon = (condition) => {
    const icons = {
      'Sunny': '☀️', 'Partly Cloudy': '⛅', 'Cloudy': '☁️', 'Light Rain': '🌧️',
      'Rain': '🌧️', 'Hot': '🔥', 'Humid': '🌊', 'Clear': '☀️', 'Hot & Dry': '🔥',
      'Pleasant': '🌤️', 'Clear & Cool': '❄️'
    };
    return icons[condition] || '🌡️';
  };

  const getAirQualityColor = (quality) => {
    const colors = {
      'Good': 'bg-green-500',
      'Moderate': 'bg-yellow-500',
      'Poor': 'bg-red-500',
      'Unhealthy': 'bg-purple-500'
    };
    return colors[quality] || 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-blue-600 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center text-3xl">🌤️</div>
          </div>
          <p className="text-blue-800 font-medium">Loading weather data...</p>
        </div>
      </div>
    );
  }

  const cropRec = getCropRecommendation(weatherData?.condition, weatherData?.temp);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
      {/* Hero Section - FIXED FOR REACT + TAILWIND */}
      <section className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl md:text-8xl animate-pulse">☁️</div>
          <div className="absolute bottom-20 right-20 text-6xl md:text-8xl animate-pulse delay-1000">🌤️</div>
          <div className="absolute top-1/2 left-1/4 text-5xl md:text-7xl animate-bounce">⛅</div>
          <div className="absolute bottom-40 left-1/3 text-5xl md:text-6xl animate-pulse">🌧️</div>
        </div>

        {/* Hero Section - COMPLETE FIXED */}
        <section className="relative bg-gradient-to-r from-blue-900 to-cyan-900 text-white overflow-hidden">

          {/* Background decorations */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 text-6xl md:text-8xl animate-pulse">☁️</div>
            <div className="absolute bottom-20 right-20 text-6xl md:text-8xl animate-pulse delay-1000">🌤️</div>
            <div className="absolute top-1/2 left-1/4 text-5xl md:text-7xl animate-bounce">⛅</div>
            <div className="absolute bottom-40 left-1/3 text-5xl md:text-6xl animate-pulse">🌧️</div>
          </div>

          {/* Content - with proper spacing and colors */}
          <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
            <div className="max-w-4xl mx-auto text-center">

              {/* Badge - text color fixed */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <span className="text-sm md:text-base font-semibold text-white">🇵🇰 Pakistan Weather Forecast 2024</span>
              </div>

              {/* Heading - text colors fixed */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Agricultural
                <span className="text-cyan-300 block mt-2">Weather Updates</span>
              </h1>
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 120L1440 120L1440 0C1440 0 1320 40 1200 40C1080 40 960 0 840 0C720 0 600 40 480 40C360 40 240 0 120 0C60 0 30 10 0 20L0 120Z" fill="#f0f9ff" />
            </svg>
          </div>

        </section>
        Wave
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L1440 120L1440 0C1440 0 1320 40 1200 40C1080 40 960 0 840 0C720 0 600 40 480 40C360 40 240 0 120 0C60 0 30 10 0 20L0 120Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* City Selector */}
      <div className="container mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">📍 Select City</label>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
                {cities.map(city => (
                  <button
                    key={city.name}
                    onClick={() => setSelectedCity(city.name)}
                    className={`px-4 py-3 rounded-xl transition-all duration-300 text-center ${selectedCity === city.name
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg transform scale-105'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <div className="text-2xl">{city.icon}</div>
                    <div className="text-sm font-medium">{city.name}</div>
                    <div className="text-xs opacity-75">{city.province}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setUnit('celsius')}
                className={`px-4 py-2 rounded-lg font-medium transition ${unit === 'celsius' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
              >
                °C
              </button>
              <button
                onClick={() => setUnit('fahrenheit')}
                className={`px-4 py-2 rounded-lg font-medium transition ${unit === 'fahrenheit' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
              >
                °F
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      {alerts.length > 0 && (
        <div className="container mx-auto px-4 mb-8">
          {alerts.map((alert, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-4 mb-3 animate-slideInRight ${alert.type === 'danger' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-yellow-50 border-l-4 border-yellow-500'
                }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{alert.icon}</span>
                <div>
                  <p className={`font-semibold ${alert.type === 'danger' ? 'text-red-700' : 'text-yellow-700'}`}>
                    {alert.message}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Main Weather Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Current Weather Card */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-2xl p-6 md:p-8 mb-8 text-white transform hover:scale-105 transition-all duration-500">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <span className="text-7xl">{weatherData?.icon}</span>
                <div>
                  <h2 className="text-3xl font-bold">{selectedCity}</h2>
                  <p className="text-cyan-200">{weatherData?.condition}</p>
                </div>
              </div>
              <div className="mb-4">
                <span className="text-6xl font-bold">{convertTemp(weatherData?.temp)}°</span>
                <span className="text-2xl ml-2">{unit === 'celsius' ? 'C' : 'F'}</span>
              </div>
              <p className="text-cyan-100">{weatherData?.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <span>💧</span>
                  <div>
                    <p className="text-xs opacity-75">Humidity</p>
                    <p className="font-semibold">{weatherData?.humidity}%</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <span>💨</span>
                  <div>
                    <p className="text-xs opacity-75">Wind Speed</p>
                    <p className="font-semibold">{weatherData?.windSpeed} km/h</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <span>🌡️</span>
                  <div>
                    <p className="text-xs opacity-75">Feels Like</p>
                    <p className="font-semibold">{convertTemp(weatherData?.feelsLike)}°</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <span>☀️</span>
                  <div>
                    <p className="text-xs opacity-75">UV Index</p>
                    <p className="font-semibold">{weatherData?.uvIndex}</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <span>📊</span>
                  <div>
                    <p className="text-xs opacity-75">Pressure</p>
                    <p className="font-semibold">{weatherData?.pressure} hPa</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-3">
                <div className="flex items-center gap-2">
                  <span>👁️</span>
                  <div>
                    <p className="text-xs opacity-75">Visibility</p>
                    <p className="font-semibold">{weatherData?.visibility} km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Air Quality & Farming Advice */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌬️</span>
              <h3 className="text-xl font-bold text-gray-800">Air Quality</h3>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-600">Quality Index</span>
              <span className={`px-3 py-1 rounded-full text-white text-sm ${getAirQualityColor(weatherData?.airQuality)}`}>
                {weatherData?.airQuality}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${getAirQualityColor(weatherData?.airQuality)}`}
                style={{ width: weatherData?.airQuality === 'Good' ? '30%' : weatherData?.airQuality === 'Moderate' ? '60%' : '90%' }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              {weatherData?.airQuality === 'Good'
                ? 'Good air quality. Safe for outdoor farming activities.'
                : weatherData?.airQuality === 'Moderate'
                  ? 'Moderate air quality. Limit prolonged outdoor work.'
                  : 'Poor air quality. Use masks and limit outdoor activities.'}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl shadow-xl p-6 text-white transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{cropRec.icon}</span>
              <h3 className="text-xl font-bold">🌾 Farming Recommendation</h3>
            </div>
            <p className="text-green-100 mb-2">Recommended Crops:</p>
            <p className="text-2xl font-bold mb-3">{cropRec.crop}</p>
            <p className="text-green-100">{cropRec.advice}</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('current')}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${activeTab === 'current'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              📋 Current Details
            </button>
            <button
              onClick={() => setActiveTab('forecast')}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${activeTab === 'forecast'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              📅 7-Day Forecast
            </button>
            <button
              onClick={() => setActiveTab('farming')}
              className={`flex-1 px-6 py-4 font-medium transition-all duration-300 ${activeTab === 'farming'
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-blue-600'
                }`}
            >
              🌱 Farming Tips
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'current' && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-500 text-sm mb-1">Weather Summary</p>
                    <p className="text-gray-800">{weatherData?.description}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-gray-500 text-sm mb-1">Farming Advisory</p>
                    <p className="text-gray-800">{weatherData?.farmingAdvice}</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span>⚠️</span>
                    <p className="font-semibold text-blue-800">Precautionary Measures</p>
                  </div>
                  <ul className="list-disc list-inside text-sm text-blue-700 space-y-1">
                    {weatherData?.temp > 35 && <li>Provide shade and extra water to livestock</li>}
                    {weatherData?.humidity > 70 && <li>Monitor crops for fungal diseases</li>}
                    {weatherData?.uvIndex > 8 && <li>Avoid field work between 11am-3pm</li>}
                    {weatherData?.windSpeed > 15 && <li>Secure greenhouses and loose structures</li>}
                    <li>Stay updated with latest weather alerts</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'forecast' && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
                {forecastData.map((day, idx) => (
                  <div key={idx} className="text-center p-3 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300">
                    <p className="font-semibold text-gray-800 text-sm">{day.day}</p>
                    <div className="text-3xl my-2">{day.icon}</div>
                    <p className="text-lg font-bold text-gray-800">{convertTemp(day.tempMax)}°</p>
                    <p className="text-sm text-gray-500">{convertTemp(day.tempMin)}°</p>
                    <p className="text-xs text-blue-600 mt-1">💧 {day.humidity}%</p>
                    <p className="text-xs text-cyan-600">🌧️ {day.rainChance}%</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'farming' && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>💧</span>
                      <h4 className="font-semibold text-green-800">Irrigation Advice</h4>
                    </div>
                    <p className="text-sm text-green-700">
                      {weatherData?.temp > 35
                        ? 'Increase irrigation frequency. Water early morning or late evening to reduce evaporation.'
                        : weatherData?.rainChance > 50
                          ? 'Reduce irrigation. Upcoming rain expected.'
                          : 'Maintain regular irrigation schedule. Monitor soil moisture.'}
                    </p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>🐛</span>
                      <h4 className="font-semibold text-amber-800">Pest Management</h4>
                    </div>
                    <p className="text-sm text-amber-700">
                      {weatherData?.humidity > 65
                        ? 'High humidity increases pest risk. Regular monitoring recommended.'
                        : 'Low pest pressure. Maintain standard preventive measures.'}
                    </p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>🌿</span>
                      <h4 className="font-semibold text-purple-800">Fertilizer Application</h4>
                    </div>
                    <p className="text-sm text-purple-700">
                      {weatherData?.rainChance > 30
                        ? 'Avoid fertilizer application before rain to prevent runoff.'
                        : 'Optimal conditions for fertilizer application.'}
                    </p>
                  </div>
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span>🚜</span>
                      <h4 className="font-semibold text-indigo-800">Field Operations</h4>
                    </div>
                    <p className="text-sm text-indigo-700">
                      {weatherData?.condition === 'Rain' || weatherData?.condition === 'Light Rain'
                        ? 'Avoid field operations during rain. Wait for dry conditions.'
                        : 'Good conditions for field operations.'}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Weather Tips Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span>💡</span> Weather Tips for Pakistani Farmers
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌡️</span>
              <div>
                <p className="font-semibold text-gray-800">Monitor Temperature</p>
                <p className="text-sm text-gray-600">Extreme temperatures affect crop growth. Take preventive measures.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">💧</span>
              <div>
                <p className="font-semibold text-gray-800">Track Humidity</p>
                <p className="text-sm text-gray-600">High humidity leads to fungal diseases. Ensure proper air circulation.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🌧️</span>
              <div>
                <p className="font-semibold text-gray-800">Rain Forecast</p>
                <p className="text-sm text-gray-600">Plan harvesting and fertilizer application around rain forecasts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.5s ease-out forwards;
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
      `}</style>
    </div>
  );
};

export default Weather;