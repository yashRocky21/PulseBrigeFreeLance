"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { 
      name: "Digital Healthcare", 
      to: "digital-healthcare",
      subItems: [
        { name: "Hospital-at-Home", to: "hospital-at-home" },
        { name: "Ambulatory Cardiac Monitoring", to: "ambulatory-cardiac-monitoring" }
      ]
    },
    { 
      name: "Clinical Trials", 
      to: "clinical-trials",
      subItems: [
        { name: "Cardiology", to: "cardiology" },
        { name: "Oncology", to: "oncology" },
        { name: "Pulmonary Hypertension", to: "pulmonary-hypertension" },
        { name: "Neurology", to: "neurology" },
        { name: "Respiratory", to: "respiratory" }
      ]
    },
    { 
      name: "RPM Platform", 
      to: "rpm-platform",
      subItems: [
        { name: "Biometrics Data Platform", to: "biometrics-data-platform" },
        { name: "Arrhythmia Detection", to: "arrhythmia-detection" }
      ]
    },
    { 
      name: "Medical Wearables", 
      to: "medical-wearables",
      subItems: [
        { name: "Wearable ECG Monitor", to: "wearable-ecg-monitor" },
        { name: "Wearable Temperature Monitor", to: "wearable-temperature-monitor" },
        { name: "Wearable SpO2 Monitor", to: "wearable-spo2-monitor" },
        { name: "Wearable BP Cuff", to: "wearable-bp-cuff" },
        { name: "More Sensors", to: "more-sensors" }
      ]
    },
    { 
      name: "Company", 
      to: "company",
      subItems: [
        { name: "About Us", to: "about-us" },
        { name: "Press", to: "press" },
        { name: "Contact", to: "contact" }
      ]
    },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      {/* Top Blue Bar */}
      <div className="bg-[#1279be] text-white py-4 px-6 md:px-[60px] flex justify-between items-center font-light">
        <div className="text-[13px] tracking-wide font-normal">
          <span>Call Us: +91-40 23420049</span>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center space-x-[18px]">
            <a href="#" className="hover:text-gray-200 transition-colors"><FaFacebookF size={12} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><FaTwitter size={12} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><FaLinkedinIn size={12} /></a>
            <a href="#" className="hover:text-gray-200 transition-colors"><FaInstagram size={13} /></a>
          </div>
          <button className="hover:text-gray-200 transition-colors md:ml-[18px]"><Search size={14} strokeWidth={1.5} /></button>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white py-1 md:py-1.5">
        <div className="w-full px-6 md:px-[60px] flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer shrink-0">
            <Link to="home" smooth={true} duration={500}>
              <Image
                src="/images/PULSEBRIDGE-LOGO_PNG-1.png"
                alt="PulseBridge Logo"
                width={105}
                height={35}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group cursor-pointer flex items-center text-[13px] font-medium text-slate-900 hover:text-[#1279be] transition-colors">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-130}
                  className="py-2"
                >
                  {link.name}
                </Link>
                <ChevronDown size={12} className="ml-1 text-slate-400 group-hover:text-[#1279be] transition-colors" strokeWidth={1.5} />
                
                {/* Dropdown Menu */}
                {link.subItems && (
                  <div className="absolute top-[100%] left-0 w-60 bg-[#f4f4f4] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border-t-2 border-[#1279be]">
                    <div className="py-2">
                      {link.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.to}
                          smooth={true}
                          duration={500}
                          offset={-130}
                          className="block px-6 py-3 text-[13px] font-normal text-slate-700 hover:text-[#1279be] hover:bg-slate-100 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-800 hover:text-[#1279be] transition-colors focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl py-6 flex flex-col space-y-4 px-6 border-t border-gray-100">
            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center justify-between border-b border-gray-50 pb-3">
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-130}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-slate-800 hover:text-[#1279be] transition-colors cursor-pointer w-full"
                >
                  {link.name}
                </Link>
                <ChevronDown size={20} className="text-slate-400" />
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
