"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "MCT or Holter Modes",
  "Customizable ECG Reports",
  "Full Disclosure Views",
  "Live ECG Monitoring",
  "Events/Surveys",
];

export default function AmbulatoryComponent() {
  return (
    <section
      id="ambulatory-cardiac"
      className="py-14 md:py-20"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-[60px]">

        {/* ── Heading + blue underline ─────────────────────────── */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-[22px] font-bold text-slate-900 mb-3 leading-snug">
            Ambulatory Cardiac Monitoring
          </h2>

          {/* Blue underline divider */}
          <div
            className="mx-auto mb-5"
            style={{ width: "80px", height: "3px", backgroundColor: "#1279be", borderRadius: "2px" }}
          />

          <p className="text-slate-500 text-[13px] leading-relaxed max-w-2xl mx-auto">
            Integrated technology solution for Mobile Cardiac Telemetry and Holter services. Turnkey patient RPM kits, arrhythmia
            detection, ECG reports, clinician portal.
          </p>
        </motion.div>

        {/* ── Two columns: image LEFT · features RIGHT ─────────── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-12">

          {/* Left: large image */}
          <motion.div
            className="w-full md:w-[55%] shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/Cardiac-Monitoring-Transparent.png"
              alt="Ambulatory Cardiac Monitoring Device"
              width={560}
              height={420}
              className="w-full h-auto object-contain rounded-sm"
            />
          </motion.div>

          {/* Right: feature checklist */}
          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span className="font-bold text-[15px] shrink-0" style={{ color: "#7BC145" }}>
                  ✓
                </span>
                <span className="text-[14px] font-medium" style={{ color: "#7BC145" }}>
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── READ MORE button ─────────────────────────────────── */}
        <div className="flex justify-center">
          <motion.a
            href="/clinical-trials"
            className="inline-block text-white text-[12px] font-bold uppercase tracking-widest py-2.5 px-5 rounded-full transition-colors duration-200 "
           style={{ backgroundColor: "#7BC145" , fontSize:"0.6998rem" }} 
            whileHover={{ backgroundColor: "#0872BA" }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            READ MORE
          </motion.a>
        </div>

      </div>
    </section>
  );
}
