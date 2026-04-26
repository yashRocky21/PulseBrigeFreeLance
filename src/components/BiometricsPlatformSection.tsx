"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const areas = [
  {
    title: "Cardiology",
    desc: "Detect early AF transformation by capturing continuous ECG rhythm from patients in remote and ambulatory settings.",
  },
  {
    title: "Oncology",
    desc: "Detect neutropenic events following chemotherapy by correlating multiple human vitals in discharged patients.",
  },
  {
    title: "Neurology",
    desc: "Conduct safety assessments of a neurological therapy by monitoring body temperature over extended periods of time.",
  },
  {
    title: "Hypertension",
    desc: "Assess pulmonary hypertension therapy efficacy by monitoring heart rate before, during, and after a six-minute walk test.",
  },
];

export default function BiometricsPlatformSection() {
  return (
    <section id="rpm-platform" className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-[40px]">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl md:text-[26px] font-normal text-slate-900 mb-4 leading-snug">
            Advanced <span className="font-bold">Biometrics</span> Platform for Data Collection and Analysis
          </h2>

          {/* Blue underline divider */}
          <div
            className="mx-auto mb-6"
            style={{ width: "100px", height: "2px", backgroundColor: "#1279be", borderRadius: "2px" }}
          />

          <p className="text-slate-900 text-[13px] md:text-[14px] font-medium mb-1">
            PulseBridge Health Care
          </p>
          <p className="text-slate-700 text-[13px] md:text-[14px] max-w-4xl mx-auto leading-relaxed">
            Biometrics Data Platform provides a unified solution to streamline the development and deployment of digital healthcare applications. The platform supports various use cases, including mobile cardiac telemetry, monitoring of neutropenic fever, COPD management, and more.
          </p>
        </motion.div>

        {/* 5-column layout */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8">
          
          {/* Column 1: Image */}
          <motion.div
            className="w-full md:w-[22%] flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-56 md:w-full aspect-square bg-gradient-to-b from-[#7BC145] to-[#0872BA] flex items-center justify-center shadow-xl overflow-hidden p-4">
              <Image
                src="/images/vivalink-connection.png"
                alt="Biometrics Platform"
                width={250}
                height={250}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Columns 2-5: Text Content */}
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              className="w-full md:flex-1 text-center flex flex-col items-center pt-2 md:pt-4"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="font-bold text-slate-900 text-[16px] md:text-[18px] mb-3">{area.title}</h3>
              <p className="text-slate-600 text-[12px] md:text-[13px] leading-relaxed px-2 md:px-0">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
