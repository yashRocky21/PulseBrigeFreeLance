"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full"
      style={{
        backgroundImage: "url('/images/data-monitoring-center-stockcake.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        /*
          minHeight: clamp(560px, 56vw, 700px)
          56vw matches the image's natural 728×408 aspect ratio (408/728 = 56%).
          560px floor ensures content clears the navbar at tablet widths.
        */
        minHeight: "clamp(560px, 56vw, 700px)",
      }}
    >

      {/* ─── MOBILE ONLY overlay: solid blue ─────────────── < 768px */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: "rgba(8, 114, 186, 0.80)" }}
      />

      {/* ═══════════════════════════════════════════════════════════
          MOBILE  ( < 768px )
          Full blue overlay · centered text · stacked buttons
      ═══════════════════════════════════════════════════════════ */}
      <motion.div
        className="md:hidden relative z-10 flex flex-col items-center text-center px-6"
        style={{ paddingTop: "220px", paddingBottom: "60px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-normal text-white leading-snug mb-6">
          AI Driven Continuous{" "}
          <strong className="font-bold">Remote</strong>{" "}
          Patient Monitoring
        </h1>
        <div className="w-14 h-[2px] mb-5" style={{ backgroundColor: "#c8a84b" }} />
        <p className="text-white/90 text-sm leading-relaxed mb-10 max-w-md">
          Enabling Remote Data Collection and Analysis for Clinical Trials and Virtual Healthcare
        </p>
        <div className="flex flex-col items-center gap-5 w-full max-w-xs">
          <a href="/digital-healthcare" className="w-full text-center bg-white text-slate-800 hover:bg-slate-100 text-sm font-medium py-3 rounded-full transition-colors duration-200">
            Read More
          </a>
          <a href="/book-your-demo" className="w-full text-center bg-white text-slate-800 hover:bg-slate-100 text-sm font-medium py-3 rounded-full transition-colors duration-200">
            Book A Demo
          </a>
        </div>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════
          TABLET + DESKTOP  ( ≥ 768px )
          Two-column: transparent left · blue gradient right
          items-center + min-height 560px ensures content
          always clears the navbar naturally without hardcoded offsets.
      ═══════════════════════════════════════════════════════════ */}
      <div
        className="hidden md:flex w-full"
        style={{ minHeight: "inherit" }}
      >
        {/* Left col — transparent, background image shows through */}
        <div className="flex-[0_0_52%]" />

        {/* Right col — blue gradient overlay with content */}
        <motion.div
          className="flex-[0_0_48%] flex items-center px-8 md:px-10 xl:px-16"
          style={{
            background:
              "linear-gradient(110deg, rgba(8,114,186,0.76) 59%, rgba(53,161,212,0.76) 100%)",
            paddingTop: "clamp(120px, 12vw, 160px)",
            paddingBottom: "24px",
          }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full max-w-[440px]">
            <h1
              className="font-normal text-white leading-snug mb-5"
              style={{ fontSize: "clamp(18px, 2.4vw, 30px)" }}
            >
              AI Driven Continuous{" "}
              <strong className="font-bold">Remote</strong>{" "}
              Patient Monitoring
            </h1>

            <div className="w-14 h-[2px] mb-5" style={{ backgroundColor: "#c8a84b" }} />

            <p
              className="text-white/90 leading-relaxed mb-8"
              style={{ fontSize: "clamp(12px, 1.2vw, 14px)" }}
            >
              Enabling Remote Data Collection and Analysis for Clinical Trials and Virtual Healthcare
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/digital-healthcare"
                className="inline-block bg-white text-slate-800 hover:bg-slate-100 font-medium rounded-full transition-colors duration-200"
                style={{ fontSize: "clamp(12px, 1.1vw, 14px)", padding: "10px 28px" }}
              >
                Read More
              </a>
              <a
                href="/book-your-demo"
                className="inline-block bg-white text-slate-800 hover:bg-slate-100 font-medium rounded-full transition-colors duration-200"
                style={{ fontSize: "clamp(12px, 1.1vw, 14px)", padding: "10px 28px" }}
              >
                Book A Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
