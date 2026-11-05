// app/about/page.tsx
import { Theme } from "@/components/Theme";
import Link from "next/link";
import { LuArrowRight, LuShieldCheck, LuCpu, LuUsers, LuDatabase } from "react-icons/lu";

export default function About() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black/80 min-h-dvh text-white">
        
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-4xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <span 
            className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border"
            style={{ borderColor: Theme.primary, color: Theme.secondary, backgroundColor: `${Theme.primary}33` }}
          >
             About Bug Vault
          </span>
          
          <h1 className="font-extrabold text-4xl md:text-6xl uppercase tracking-tight mb-6 leading-tight">
            Engineering Smarter <span style={{ color: Theme.secondary }}>Bug Resolution.</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light max-w-2xl mb-10 text-neutral-300">
            Bug Vault is designed to eliminate repetitive debugging cycles by serving as an intelligent triage engine and historical solution repository for development teams.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              href={"/"} 
              style={{ backgroundColor: Theme.primary }} 
              className="text-white font-semibold px-8 py-4 text-lg rounded-full w-full sm:w-auto text-center transition hover:opacity-90 shadow-lg"
            >
              Back to Dashboard
            </Link>
          </div>
        </section>

        {/* ================= MISSION & VISION ================= */}
        <section className="bg-neutral-950/90 py-20 border-t border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-neutral-400 leading-relaxed mb-6">
                Every minute spent tracking down duplicate issues or searching through scattered logs is time taken away from building core features. Bug Vault bridges the gap between issue reporting and historical code fixes.
              </p>
              <p className="text-neutral-400 leading-relaxed">
                By automatically routing tickets to the right engineers and indexing past error resolutions, we help engineering teams maintain high velocity and rock-solid software reliability.
              </p>
            </div>
            <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-800 space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${Theme.primary}33`, color: Theme.secondary }}>
                  <LuCpu size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Automated Triage</h3>
                  <p className="text-sm text-neutral-400">Instantly filters noise and flags critical issues before they escalate.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: `${Theme.primary}33`, color: Theme.secondary }}>
                  <LuDatabase size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Historical Repository</h3>
                  <p className="text-sm text-neutral-400">Stores verified root-cause patches and code traces for quick retrieval.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="py-16 text-center border-t border-neutral-800 bg-black">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Workflow?</h2>
            <p className="text-neutral-400 mb-8">Start managing your team's tickets with intelligent precision.</p>
            <Link 
              href={"/"} 
              style={{ backgroundColor: Theme.primary }} 
              className="inline-block text-white font-semibold px-10 py-4 text-lg rounded-full transition hover:opacity-95 shadow-lg"
            >
              Open Bug Vault
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}