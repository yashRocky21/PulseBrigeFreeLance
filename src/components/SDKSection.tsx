"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Custom SVG Icons
const HeartPulseIcon = ({ className }: { className?: string }) => (
  <svg width="52" height="52" viewBox="0 0 24 24" className={className}>
    <path fill="currentColor" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    <path d="M4 11h3l2-4 3 9 2-5h6" stroke="#f7f7f7" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LungsIcon = ({ className }: { className?: string }) => (
  <svg width="52" height="52" viewBox="0 0 24 24" className={className}>
    <path d="M12 2v5M12 7l-2 2M12 7l2 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path fill="currentColor" d="M10 10.5C7 9.5 4 11 4 15c0 4 3 6 5 6 2 0 3-4 3-7v-2c-1-1-2-1.5-2-1.5z" />
    <path fill="currentColor" d="M14 10.5c3-1 6 .5 6 4.5 0 4-3 6-5 6-2 0-3-4-3-7v-2c1-1 2-1.5 2-1.5z" />
    <circle cx="12" cy="15" r="2.5" fill="#f7f7f7" />
    <path d="M12 11v1.5M12 17.5V19M8 15h1.5M14.5 15H16M9 12l1 1M14 18l-1-1M15 12l-1 1M10 18l-1-1" stroke="#f7f7f7" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ThermometerIcon = ({ className }: { className?: string }) => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M9 14.5a5 5 0 1 0 6 0V5a3 3 0 0 0-6 0v9.5z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="17" r="2.5" fill="currentColor" />
    <path d="M12 17V8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="18" cy="4" r="2" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

const WavesIcon = ({ className }: { className?: string }) => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M2 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const BloodDropIcon = ({ className }: { className?: string }) => (
  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 21a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 10.1 5 12 5 14a7 7 0 0 0 7 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 14a4 4 0 0 0 1.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const sensors = [
  { icon: HeartPulseIcon,  label: "ECG & Heart Rate" },
  { icon: LungsIcon,       label: "Respiratory" },
  { icon: ThermometerIcon, label: "Temperature" },
  { icon: WavesIcon,       label: "SpO2" },
  { icon: BloodDropIcon,   label: "Blood pressure" },
];

export default function SDKSection() {
  return (
    <section id="medical-wearables" className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-[40px]">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-[26px] font-normal text-slate-900 mb-4 leading-snug">
            Software <span className="font-bold">Development</span> Kit
          </h2>

          {/* Blue underline divider */}
          <div
            className="mx-auto mb-6"
            style={{ width: "80px", height: "3px", backgroundColor: "#1279be", borderRadius: "2px" }}
          />

          <p className="text-slate-800 text-[13px] md:text-[14px] max-w-4xl mx-auto leading-relaxed font-medium mb-4">
            Partners interested in the Biometrics Data Platform can integrate their clinical application using the Software Development Kit. Components of the Kit include a suite of medical-grade wearable sensors, mobile patient app, and cloud data services.
          </p>
          <p className="text-slate-800 text-[13px] md:text-[14px] max-w-4xl mx-auto leading-relaxed font-medium">
            Contact us to get started with our SDK and be up and running in as little as 14 days.
          </p>
        </motion.div>

        {/* 5 sensor icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 mb-16">
          {sensors.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center gap-4 w-full md:w-1/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <s.icon className="text-[#7bc145]" />
              <span className="text-slate-900 text-[14px] font-bold text-center">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* READ MORE Button */}
        <div className="flex justify-center">
          <motion.span
            className="inline-block text-white text-[12px] font-bold uppercase tracking-widest py-2.5 px-5 rounded-full transition-colors duration-200 "
            style={{ backgroundColor: "#7BC145", fontSize: "0.6998rem" }}
            whileHover={{ backgroundColor: "#0872BA" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
            >
              READ MORE
            </Link>
          </motion.span>
        </div>

      </div>
    </section>
  );
}
