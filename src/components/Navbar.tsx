import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Phone,
  Clock,
  MapPin,
  Menu,
  X,
  Eye,
  Calendar,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { HOSPITAL_INFO, getWhatsAppUrl } from '../data/hospitalInfo';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll for sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Cataract Surgery',
      path: '/cataract-surgery',
      badge: 'Speciality',
      badgeClass: 'bg-emerald-100 text-secondary border border-secondary/20',
    },
    { name: 'Eye Care Services', path: '/services' },
    { name: 'Our Doctors', path: '/doctors' },
    { name: 'About Hospital', path: '/about' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-200">
      {/* Top Announcement Bar */}
      <div className="bg-primary text-white text-xs border-b border-primary-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between flex-wrap gap-2">
          {/* Tagline & Reg No */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-hindi font-bold text-emerald-300 tracking-wide">
              {HOSPITAL_INFO.tagline}
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-slate-200">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary-light" />
              <span>Reg. No: <strong>{HOSPITAL_INFO.regNumber}</strong></span>
            </span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-accent-light" />
              <span>Rahika Road, Madhubani</span>
            </span>
          </div>

          {/* Quick Contact & Timings */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="hidden lg:flex items-center gap-1 text-slate-200">
              <Clock className="w-3.5 h-3.5 text-secondary-light" />
              <span>Mon-Sat: 9:00 AM – 6:00 PM</span>
            </div>
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone}`}
              className="flex items-center gap-1.5 font-bold text-white hover:text-emerald-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-secondary-light" />
              <span>{HOSPITAL_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full border-b transition-all duration-200 ${
          isScrolled ? 'border-slate-200 shadow-soft py-2.5' : 'border-slate-100 py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4 lg:gap-8">
          {/* Hospital Logo & Brand */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none shrink-0 mr-4 lg:mr-8 xl:mr-12">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-primary via-primary-light to-[#482da5] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 opacity-30" />
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-white stroke-[2.2]" />
              <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-secondary border-2 border-white" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-primary leading-none">
                  TOPSUN
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1C2434] leading-none">
                  HOSPITAL
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-secondary tracking-wide uppercase mt-0.5">
                Advance Eye Care Centre
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2.5 xl:px-3 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 whitespace-nowrap ${
                    isActive
                      ? 'text-primary bg-primary-soft/80 font-bold'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                  }`
                }
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] xl:text-[10px] font-bold px-1.5 py-0.2 rounded-full ${item.badgeClass}`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Action Desktop Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${HOSPITAL_INFO.primaryPhone}`}
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-primary px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>{HOSPITAL_INFO.primaryPhone}</span>
            </a>

            <Link
              to="/contact#appointment"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary hover:bg-primary-light text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all duration-150 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-secondary-light" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl animate-fade-in space-y-2">
            <div className="py-2 px-3 rounded-xl bg-primary-soft flex items-center justify-between mb-2">
              <span className="font-hindi text-xs font-bold text-primary">
                {HOSPITAL_INFO.tagline}
              </span>
              <span className="text-[11px] font-bold text-secondary">
                Reg: {HOSPITAL_INFO.regNumber}
              </span>
            </div>

            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`
                }
              >
                <span>{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-secondary border border-secondary/20">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 text-primary font-bold text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {HOSPITAL_INFO.primaryPhone}</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

