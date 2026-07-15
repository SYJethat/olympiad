"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  ChevronRight, 
  Home, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare
} from "lucide-react"

export default function Contact() {
  const [formName, setFormName] = useState("")
  const [formEmail, setFormEmail] = useState("")
  const [formPhone, setFormPhone] = useState("")
  const [formSubject, setFormSubject] = useState("general")
  const [formMessage, setFormMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      // Reset form
      setFormName("")
      setFormEmail("")
      setFormPhone("")
      setFormSubject("general")
      setFormMessage("")
    }, 1500)
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen font-sans">
      
      {/* Hero Banner */}
      <section className="w-full bg-mesh py-20 px-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex text-slate-500 text-xs font-bold items-center gap-1 mb-4">
            <a href="/" className="hover:text-[#0092BC] transition-colors">
              <Home className="h-4 w-4" />
            </a>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-400">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0092BC] tracking-tight">
            Contact Support & Helpdesk
          </h1>
          <p className="text-sm md:text-base text-[#0092BC]/80 mt-3 max-w-3xl leading-relaxed">
            Have questions about registration, APAR IDs, syllabus guidelines, or scores? Reach out to our university committee.
          </p>
        </div>
      </section>

      {/* Contact Grid layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Contact Information Cards */}
        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#007799]" />
            Get In Touch
          </h2>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            
            {/* Address detail */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-[#007799]/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-[#007799]" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">University Headquarters</h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  Central Sanskrit University<br />
                  56-57, Institutional Area, Janakpuri,<br />
                  New Delhi - 110058, India
                </p>
              </div>
            </div>

            {/* Helpline details */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                <Phone className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">Support Hotline</h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  +91-11-28524993, 28524995<br />
                  <span className="text-[10px] text-slate-400">Available: Mon - Fri (9:30 AM - 6:00 PM)</span>
                </p>
              </div>
            </div>

            {/* Email details */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0 border border-indigo-100">
                <Mail className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">Email Queries</h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  support@sanskritolympiad.in<br />
                  info@csu.co.in
                </p>
              </div>
            </div>

            {/* Working hours */}
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 border border-amber-100">
                <Clock className="h-5 w-5 text-amber-600" />
              </div>
              <div className="text-left space-y-1">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wide">Working Days</h4>
                <p className="text-xs text-slate-550 leading-relaxed font-semibold">
                  Monday to Friday<br />
                  Closed on Saturdays, Sundays, and Gazetted Holidays
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Contact Query Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider pb-2 border-b border-slate-100">
              Submit Inquiry Form
            </h3>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50/70 border border-emerald-150 rounded-2xl p-8 text-center space-y-4"
              >
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h4 className="text-sm font-black text-slate-800">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-slate-550 leading-relaxed max-w-md mx-auto font-semibold">
                  Thank you for contacting the Sanskrit Olympiad support helpdesk. We have recorded your submission and will get back to you within 24-48 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 bg-[#007799] hover:bg-[#005577] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md cursor-pointer transition-all uppercase tracking-wide"
                >
                  Send another inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g. Rama Kumar"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#007799]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g. rama@gmail.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#007799]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">
                      Contact Number
                    </label>
                    <input 
                      type="tel" 
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="e.g. +91 99999 88888"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#007799]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1.5">
                      Inquiry Category <span className="text-red-500">*</span>
                    </label>
                    <select 
                      value={formSubject}
                      onChange={(e) => setFormSubject(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-[#007799] cursor-pointer"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="registration">Portal Registration / APAR ID</option>
                      <option value="syllabus">Syllabus & Course Guideline</option>
                      <option value="technical">Technical Glitches / Tests</option>
                      <option value="partnership">Institutional Partnerships</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    required 
                    rows={5}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="Type details of your inquiry or problem here..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-[#007799] resize-none"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-[#007799] hover:bg-[#005577] disabled:bg-slate-300 text-white px-6 py-3.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 uppercase tracking-wide cursor-pointer disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  )
}