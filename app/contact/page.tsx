import { Theme } from "@/components/Theme";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LuMail, LuPhone, LuMapPin, LuSend, LuShieldCheck, LuArrowLeft, LuBug, LuLifeBuoy } from "react-icons/lu";

// ================= SERVER ACTION =================
// Handles contact form submission securely on the server
async function handleBugContactSubmission(formData: FormData) {
  "use server";

  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // TODO: Add your backend logic here 
  // (e.g., save to database, notify engineering leads via Discord/Slack webhook, etc.)
  console.log("Bug Vault Support Ticket received on server:", {
    fullName,
    email,
    subject,
    message,
  });

  // Redirect back with a success query parameter
  redirect("/contact?success=true");
}

// ================= PAGE COMPONENT =================
export default function BugVaultContactPage({
  searchParams,
}: {
  searchParams: { success?: string };
}) {
  const isSuccess = searchParams?.success === "true";

  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative text-white">
      {/* Dark overlay matching your theme */}
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 md:py-24">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition"
          >
            <LuArrowLeft size={16} /> Back to Dashboard
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full inline-block border mb-4"
            style={{ borderColor: Theme.primary, color: Theme.secondary, backgroundColor: `${Theme.primary}33` }}
          >
            Bug Vault Support
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-4">
            Need Help With A <span style={{ color: Theme.secondary }}>Bug Or Ticket?</span>
          </h1>
          <p className="text-neutral-300 text-sm md:text-base">
            Reach out to our platform administrators and engineering triage desk for immediate assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* ================= CONTACT INFO CARDS ================= */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" 
                style={{ backgroundColor: `${Theme.primary}33`, color: Theme.secondary }}
              >
                <LuMail size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">Support Email</h3>
                <p className="text-white font-medium text-sm">support@bugvault.io</p>
                <p className="text-white font-medium text-sm">security@bugvault.io</p>
              </div>
            </div>

            {/* Emergency Hotline Card */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" 
                style={{ backgroundColor: `${Theme.primary}33`, color: Theme.secondary }}
              >
                <LuPhone size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">Triage Hotline</h3>
                <p className="text-white font-medium text-sm">+234 (0) 800 BUG VAULT</p>
                <p className="text-white font-medium text-sm">+234 (0) 902 555 0192</p>
              </div>
            </div>

            {/* Operations Center Card */}
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-950/80 backdrop-blur-md flex items-start gap-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" 
                style={{ backgroundColor: `${Theme.primary}33`, color: Theme.secondary }}
              >
                <LuMapPin size={22} />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">Engineering HQ</h3>
                <p className="text-white font-medium text-sm">Lekki Phase 1, Lagos</p>
                <p className="text-neutral-400 text-xs mt-1">Nigeria</p>
              </div>
            </div>

          </div>

          {/* ================= CONTACT FORM ================= */}
          <div className="lg:col-span-2 p-8 md:p-10 rounded-3xl border border-neutral-800 bg-neutral-950/90 backdrop-blur-md shadow-2xl">
            
            {isSuccess && (
              <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-sm text-center">
                ✅ Ticket submitted successfully! Our engineering team will review your message shortly.
              </div>
            )}

            <form action={handleBugContactSubmission} className="space-y-5">
              
              <div className="grid md:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    name="fullName" 
                    required
                    placeholder="Adebayo Ogunlesi" 
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                    Work Email
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    placeholder="developer@company.com" 
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Issue Subject / Topic
                </label>
                <input 
                  type="text" 
                  name="subject" 
                  required
                  placeholder="e.g. Access Request / Critical Bug Triage Inquiry" 
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                  Message / Details
                </label>
                <textarea 
                  name="message" 
                  rows={5}
                  required
                  placeholder="Describe your issue, bug traceback, or collaboration request..." 
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                style={{ backgroundColor: Theme.primary }}
                className="w-full text-white font-semibold py-4 px-6 rounded-xl text-sm transition hover:opacity-90 shadow-lg flex items-center justify-center gap-2"
              >
                Send Support Ticket <LuSend size={16} />
              </button>
            </form>

            {/* Security note */}
            <div className="mt-6 pt-6 border-t border-neutral-900 flex items-center justify-center gap-2 text-xs text-neutral-500">
              <LuShieldCheck size={14} style={{ color: Theme.secondary }} />
              <span>All logs and telemetry data are encrypted and secure</span>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}