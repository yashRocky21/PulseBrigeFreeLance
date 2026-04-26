"use client";

import Image from "next/image";

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[40px]">
        {/* Top 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1: Logo & About */}
          <div>
            <div className="mb-6">
              {/* Assuming the logo path, fallback to text if not available */}
              <Image
                src="/images/PULSEBRIDGE-LOGO_PNG-1.png"
                alt="PulseBridge Logo"
                width={160}
                height={55}
                className="object-contain"
              />
            </div>
            <p className="text-[#a3a3a3] text-[13px] leading-relaxed pr-4">
              PulseBridge is a provider of digital healthcare solutions for remote patient monitoring in healthcare and clinical trials.
            </p>
          </div>

          {/* Column 2: Main Office */}
          <div>
            <h3 className="text-[14px] font-bold text-white mb-6">Main Office</h3>
            <div className="text-[#a3a3a3] text-[13px] leading-relaxed space-y-1">
              <p className="font-bold mb-2">Hyderabad:</p>
              <p>Unit No. 203, 2nd Floor, Suite# 648,</p>
              <p>SBR CV Towers, Sector-1, Sy No. 64,</p>
              <p>HUDA Techno Enclave, Madhapur,</p>
              <p>Hyderabad - 500081.</p>
            </div>
          </div>

          {/* Column 3: Global Offices */}
          <div>
            <h3 className="text-[14px] font-bold text-white mb-6">Global Offices</h3>
            <div className="text-[#a3a3a3] text-[13px] leading-relaxed space-y-4">
              <div>
                <p className="font-bold mb-1">Australia:</p>
                <p>134 Carter Street</p>
                <p>Golden point, Victoria 3350</p>
                <p>Australia.</p>
              </div>
              <div>
                <p className="font-bold mb-1">Canada:</p>
                <p>92 Bartley Drive,</p>
                <p>North York, Ontario,</p>
                <p>Canada, M4A 0A9</p>
              </div>
              <div>
                <p className="font-bold mb-1">UK:</p>
                <p>2 60 Grosvenor St.,</p>
                <p>Cheltenham GL52 2SG, UK.</p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h3 className="text-[14px] font-bold mb-6">Contact Us</h3>
            <div className="text-[#a3a3a3] text-[13px] leading-relaxed space-y-3">
              <p>
                <a href="mailto:info@pulsebridgehealthcare.com" className="hover:text-white transition-colors">
                  info@pulsebridgehealthcare.com
                </a>
              </p>
              <p>+91-40 23420049</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="border-t border-white/10 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <p className="text-[#a3a3a3] text-[12px]">
            © 2024 PulseBridge Health Care. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-sm transition-colors text-white">
              <FacebookIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-sm transition-colors text-white">
              <TwitterIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-sm transition-colors text-white">
              <LinkedinIcon size={14} />
            </a>
            <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-sm transition-colors text-white">
              <InstagramIcon size={14} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
