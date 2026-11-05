import { Theme } from "@/components/Theme";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LuLock, LuMail, LuArrowRight, LuShieldCheck } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { auth, signIn } from "@/auth";

// ================= SERVER ACTIONS =================

// async function handleEmailSignIn(formData: FormData) {
//   "use server";

//   const email = formData.get("email") as string;
//   const password = formData.get("password") as string;

//   // TODO: Implement your backend authentication check here 
//   console.log("Server Action - Email Sign In:", { email, password });
  
//   // Redirect upon successful authentication
//   redirect("/");
// }

// ================= PAGE COMPONENT =================
export default async function SignInPage() {
  // Check if a user session already exists on the server
  const session = await auth();
  console.log("Current Session:", session);

  // If already signed in, automatically leave the sign-in page
  if (session) {
    redirect("/");
  }

  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center relative">
      {/* Dark overlay matching your theme */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 w-full max-w-md mx-4 p-8 rounded-3xl border border-neutral-800 bg-neutral-950/90 shadow-2xl text-white backdrop-blur-md">
        
        {/* Header Branding */}
        <div className="text-center mb-8">
          <span 
            className="text-xs font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full inline-block border mb-4"
            style={{ borderColor: Theme.primary, color: Theme.secondary, backgroundColor: `${Theme.primary}33` }}
          >
            Bug Vault
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
            Welcome <span style={{ color: Theme.secondary }}>Back!</span>
          </h1>
          <p className="text-neutral-400 text-sm mt-2">
            Log in to manage and track your application logs.
          </p>
        </div>

        {/* OAuth Buttons Container */}
        <div className="flex flex-col gap-3 mb-6">
          
          {/* ================= GOOGLE SIGN IN BUTTON ================= */}
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 transition text-white shadow-sm"
            >
              <FcGoogle size={20} />
              <span>Continue with Google</span>
            </button>
          </form>

          {/* ================= GITHUB SIGN IN BUTTON ================= */}
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl text-sm font-semibold bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 transition text-white shadow-sm"
            >
              <FaGithub size={20} />
              <span>Continue with GitHub</span>
            </button>
          </form>

        </div>

        {/* Divider */}
        <div className="relative flex py-2 items-center mb-6">
          <div className="flex-grow border-t border-neutral-800"></div>
          <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-neutral-500">Or with email</span>
          <div className="flex-grow border-t border-neutral-800"></div>
        </div>

        {/* ================= EMAIL & PASSWORD FORM ================= */}
        <form className="space-y-4">
          
          {/* Email Field */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-500 pointer-events-none">
                <LuMail size={18} />
              </span>
              <input 
                type="email" 
                name="email" 
                required
                placeholder="name@example.com" 
                className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                Password
              </label>
              <Link 
                href="#" 
                className="text-xs hover:underline"
                style={{ color: Theme.secondary }}
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-neutral-500 pointer-events-none">
                <LuLock size={18} />
              </span>
              <input 
                type="password" 
                name="password" 
                required
                placeholder="••••••••" 
                className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            style={{ backgroundColor: Theme.primary }}
            className="w-full text-white font-semibold py-3.5 px-4 rounded-xl text-sm transition hover:opacity-90 shadow-lg flex items-center justify-center gap-2 mt-2"
          >
            Sign In <LuArrowRight size={16} />
          </button>
        </form>

        {/* Security badge note */}
        <div className="mt-6 pt-6 border-t border-neutral-900 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <LuShieldCheck size={14} style={{ color: Theme.secondary }} />
          <span>Secured server authentication</span>
        </div>

        {/* Footer Link to Sign Up */}
        <p className="text-center text-sm text-neutral-400 mt-6">
          Don't have an account yet?{" "}
          <Link 
            href="/signup" 
            className="font-semibold hover:underline"
            style={{ color: Theme.secondary }}
          >
            Get Started
          </Link>
        </p>

      </div>
    </main>
  );
}