"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { LuLogOut, LuUser, LuMail, LuArrowLeft } from "react-icons/lu";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  // Handle loading state
  if (status === "loading") {
    return (
      <main className="min-h-dvh bg-black text-white flex items-center justify-center">
        <p className="text-neutral-400 text-sm animate-pulse">Loading profile...</p>
      </main>
    );
  }

  // Handle unauthenticated state (extra safeguard)
  if (!session) {
    return (
      <main className="min-h-dvh bg-black text-white flex flex-col items-center justify-center p-6">
        <div className="text-center space-y-4">
          <p className="text-neutral-400 text-sm">You are not signed in.</p>
          <Link 
            href="/signin" 
            className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl text-sm transition"
          >
            Go to Sign In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-dvh bg-black text-white p-6 flex items-center justify-center relative">
      <div className="w-full max-w-md p-8 bg-neutral-950 rounded-3xl border border-neutral-800 shadow-2xl backdrop-blur-md">
        
        {/* Back to Home Link */}
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition">
            <LuArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Profile Header / Avatar */}
        <div className="flex flex-col items-center text-center pb-6 border-b border-neutral-800">
          {session.user?.image ? (
            <img 
              src={session.user.image} 
              alt={session.user?.name || "User profile"} 
              className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500/50 shadow-lg mb-4" 
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-neutral-900 border-2 border-neutral-800 flex items-center justify-center text-neutral-400 mb-4">
              <LuUser size={32} />
            </div>
          )}

          <h1 className="text-xl font-bold tracking-tight">
            {session.user?.name || "Anonymous User"}
          </h1>
          <p className="text-xs text-neutral-400 mt-1 flex items-center gap-1.5">
            <LuMail size={12} />
            <span>{session.user?.email || "No email provided"}</span>
          </p>
        </div>

        {/* Account Details or Stats Section */}
        <div className="py-6 space-y-3 text-sm text-neutral-300">
          <div className="flex justify-between py-2 border-b border-neutral-900">
            <span className="text-neutral-500">Account Type</span>
            <span className="font-medium">OAuth Verified</span>
          </div>
          <div className="flex justify-between py-2 border-b border-neutral-900">
            <span className="text-neutral-500">Session Status</span>
            <span className="text-emerald-400 font-medium">Active</span>
          </div>
        </div>

        {/* Sign Out Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          className="w-full mt-2 py-3.5 px-4 rounded-xl font-semibold text-white bg-rose-600/20 border border-rose-600/30 hover:bg-rose-600 hover:border-rose-600 transition duration-200 flex items-center justify-center gap-2 text-sm shadow-lg group"
        >
          <LuLogOut size={16} className="text-rose-400 group-hover:text-white transition" />
          <span>Sign Out</span>
        </button>

      </div>
    </main>
  );
}