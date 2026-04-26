"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  "Integrated Clinician Portal",
  "Multi-Patient Monitoring",
  "Continuous and Episodic",
  "Real-Time ECG and Vitals",
  "Alerts, History and Trends",
];

const RPM_IMAGE = "/images/ECG.webp";

export default function HospitalComponent() {
  return (
    <section
      id="digital-healthcare"
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
            Hospital-at-Home | Advanced Acute Remote Patient Monitoring
          </h2>

          {/* Blue underline divider — matches original */}
          <div
            className="mx-auto mb-5"
            style={{
              width: "80px",
              height: "3px",
              backgroundColor: "#1279be",
              borderRadius: "2px",
            }}
          />

          <p className="text-slate-500 text-[13px] leading-relaxed max-w-2xl mx-auto">
            Continuity of acute patient care starts in the hospital and
            continues to the home. PulseBridge's integrated acute remote patient
            monitoring solution offers continuous and real-time monitoring of
            patient vitals, including live ECG, from virtually any location.
          </p>
        </motion.div>

        {/* ── Two columns ──────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14 mb-12">
          {/* Left: large image */}
          <motion.div
            className="w-full md:w-[52%] shrink-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={RPM_IMAGE}
              alt="Remote Patient Monitoring Dashboard"
              width={540}
              height={400}
              className="w-full h-auto object-contain rounded-sm"
              unoptimized={true}
            />
          </motion.div>

          {/* Right: feature checklist (green text) */}
          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <span
                  className="font-bold text-[15px] shrink-0"
                  style={{ color: "#7BC145" }}
                >
                  ✓
                </span>
                <span
                  className="text-[14px] font-medium"
                  style={{ color: "#7BC145" }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── READ MORE button ─────────────────────────────────── */}
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
