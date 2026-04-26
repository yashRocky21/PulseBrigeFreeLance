"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Remote Data Collection",
  "Vitals and Biometrics",
  "ePro/eCOA/Surveys",
  "Centralized Data Services",
  "Patient Adherence",
];

export default function DigitalSolutions() {
  return (
    <section
      id="clinical-trials"
      className="bg-white py-14 md:py-20"
    //   style={{ backgroundColor: "#f7f7f7" }}
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
            Innovative Digital Solutions for Clinical Trials
          </h2>

          {/* Blue underline divider */}
          <div
            className="mx-auto mb-5"
            style={{ width: "80px", height: "3px", backgroundColor: "#1279be", borderRadius: "2px" }}
          />

          <p className="text-slate-500 text-[13px] leading-relaxed max-w-2xl mx-auto">
            Turnkey remote data capture services for human vitals and biometrics in clinical trials.
            User friendly wearable sensors combined with centralized data management help ensure
            optimal data integrity and patient adherence.
          </p>
        </motion.div>

        {/* ── Two columns: features LEFT · image RIGHT ─────────── */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-14 mb-12">

          {/* Left: feature checklist */}
          <motion.div
            className="flex-1 flex flex-col justify-center gap-4"
            initial={{ opacity: 0, x: -30 }}
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

          {/* Right: large image */}
          <motion.div
            className="w-full md:w-[55%] shrink-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/Data-support-shutterstock_740740963.jpg"
              alt="Clinical Trials Data Support"
              width={560}
              height={420}
              className="w-full h-auto object-cover rounded-sm"
            />
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
