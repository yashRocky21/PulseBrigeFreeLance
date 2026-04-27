import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HospitalComponent from "@/components/HospitalComponent";
import DigitalSolutions from "@/components/DigitalSolutions";
import AmbulatoryComponent from "@/components/AmbulatoryComponent";
import BiometricsPlatformSection from "@/components/BiometricsPlatformSection";
import SDKSection from "@/components/SDKSection";
import Footer from "@/components/Footer";
import FullPageSwiper from "@/components/FullPageSwiper";

/* ── IMAGE PATHS ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <FullPageSwiper>
        {/* ── Phase 1: Hero ─────────────────────────────────────── */}
        <HeroSection />

        {/* ── Phase 2: Digital Healthcare — Hospital-at-Home ───── */}
        <HospitalComponent />

        {/* ── Phase 2: Clinical Trials ──────────────────────────── */}
        <DigitalSolutions />

        {/* ── Phase 2: Ambulatory Cardiac Monitoring ────────────── */}
        <AmbulatoryComponent />

        {/* ── Phase 2: Biometrics Platform (4-column grid) ──────── */}
        <BiometricsPlatformSection />

        {/* ── Phase 2: Software Development Kit ────────────────── */}
        <SDKSection />

        {/* ── Phase 3: Footer ────────────── */}
        <Footer />
      </FullPageSwiper>
    </main>
  );
}
