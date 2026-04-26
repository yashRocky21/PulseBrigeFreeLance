import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      <section id="digital-healthcare" className="min-h-screen flex items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-300">Digital Healthcare (Coming Soon)</h2>
      </section>

      <section id="clinical-trials" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-300">Clinical Trials (Coming Soon)</h2>
      </section>

      <section id="rpm-platform" className="min-h-screen flex items-center justify-center bg-slate-50">
        <h2 className="text-3xl font-bold text-slate-300">RPM Platform (Coming Soon)</h2>
      </section>

      <section id="company" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold text-slate-300">Company (Coming Soon)</h2>
      </section>

      <section id="contact" className="min-h-[50vh] flex items-center justify-center bg-slate-900">
        <h2 className="text-3xl font-bold text-slate-600">Contact / Footer (Coming Soon)</h2>
      </section>
    </main>
  );
}
