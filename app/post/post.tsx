"use client";
import React, { useState } from "react";
import { Theme } from "@/components/Theme";
import { LuBug, LuSend, LuShieldCheck } from "react-icons/lu";

export default function BugVaultForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleBugSubmission(formData: FormData) {
    setIsSubmitting(true);
    
    // Simulate server processing payload
    const bugData = {
      title: formData.get("title"),
      severity: formData.get("severity"),
      component: formData.get("component"),
      description: formData.get("description"),
      submittedAt: new Date().toISOString(),
    };

    console.log("Bug Vault Payload:", bugData);

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating network request
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  return (
    <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center p-6 relative">
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative z-10 w-full max-w-2xl p-8 md:p-10 rounded-3xl border border-neutral-800 bg-neutral-950/90 shadow-2xl backdrop-blur-md">
        
        {/* Header Branding */}
        <div className="text-center mb-8">
          <div 
            className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg"
            style={{ backgroundColor: `${Theme.primary}33`, color: Theme.secondary }}
          >
            <LuBug size={24} />
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white">
            Bug <span style={{ color: Theme.secondary }}>Vault</span>
          </h1>
          <p className="text-neutral-400 text-sm mt-2">
            Log application issues, track performance anomalies, or submit error reports.
          </p>
        </div>

        {/* Success Banner */}
        {isSuccess && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-sm text-center flex items-center justify-center gap-2">
            <span>Bug report successfully submitted to the Bug Vault!</span>
            <button 
              onClick={() => setIsSuccess(false)}
              className="ml-2 text-xs underline text-emerald-400 hover:text-white"
            >
              Submit another
            </button>
          </div>
        )}

        {/* Bug Form */}
        <form action={handleBugSubmission} className="space-y-5">
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* Bug Title */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Issue Title / Summary
              </label>
              <input 
                type="text" 
                name="title" 
                required
                placeholder="e.g., Null pointer in Auth callback" 
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
              />
            </div>

            {/* Severity Level */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
                Severity Level
              </label>
              <select 
                name="severity" 
                required
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
              >
                <option value="">Select severity...</option>
                <option value="low">Low (Minor UI glitch)</option>
                <option value="medium">Medium (Non-blocking bug)</option>
                <option value="high">High (Feature breakdown)</option>
                <option value="critical">Critical (System crash)</option>
              </select>
            </div>
          </div>

          {/* Affected Component */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Affected Component / Module
            </label>
            <input 
              type="text" 
              name="component" 
              required
              placeholder="e.g., /api/auth/signin or Payment Gateway" 
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition"
            />
          </div>

          {/* Description / Steps */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-2">
              Description & Reproduction Steps
            </label>
            <textarea 
              name="description" 
              rows={4} 
              required
              placeholder="Describe what went wrong, error logs, or steps to reproduce..." 
              className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm focus:outline-none focus:border-neutral-600 transition resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            disabled={isSubmitting}
            style={{ backgroundColor: Theme.primary }}
            className="w-full text-white font-semibold py-4 px-6 rounded-xl text-sm transition hover:opacity-90 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? "Logging Bug..." : "Publish Bug Ticket"} <LuSend size={16} />
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 pt-6 border-t border-neutral-900 flex items-center justify-center gap-2 text-xs text-neutral-500">
          <LuShieldCheck size={14} style={{ color: Theme.secondary }} />
          <span>All issue logs are securely encrypted and tracked</span>
        </div>

      </div>
    </main>
  );
}