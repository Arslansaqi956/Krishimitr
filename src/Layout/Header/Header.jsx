import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check if user is logged in (from localStorage or your auth system)
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle navigation with scroll to top
  const handleNavigation = (path, e) => {
    // Prevent default if needed
    if (e) e.preventDefault();
    
    const currentPath = window.location.pathname;
    
    if (currentPath === path) {
      // If already on the same page, just scroll to top
      scrollToTop();
    } else {
      // Navigate to new page and then scroll to top
      navigate(path);
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/crop', name: 'Crop' },
    { path: '/schemes', name: 'Govt Schemes' },
    { path: '/marketprice', name: 'MarketPrice' },
    { path: '/weather', name: 'Weather' },
    { path: '/contact', name: 'Contact' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
    setTimeout(() => scrollToTop(), 100);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-green-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-gradient-to-r from-green-800 to-green-900 py-3'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Section with Link */}
          <button 
            onClick={(e) => handleNavigation('/', e)}
            className="flex items-center gap-3 focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
              </svg>
            </div>
            <div>
              <div className="text-white font-bold text-xl">
                Krishi<span className="text-yellow-400">Mitr</span>
                <span className="text-sm ml-1">🇵🇰</span>
              </div>
              <div className="text-green-300 text-xs">Pakistani Farmers First</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={(e) => handleNavigation(item.path, e)}
                className={`
                  px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200
                  ${window.location.pathname === item.path 
                    ? 'bg-yellow-500 text-green-900 shadow-md' 
                    : 'text-green-100 hover:bg-green-700 hover:text-white'
                  }
                `}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <button 
                  onClick={(e) => handleNavigation('/profile', e)}
                  className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile
                </button>
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={(e) => handleNavigation('/login', e)}
                  className="flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </button>
                <button 
                  onClick={(e) => handleNavigation('/register', e)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-5 py-2 rounded-lg font-semibold transition shadow-md cursor-pointer"
                >
                  Register as Farmer
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2 rounded-lg hover:bg-green-700 transition"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-green-900/95 backdrop-blur-md shadow-xl">
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={(e) => handleNavigation(item.path, e)}
                  className={`
                    px-4 py-3 rounded-lg font-medium transition text-left
                    ${window.location.pathname === item.path 
                      ? 'bg-yellow-500 text-green-900' 
                      : 'text-green-100 hover:bg-green-700'
                    }
                  `}
                >
                  {item.name}
                </button>
              ))}
              
              <div className="pt-4 space-y-2 border-t border-green-700">
                {isLoggedIn ? (
                  <>
                    <button 
                      onClick={(e) => handleNavigation('/profile', e)}
                      className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      Profile
                    </button>
                    <button 
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button 
                      onClick={(e) => handleNavigation('/login', e)}
                      className="w-full bg-green-700 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition text-center"
                    >
                      Login
                    </button>
                    <button 
                      onClick={(e) => handleNavigation('/register', e)}
                      className="w-full bg-yellow-500 hover:bg-yellow-600 text-green-900 px-4 py-3 rounded-lg font-semibold transition text-center"
                    >
                      Register as Farmer
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;