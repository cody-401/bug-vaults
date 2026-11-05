import { Theme } from "@/components/Theme";
import Link from "next/link";
import { LuArrowRight, LuBug, LuCpu, LuShieldCheck, LuQuote } from "react-icons/lu";
import Nav from "@/components/Nav"
export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black/80 min-h-dvh text-white">
        
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-5xl mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <span 
            className="text-sm font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 border"
            style={{ borderColor: Theme.primary, color: Theme.secondary, backgroundColor: `${Theme.primary}33` }}
          >
             Intelligent Bug Tracking & Solution Repository
          </span>
          
          <h1 className="font-extrabold text-4xl md:text-6xl uppercase tracking-tight mb-6 leading-tight">
            Hunt Bugs, <span style={{ color: Theme.secondary }}>Fix Faster!</span>
          </h1>
          
          <p className="text-lg md:text-2xl font-light max-w-3xl mb-10 text-neutral-300">
            Bug Vault connects engineering teams with historical error resolutions, automated triaging, and expert developer matches to eliminate repetitive debugging and slash downtime.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link 
              href={"#get-started"} 
              style={{ backgroundColor: Theme.primary }} 
              className="text-white font-semibold px-8 py-4 text-lg rounded-full w-full sm:w-auto text-center transition hover:opacity-90 shadow-lg"
            >
              Access Vault
            </Link>
            
            <Link 
              href={"#features"} 
              className="font-semibold px-8 py-4 text-lg rounded-full flex items-center justify-center gap-2 border border-neutral-600 hover:border-neutral-400 transition w-full sm:w-auto bg-black/40"
            >
              Explore Features <LuArrowRight />
            </Link>
          </div>
        </section>

        {/* ================= FEATURES SECTION ================= */}
        <section id="features" className="bg-neutral-900/90 py-20 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Bug Vault?</h2>
              <p className="text-neutral-400 max-w-xl mx-auto">Stop reinventing code fixes. Leverage automated triaging and verified historical solutions.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-black/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${Theme.primary}44`, color: Theme.secondary }}>
                  <LuBug size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Smart Intake & Triage</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Automatically filter noise, group duplicate bug reports, and classify issues by severity and priority instantly.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-black/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${Theme.primary}44`, color: Theme.secondary }}>
                  <LuCpu size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Developer Matching</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Route incoming bugs directly to the most qualified engineers based on past git commits and code contribution history.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-black/50 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: `${Theme.primary}44`, color: Theme.secondary }}>
                  <LuShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Verified Solution Vault</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Search through an archive of past code patches, root-cause analyses, and exception traces to resolve recurring errors in minutes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PREVIEW / TESTIMONIAL SNAPSHOT ================= */}
        <section className="py-20 px-4 max-w-4xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl border border-neutral-800 bg-neutral-950/60 relative overflow-hidden">
            <div className="absolute top-6 left-6 opacity-10" style={{ color: Theme.secondary }}>
              <LuQuote size={80} />
            </div>
            <p className="text-xl md:text-2xl font-light italic mb-6 relative z-10 text-neutral-200">
              "Using Bug Vault cut our mean time to resolution in half. Being able to search past exception traces and match tickets to the right developer instantly saved our launch cycle."
            </p>
            <h4 className="font-bold text-lg" style={{ color: Theme.secondary }}>Adebayo M.</h4>
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Lead DevOps Engineer, Lagos</span>
          </div>
        </section>

        {/* ================= FOOTER / CTA ================= */}
        <section id="get-started" className="py-16 text-center border-t border-neutral-800 bg-black">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Ready to Squash Bugs Smarter?</h2>
            <p className="text-neutral-400 mb-8">Join engineering teams streamlining their bug tracking and resolution workflows today.</p>
            <Link 
              href={"#"} 
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