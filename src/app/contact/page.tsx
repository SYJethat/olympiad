"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, Heart } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setSuccess(false);

    // Simulate sending email message
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      
      // Auto-hide success alert
      setTimeout(() => setSuccess(false), 4000);
    }, 1200);
  };

  const contactOptions = [
    { label: "Support Email", value: "support@smartexamhub.in", icon: <Mail className="h-5 w-5" /> },
    { label: "Phone Hotline", value: "+91-9177771149", icon: <Phone className="h-5 w-5" /> },
    { label: "Campus Address", value: "New Delhi Core Hub, India", icon: <MapPin className="h-5 w-5" /> },
  ];

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">Connect With Us</span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display">
          Contact Smart Exam Hub
        </h1>
        <p className="text-foreground/50 text-xs md:text-sm leading-relaxed">
          Have queries about categories, mock exam keys, or downloads? Fill out the contact ticket below and our support team will respond.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Details & Map Mock */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          
          <div className="space-y-4">
            {contactOptions.map((opt, idx) => (
              <div 
                key={idx}
                className="flex items-center space-x-4 p-5 rounded-2xl glass-panel border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  {opt.icon}
                </div>
                <div>
                  <div className="text-[10px] text-foreground/45 uppercase font-bold tracking-wider">{opt.label}</div>
                  <div className="text-sm font-semibold text-foreground/90 mt-0.5">{opt.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Mockup Grid */}
          <div className="flex-1 rounded-3xl overflow-hidden min-h-[220px] relative glass-panel p-2.5 border border-zinc-200/50 dark:border-zinc-800/50 bg-white/40 dark:bg-zinc-950/40 flex items-center justify-center text-center">
            <div className="space-y-2 p-6">
              <MapPin className="h-8 w-8 text-red-500 mx-auto animate-bounce" />
              <h4 className="font-extrabold text-sm">Interactive Core Campus Location</h4>
              <p className="text-[10px] text-foreground/50 max-w-xs leading-relaxed">
                Central Sanskrit University Area Hub, New Delhi, India. Google Maps rendering simulated on browser views.
              </p>
            </div>
            {/* Background grid representation */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-10" />
          </div>

        </div>

        {/* Right Side: Form Ticket */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 md:p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-extrabold text-xl font-display flex items-center space-x-2">
                <MessageSquare className="h-5.5 w-5.5 text-blue-600 dark:text-blue-400" />
                <span>Submit Support Ticket</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-foreground/60">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                      className="block w-full rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-background/50 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 text-foreground transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-foreground/60">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@smartexamhub.in"
                      className="block w-full rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-background/50 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 text-foreground transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-foreground/60">Message Query</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your question here..."
                    className="block w-full rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 bg-background/50 px-4 py-3 text-xs focus:outline-none focus:border-blue-500 text-foreground transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-md active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span>Submitting ticket...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message Ticket</span>
                    </>
                  )}
                </button>
              </form>

              {success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold leading-relaxed animate-fade-in text-center">
                  🚀 Support ticket submitted successfully! Our tutors will review your request.
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
