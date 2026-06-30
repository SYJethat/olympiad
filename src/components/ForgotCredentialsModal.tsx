"use client";

import { useState } from "react";
import { X, ShieldAlert, KeyRound, Smartphone } from "lucide-react";

interface ForgotCredentialsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ForgotCredentialsModal({ isOpen, onClose }: ForgotCredentialsModalProps) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ username: string; password: string } | null>(null);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setError("Please enter a valid 10-digit registered phone number.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    // Simulate API database lookup
    setTimeout(() => {
      setLoading(false);
      // Hardcoded mock check
      if (phone === "9177771149" || phone.endsWith("1149") || phone.length === 10) {
        const lastFour = phone.slice(-4);
        setResult({
          username: `so_student_${lastFour}`,
          password: `pass_${lastFour}`,
        });
      } else {
        setError("Phone number not registered. Please try with 9177771149.");
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 p-6 shadow-2xl border border-primary/20 text-foreground animate-float">
        
        {/* Close trigger */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 hover:bg-primary/10 text-primary dark:text-secondary-light hover:text-primary transition-colors border border-primary/20"
          aria-label="Close credentials popup"
        >
          <X className="h-4.5 w-4.5" />
        </button>

        <div className="text-center mt-2">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary dark:text-secondary-light mb-4">
            <KeyRound className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold font-display text-primary dark:text-secondary-light">
            Recover Credentials
          </h3>
          <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
            Enter your 10-digit registered mobile number below. We will lookup your Sanskrit Olympiad portal credentials.
          </p>
        </div>

        {!result ? (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="phone" className="sr-only">Mobile Number</label>
              <div className="relative rounded-lg shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-foreground/40">
                  <span className="text-xs font-semibold font-mono">+91</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  placeholder="Enter 10-digit Mobile No."
                  className="block w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-background/50 pl-12 pr-3 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 text-foreground font-mono transition-all"
                  disabled={loading}
                />
              </div>
              {error && (
                <p className="mt-2 text-[10px] text-red-500 font-semibold">{error}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center rounded-xl bg-gradient-to-r from-primary to-primary-light dark:from-secondary dark:to-secondary-light text-white dark:text-zinc-950 py-3 px-4 text-xs font-extrabold shadow-md hover:scale-[1.01] transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Looking up credentials...
                </>
              ) : (
                "Search Credentials"
              )}
            </button>
          </form>
        ) : (
          <div className="mt-6 space-y-4 text-center">
            <div className="rounded-xl bg-primary/5 dark:bg-secondary/5 border border-primary/20 dark:border-secondary/20 p-4 text-left space-y-2">
              <div className="flex justify-between items-center text-xs border-b border-primary/10 dark:border-secondary/10 pb-2">
                <span className="text-foreground/60 font-semibold">Portal Username:</span>
                <span className="font-mono text-primary dark:text-secondary-light font-bold">{result.username}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-foreground/60 font-semibold">Portal Password:</span>
                <span className="font-mono text-primary dark:text-secondary-light font-bold">{result.password}</span>
              </div>
            </div>
            <p className="text-[10px] text-foreground/50">
              Please copy these credentials and proceed to the portal login screen.
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setResult(null)}
                className="flex-1 rounded-xl border border-zinc-200 dark:border-zinc-800 py-2.5 text-[10px] font-bold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all text-foreground"
              >
                Reset Search
              </button>
              <button
                onClick={onClose}
                className="flex-1 rounded-xl bg-primary dark:bg-secondary text-white dark:text-zinc-950 py-2.5 text-[10px] font-bold hover:opacity-90 transition-all cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
