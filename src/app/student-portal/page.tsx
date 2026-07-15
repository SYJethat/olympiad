"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  User, 
  Mail, 
  Lock, 
  BookOpen, 
  Award, 
  Printer, 
  ChevronRight, 
  LogOut, 
  CheckCircle2, 
  Trophy, 
  AlertCircle,
  ShieldCheck,
  QrCode,
  Smartphone,
  BookMarked,
  FileSpreadsheet,
  CheckCircle,
  MessageCircle,
  MapPin,
  ArrowLeft,
  Calendar,
  Upload,
  UserCheck,
  Building,
  Heart,
  RefreshCw,
  Edit3,
  Save,
  HelpCircle,
  School
} from "lucide-react";

interface StudentUser {
  regId: string; // APAR ID
  fullName: string;
  email: string;
  className: string; // Class/Year of Study
  registeredAt: string;
  score: number;
  mobile: string;
  schoolName: string;
  fatherName: string;
  hearAbout: string;
  hearOther?: string;
}

function StudentPortalContent() {
  const searchParams = useSearchParams();
  const certificateRef = useRef<HTMLDivElement>(null);
  const marksheetRef = useRef<HTMLDivElement>(null);

  // Active view: 'login' | 'register' | 'dashboard'
  const [activeTab, setActiveTab] = useState<"login" | "register" | "dashboard">("login");
  
  // Dashboard view tab state: 'subjects' | 'scores' | 'certificate' | 'edit-profile'
  const [dashboardTab, setDashboardTab] = useState<"subjects" | "scores" | "certificate" | "edit-profile">("subjects");

  // Registration Form States
  const [regName, setRegName] = useState("");
  const [regSchool, setRegSchool] = useState("");
  const [regAparId, setRegAparId] = useState("");
  const [regFatherName, setRegFatherName] = useState("");
  const [regClassStudy, setRegClassStudy] = useState("Class 10");
  const [regHearAbout, setRegHearAbout] = useState("Social Media");
  const [regHearOther, setRegHearOther] = useState("");
  const [regMobile, setRegMobile] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  // Edit Profile Form States
  const [editName, setEditName] = useState("");
  const [editSchool, setEditSchool] = useState("");
  const [editFatherName, setEditFatherName] = useState("");
  const [editClassStudy, setEditClassStudy] = useState("");
  const [editHearAbout, setEditHearAbout] = useState("");
  const [editHearOther, setEditHearOther] = useState("");
  const [editMobile, setEditMobile] = useState("");

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Forgot Password / Credential Recovery state
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [recoveryPhone, setRecoveryPhone] = useState("");
  const [recoverySuccess, setRecoverySuccess] = useState<string | null>(null);

  // Error/Success state
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Logged-in user state
  const [currentUser, setCurrentUser] = useState<StudentUser | null>(null);



  // Read URL query params on mount
  useEffect(() => {
    const mode = searchParams?.get("mode");
    if (mode === "register") {
      setActiveTab("register");
    } else if (mode === "login") {
      setActiveTab("login");
    }

    // Check if user is already logged in
    const storedUser = localStorage.getItem("sanskrit_olympiad_user");
    if (storedUser) {
      try {
        const parsed: StudentUser = JSON.parse(storedUser);
        setCurrentUser(parsed);
        setActiveTab("dashboard");
      } catch (e) {
        localStorage.removeItem("sanskrit_olympiad_user");
      }
    }
  }, [searchParams]);

  // Initialize edit fields when current user state loads
  useEffect(() => {
    if (currentUser) {
      setEditName(currentUser.fullName || "");
      setEditMobile(currentUser.mobile || "");
      setEditSchool(currentUser.schoolName || "");
      setEditFatherName(currentUser.fatherName || "");
      setEditClassStudy(currentUser.className || "");
      setEditHearAbout(currentUser.hearAbout || "Social Media");
      setEditHearOther(currentUser.hearOther || "");
    }
  }, [currentUser]);

  // Reset Registration Form
  const handleResetForm = () => {
    setRegName("");
    setRegSchool("");
    setRegAparId("");
    setRegFatherName("");
    setRegClassStudy("Class 10");
    setRegHearAbout("Social Media");
    setRegHearOther("");
    setRegMobile("");
    setRegEmail("");
    setRegPassword("");
    setError(null);
    setSuccess(null);
  };

  // Cancel Registration
  const handleCancelRegistration = () => {
    handleResetForm();
    setActiveTab("login");
  };

  // Handle Registration Submit
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Validate Mandatory Fields
    if (
      !regName || 
      !regSchool || 
      !regAparId || 
      !regFatherName || 
      !regClassStudy || 
      !regHearAbout || 
      !regMobile || 
      !regEmail || 
      !regPassword
    ) {
      setError("Please fill in all mandatory fields marked with an asterisk (*).");
      return;
    }

    // Email validation format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(regEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Mobile Number validation (simple format check)
    const mobileRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!mobileRegex.test(regMobile)) {
      setError("Please enter a valid 10-15 digit Contact Number.");
      return;
    }

    if (regPassword.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check if user already exists
    const existingUsersRaw = localStorage.getItem("registered_students");
    const existingUsers: StudentUser[] = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];
    
    if (existingUsers.some(u => u.email.toLowerCase() === regEmail.toLowerCase())) {
      setError("Email already registered. Please login instead.");
      return;
    }

    const mockScore = Math.floor(75 + Math.random() * 24);

    const newUser: StudentUser = {
      regId: regAparId,
      fullName: regName,
      email: regEmail,
      className: regClassStudy,
      registeredAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      score: mockScore,
      mobile: regMobile,
      schoolName: regSchool,
      fatherName: regFatherName,
      hearAbout: regHearAbout,
      hearOther: regHearAbout === "Other" ? regHearOther : ""
    };

    // Save to database simulation
    existingUsers.push(newUser);
    localStorage.setItem("registered_students", JSON.stringify(existingUsers));
    localStorage.setItem(`pass_${regEmail.toLowerCase()}`, regPassword);
    localStorage.setItem("sanskrit_olympiad_user", JSON.stringify(newUser));

    setCurrentUser(newUser);
    setSuccess("Student registration completed successfully.");
    
    setTimeout(() => {
      setActiveTab("dashboard");
      setSuccess(null);
    }, 2000);
  };

  // Handle Profile Update Save
  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (
      !editName || 
      !editSchool || 
      !editFatherName || 
      !editClassStudy || 
      !editHearAbout || 
      !editMobile
    ) {
      setError("Please fill in all mandatory fields (*).");
      return;
    }

    const mobileRegex = /^\+?[0-9\s-]{10,15}$/;
    if (!mobileRegex.test(editMobile)) {
      setError("Please ensure Contact Number is in 10-15 digit format.");
      return;
    }

    if (!currentUser) return;

    // Build updated student object
    const updatedUser: StudentUser = {
      ...currentUser,
      fullName: editName,
      mobile: editMobile,
      schoolName: editSchool,
      fatherName: editFatherName,
      className: editClassStudy,
      hearAbout: editHearAbout,
      hearOther: editHearAbout === "Other" ? editHearOther : ""
    };

    // Update list of all registered students
    const existingUsersRaw = localStorage.getItem("registered_students");
    const existingUsers: StudentUser[] = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];
    
    const index = existingUsers.findIndex(u => u.regId === currentUser.regId);
    if (index !== -1) {
      existingUsers[index] = updatedUser;
    } else {
      existingUsers.push(updatedUser);
    }
    
    localStorage.setItem("registered_students", JSON.stringify(existingUsers));
    localStorage.setItem("sanskrit_olympiad_user", JSON.stringify(updatedUser));
    
    setCurrentUser(updatedUser);
    setSuccess("Profile details updated successfully.");
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!loginEmail || !loginPassword) {
      setError("Please enter both email and password.");
      return;
    }

    const existingUsersRaw = localStorage.getItem("registered_students");
    const existingUsers: StudentUser[] = existingUsersRaw ? JSON.parse(existingUsersRaw) : [];
    
    const user = existingUsers.find(u => u.email.toLowerCase() === loginEmail.toLowerCase());
    const storedPassword = localStorage.getItem(`pass_${loginEmail.toLowerCase()}`);

    if (loginEmail.toLowerCase() === "student@csu.edu" && loginPassword === "password") {
      const defaultUser: StudentUser = {
        regId: "APAR-884291",
        fullName: "Aditya Sharma",
        email: "student@csu.edu",
        className: "Class 10",
        registeredAt: "June 25, 2026",
        score: 92,
        mobile: "+91 91777 71149",
        schoolName: "CSU Campus School, New Delhi",
        fatherName: "Rajesh Sharma",
        hearAbout: "Website"
      };
      localStorage.setItem("sanskrit_olympiad_user", JSON.stringify(defaultUser));
      setCurrentUser(defaultUser);
      setSuccess("Logged in successfully!");
      setTimeout(() => {
        setActiveTab("dashboard");
        setSuccess(null);
      }, 1000);
      return;
    }

    if (!user || storedPassword !== loginPassword) {
      setError("Invalid email or password. Feel free to use student@csu.edu / password to test!");
      return;
    }

    localStorage.setItem("sanskrit_olympiad_user", JSON.stringify(user));
    setCurrentUser(user);
    setSuccess("Logged in successfully!");
    
    setTimeout(() => {
      setActiveTab("dashboard");
      setSuccess(null);
    }, 1000);
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("sanskrit_olympiad_user");
    setCurrentUser(null);
    setActiveTab("login");
  };

  // Handle Forgot credentials
  const handleRecoverySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recoveryPhone) {
      alert("Please enter your phone number.");
      return;
    }
    setRecoverySuccess(`A recovery SMS with your credentials has been sent to ${recoveryPhone}.`);
    setRecoveryPhone("");
    setTimeout(() => {
      setRecoverySuccess(null);
      setShowForgotModal(false);
    }, 3500);
  };

  // Print/Download Certificate
  const handlePrintCertificate = () => {
    const printContent = certificateRef.current?.outerHTML;
    if (!printContent) return;
    
    const style = document.createElement("style");
    style.id = "cert-print-style";
    style.innerHTML = `
      @media print {
        body > * {
          display: none !important;
        }
        #cert-print-wrapper {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw !important;
          height: 100vh !important;
          margin: 0 !important;
          padding: 0 !important;
          background-color: white !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        #cert-print-wrapper > div {
          width: 280mm !important;
          height: 196mm !important;
          min-width: 280mm !important;
          min-height: 196mm !important;
          border-[16px] border-double border-amber-600 !important;
          box-sizing: border-box !important;
          padding: 32px !important;
          margin: auto !important;
          background-color: white !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: space-between !important;
          position: relative !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          box-shadow: none !important;
        }
        #cert-print-wrapper * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
      @page {
        size: landscape;
        margin: 0;
      }
    `;

    const wrapper = document.createElement("div");
    wrapper.id = "cert-print-wrapper";
    wrapper.innerHTML = printContent;
    document.body.appendChild(wrapper);
    document.head.appendChild(style);

    window.print();
    
    document.body.removeChild(wrapper);
    document.head.removeChild(style);
  };

  // Print/Download Marksheet
  const handlePrintMarksheet = () => {
    const printContent = marksheetRef.current?.outerHTML;
    if (!printContent) return;
    
    const style = document.createElement("style");
    style.id = "marksheet-print-style";
    style.innerHTML = `
      @media print {
        body > * {
          display: none !important;
        }
        #marksheet-print-wrapper {
          display: block !important;
          position: absolute;
          left: 0;
          top: 0;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          background-color: white !important;
        }
        #marksheet-print-wrapper > div {
          width: 100% !important;
          box-sizing: border-box !important;
          padding: 24px !important;
          background-color: white !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        #marksheet-print-wrapper * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      }
      @page {
        size: portrait;
        margin: 20mm 15mm 20mm 15mm;
      }
    `;

    const wrapper = document.createElement("div");
    wrapper.id = "marksheet-print-wrapper";
    wrapper.innerHTML = printContent;
    document.body.appendChild(wrapper);
    document.head.appendChild(style);

    window.print();
    
    document.body.removeChild(wrapper);
    document.head.removeChild(style);
  };

  const getSubjectsForClass = (cls: string) => {
    return [
      { id: "sub-1", code: "SAN-101", name: "Sanskrit Grammar (व्याकरण)", hours: "40 Hrs", status: "Enrolled" },
      { id: "sub-2", code: "SAN-102", name: "Sanskrit Epic Literature (रामायण & महाभारत)", hours: "35 Hrs", status: "Enrolled" },
      { id: "sub-3", code: "BG-201", name: "Bhagavad Gita Shlokas & Recitation", hours: "30 Hrs", status: "Enrolled" },
      { id: "sub-4", code: "IKS-301", name: "Indian Knowledge Systems (IKS)", hours: "25 Hrs", status: "Enrolled" }
    ];
  };

  const getScoreCard = (overall: number) => {
    return [
      { subject: "Sanskrit Grammar", maxMarks: 100, marksObtained: Math.min(100, overall - 1), weightage: "35%" },
      { subject: "Sanskrit Literature & Vocabulary", maxMarks: 100, marksObtained: Math.min(100, overall + 2), weightage: "25%" },
      { subject: "Bhagavad Gita Shloka Recitation", maxMarks: 100, marksObtained: Math.min(100, overall - 2), weightage: "20%" },
      { subject: "Indian Knowledge System (IKS)", maxMarks: 100, marksObtained: Math.min(100, overall + 1), weightage: "20%" }
    ];
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans relative">
      
      {/* Recovery Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md border border-slate-200 shadow-2xl relative">
            <button 
              onClick={() => { setShowForgotModal(false); setRecoverySuccess(null); }}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 font-extrabold cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 mb-2">
              <Smartphone className="h-5 w-5 text-[#007799]" />
              Recover Login Credentials
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Don't worry, enter your phone number to recover your registered credentials.
            </p>

            {recoverySuccess ? (
              <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs p-4 rounded-xl font-semibold flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{recoverySuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleRecoverySubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Enter Phone No.
                  </label>
                  <input
                    type="tel"
                    required
                    value={recoveryPhone}
                    onChange={(e) => setRecoveryPhone(e.target.value)}
                    placeholder="e.g. +91 91777 71149"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#007799] focus:bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#007799] hover:bg-[#005577] text-white py-3.5 rounded-xl font-bold text-xs shadow-md cursor-pointer"
                >
                  Submit Recovery Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        
        {/* Header Branding */}
        {activeTab !== "dashboard" && (
          <div className="text-center mb-10">
            <span className="bg-red-50 text-red-700 text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider">
              Central Sanskrit University
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-display">
              Sanskrit Olympiad Student Portal
            </h1>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              Manage your academic registrations, syllabus progress, and view verified certifications.
            </p>
          </div>
        )}

        {/* Alerts */}
        {error && (
          <div className="max-w-md mx-auto mb-6 bg-red-50 border border-red-200 text-red-700 p-4 rounded-xl flex items-start gap-3 shadow-sm">
            <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5 text-red-600" />
            <div className="text-xs font-semibold">{error}</div>
          </div>
        )}

        {success && (
          <div className="max-w-md mx-auto mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-start gap-3 shadow-sm">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-emerald-600" />
            <div className="text-xs font-semibold">{success}</div>
          </div>
        )}

        {/* DEDICATED LOGIN SCREEN */}
        {activeTab === "login" && (
          <div className="max-w-md mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in">
            <div className="bg-gradient-to-r from-[#007799] to-[#0092bc] text-white px-8 py-6 text-center">
              <h2 className="text-xl font-bold">Candidate Sign In</h2>
              <p className="text-xs text-white/80 mt-1">Access your personalized Olympiad portal</p>
            </div>
            
            <div className="p-8">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Registered Email Address / APAR ID
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="e.g. student@csu.edu"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span />
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-[#007799] hover:underline font-bold cursor-pointer"
                  >
                    Forgot login Credentials?
                  </button>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#007799] hover:bg-[#005577] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mt-6"
                >
                  <span>Authenticate Account</span>
                  <ChevronRight className="h-4 w-4" />
                </button>

                <div className="text-center mt-6">
                  <p className="text-xs text-slate-500">
                    Want to evaluate quickly? Use:
                    <br />
                    <span className="font-extrabold text-[#007799] bg-[#007799]/5 px-2 py-0.5 rounded mt-1 inline-block">
                      student@csu.edu / password
                    </span>
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6 text-center text-xs text-slate-600">
                  New Candidate?{" "}
                  <button
                    type="button"
                    onClick={() => { setActiveTab("register"); setError(null); }}
                    className="text-[#007799] hover:underline font-bold"
                  >
                    Register and Create ID
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* DEDICATED SEPARATE FULL REGISTRATION FORM */}
        {activeTab === "register" && (
          <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-5">
              
              {/* Left Side: Brand promotion & Info */}
              <div className="md:col-span-1 bg-gradient-to-br from-[#007799] to-[#0092bc] text-white p-8 flex flex-col justify-between">
                <div>
                  <button 
                    onClick={handleCancelRegistration}
                    className="flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-white mb-6"
                  >
                    <ArrowLeft className="h-4 w-4" /> Back to Sign In
                  </button>
                  <h2 className="text-xl font-extrabold font-serif">CSU Candidate Register</h2>
                  <p className="text-[11px] text-white/80 mt-3 leading-relaxed">
                    Please submit your student enrollment details to set up your personal workspace. Fields marked with an asterisk (*) are mandatory.
                  </p>
                </div>

                <div className="space-y-4 mt-8 pt-8 border-t border-white/10 text-[11px]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-yellow-300 flex-shrink-0" />
                    <span>Instant generation of custom APAR ID.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle className="h-4.5 w-4.5 text-yellow-300 flex-shrink-0" />
                    <span>Access curriculum details and mock reports.</span>
                  </div>
                </div>

                <div className="text-[10px] text-white/55 mt-8">
                  Central Sanskrit University
                </div>
              </div>

              {/* Right Side: Full Registration Inputs Form */}
              <div className="md:col-span-4 p-8 sm:p-10">
                <h3 className="text-lg font-black text-slate-800 mb-6 uppercase tracking-wider border-b border-slate-100 pb-2 flex items-center gap-2">
                  <UserCheck className="h-5 w-5 text-[#007799]" />
                  Registration Form
                </h3>
                
                <form onSubmit={handleRegister} className="space-y-6">
                  
                  {/* General Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          placeholder="Student full name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Father's Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={regFatherName}
                          onChange={(e) => setRegFatherName(e.target.value)}
                          placeholder="Father's full name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        School/College Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <School className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={regSchool}
                          onChange={(e) => setRegSchool(e.target.value)}
                          placeholder="Name of your institution"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        APAR ID <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={regAparId}
                          onChange={(e) => setRegAparId(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs font-bold text-slate-700 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Class/Year of Study <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={regClassStudy}
                        onChange={(e) => setRegClassStudy(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                        <option value="Undergraduate Year 1">Undergraduate Year 1</option>
                        <option value="Undergraduate Year 2">Undergraduate Year 2</option>
                        <option value="Undergraduate Year 3">Undergraduate Year 3</option>
                        <option value="Postgraduate Year 1">Postgraduate Year 1</option>
                        <option value="Postgraduate Year 2">Postgraduate Year 2</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          value={regMobile}
                          onChange={(e) => setRegMobile(e.target.value)}
                          placeholder="e.g. +91 91777 71149"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Email ID <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          placeholder="e.g. name@mail.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-50 pt-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        How did you hear about us? <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {["Social Media", "School/College", "Friend/Family", "Website", "Newspaper", "Other"].map((opt) => (
                          <label key={opt} className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 cursor-pointer text-xs transition-all">
                            <input
                              type="radio"
                              name="hearAbout"
                              value={opt}
                              checked={regHearAbout === opt}
                              onChange={(e) => setRegHearAbout(e.target.value)}
                              className="accent-[#007799]"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {regHearAbout === "Other" && (
                      <div>
                        <label className="block text-xs font-bold text-slate-600 mb-1.5">
                          Specify Other <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <HelpCircle className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                          <input
                            type="text"
                            required
                            value={regHearOther}
                            onChange={(e) => setRegHearOther(e.target.value)}
                            placeholder="Please specify source"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-50 pt-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-600 mb-1.5">
                        Set Account Password <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="password"
                          required
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          placeholder="Minimum 6 characters"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2.5 text-xs focus:outline-none focus:border-[#007799] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-end gap-3.5">
                    <button
                      type="button"
                      onClick={handleCancelRegistration}
                      className="px-5 py-3 rounded-xl border border-slate-300 text-slate-600 text-xs font-bold hover:bg-slate-50 cursor-pointer transition-all text-center"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="px-5 py-3 rounded-xl border border-[#007799] text-[#007799] text-xs font-bold hover:bg-[#007799]/5 cursor-pointer transition-all flex items-center justify-center gap-1.5 text-center"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                      <span>Reset</span>
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-[#007799] hover:bg-[#005577] text-white text-xs font-bold shadow-md cursor-pointer transition-all flex items-center justify-center gap-1.5 text-center"
                    >
                      <span>Submit Register</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        )}

        {/* LOGGED IN VIEW WITH SIDEBAR PROFILE & VERTICAL TABS */}
        {activeTab === "dashboard" && currentUser && (
          <div className="space-y-6">
            
            {/* Top Welcome Banner */}
            <div className="bg-gradient-to-r from-[#007799] to-[#0092bc] text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="bg-white/20 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Academic Year 2026
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 font-display">
                  Welcome back, {currentUser.fullName}!
                </h2>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://wa.me/919177771149"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Support</span>
                </a>
                <button
                  onClick={handleLogout}
                  className="bg-white/10 hover:bg-white/25 text-white border border-white/20 px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>

            {/* Main Content Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* LEFT SIDEBAR: PROFILE & SIDE TABS */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Always visible student Profile card */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                    <User className="h-4 w-4 text-[#007799]" />
                    Student Profile
                  </h3>
                  <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-50">
                    <div className="h-12 w-12 bg-[#007799]/10 rounded-full flex items-center justify-center text-[#007799] font-black text-lg">
                      {currentUser.fullName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-sm">{currentUser.fullName}</h4>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">{currentUser.regId}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-xs">
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">Father's Name:</span>
                      <span className="text-slate-800 font-extrabold text-right">{currentUser.fatherName}</span>
                    </li>
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">School/College:</span>
                      <span className="text-slate-800 font-extrabold text-right max-w-[180px] break-words">{currentUser.schoolName}</span>
                    </li>
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">Class/Year:</span>
                      <span className="text-slate-800 font-extrabold text-right">{currentUser.className}</span>
                    </li>
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">Contact No:</span>
                      <span className="text-slate-800 font-extrabold">{currentUser.mobile}</span>
                    </li>
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">Email ID:</span>
                      <span className="text-slate-800 font-extrabold break-all">{currentUser.email}</span>
                    </li>
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">Registered:</span>
                      <span className="text-slate-800 font-extrabold">{currentUser.registeredAt}</span>
                    </li>
                    <li className="flex justify-between py-0.5">
                      <span className="text-slate-500 font-semibold">Validation:</span>
                      <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Official Candidate
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Side Vertical Tab menu */}
                <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm flex flex-col gap-1.5">
                  <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest px-3 mb-2 block">
                    Portal Navigation
                  </span>
                  <button
                    onClick={() => setDashboardTab("subjects")}
                    className={`w-full py-3 px-4 text-left text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2.5 ${
                      dashboardTab === "subjects"
                        ? "bg-[#007799] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <BookMarked className="h-4 w-4" />
                    <span>Enrolled Syllabus</span>
                  </button>
                  <button
                    onClick={() => setDashboardTab("scores")}
                    className={`w-full py-3 px-4 text-left text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2.5 ${
                      dashboardTab === "scores"
                        ? "bg-[#007799] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <FileSpreadsheet className="h-4 w-4" />
                    <span>Olympiad Score Card</span>
                  </button>
                  <button
                    onClick={() => setDashboardTab("certificate")}
                    className={`w-full py-3 px-4 text-left text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2.5 ${
                      dashboardTab === "certificate"
                        ? "bg-[#007799] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Award className="h-4 w-4" />
                    <span>Download Certificate</span>
                  </button>
                  <button
                    onClick={() => setDashboardTab("edit-profile")}
                    className={`w-full py-3 px-4 text-left text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2.5 ${
                      dashboardTab === "edit-profile"
                        ? "bg-[#007799] text-white shadow-sm"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <Edit3 className="h-4 w-4" />
                    <span>Edit Profile Details</span>
                  </button>
                </div>

                {/* Always visible WhatsApp Community support box */}
                <div className="bg-gradient-to-br from-[#25D366]/5 to-[#128C7E]/5 border border-[#25D366]/20 rounded-2xl p-5 shadow-sm text-xs space-y-3">
                  <h4 className="font-extrabold text-slate-900 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-emerald-600" />
                    Join Whatsapp Channel
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Receive daily Sanskrit quiz updates, study guide alerts, and result release details directly in your feed.
                  </p>
                  <a
                    href="https://wa.me/919177771149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#007799] hover:bg-[#005577] text-white py-2.5 rounded-xl font-bold text-center block"
                  >
                    Follow whatsapp Channel
                  </a>
                </div>

              </div>

              {/* RIGHT CONTENT DISPLAY AREA */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* 1. Dynamic content: Enrolled Syllabus tab */}
                {dashboardTab === "subjects" && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm animate-fade-in">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                      <BookMarked className="h-4 w-4 text-[#007799]" />
                      Enrolled Syllabus Details
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Below is your registered curriculum for the National Sanskrit Olympiad 2026:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {getSubjectsForClass(currentUser.className).map((subj) => (
                        <div key={subj.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs flex justify-between items-center">
                          <div>
                            <span className="text-[9px] text-[#007799] font-extrabold font-mono block">{subj.code}</span>
                            <strong className="text-slate-800 text-sm font-extrabold block mt-0.5">{subj.name}</strong>
                            <span className="text-xs text-slate-400 font-medium">{subj.hours} of coursework</span>
                          </div>
                          <span className="bg-emerald-50 text-emerald-800 text-[9px] font-black px-3 py-1 rounded uppercase border border-emerald-100">
                            {subj.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Dynamic content: Score Card tab */}
                {dashboardTab === "scores" && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm animate-fade-in">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                      <div>
                        <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider flex items-center gap-2">
                          <FileSpreadsheet className="h-4 w-4 text-[#007799]" />
                          Olympiad Score Card
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          View and print your official module-wise performance evaluation.
                        </p>
                      </div>
                      <button
                        onClick={handlePrintMarksheet}
                        className="bg-[#007799] hover:bg-[#005577] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Printer className="h-4 w-4" />
                        <span>Print Marksheet</span>
                      </button>
                    </div>

                    {/* Printable marksheet area */}
                    {/* <div ref={marksheetRef} className="bg-white p-4 border rounded-md">
                     
                      <div className="mb-6 border-b-2 border-slate-900 pb-4 text-center space-y-2">
                        <div className="flex justify-center items-center gap-3">
                          <img src="/navbar.png" alt="CSU Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <h2 className="text-[#881b1b] text-xl font-bold font-serif uppercase tracking-wide">
                          Central Sanskrit University
                        </h2>
                        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">
                          Ministry of Education, Govt. of India | National Sanskrit Olympiad 2026
                        </p>
                        <h3 className="text-slate-800 text-sm font-extrabold tracking-widest uppercase border-y border-slate-200 py-1.5 mt-2">
                          Official Evaluation Marksheet
                        </h3>

                       
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-left text-xs pt-4 text-slate-700">
                          <div>
                            <span className="font-semibold text-slate-500">Student Name:</span>{" "}
                            <strong className="text-slate-900 font-extrabold uppercase">{currentUser.fullName}</strong>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">APAR ID / Roll No:</span>{" "}
                            <strong className="text-slate-900 font-extrabold">{currentUser.regId}</strong>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">School/College:</span>{" "}
                            <strong className="text-slate-900 font-extrabold">{currentUser.schoolName}</strong>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Class/Year of Study:</span>{" "}
                            <strong className="text-slate-900 font-extrabold">{currentUser.className}</strong>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Father's Name:</span>{" "}
                            <strong className="text-slate-900 font-extrabold">{currentUser.fatherName}</strong>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Contact Number:</span>{" "}
                            <strong className="text-slate-900 font-extrabold">{currentUser.mobile}</strong>
                          </div>
                        </div>
                      </div>

                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse border border-slate-200">
                          <thead>
                            <tr className="bg-slate-50 text-slate-700 uppercase text-[9px] tracking-wider border-b border-slate-200">
                              <th className="py-3 px-4 font-bold border-r border-slate-200">Olympiad Module</th>
                              <th className="py-3 px-4 font-bold text-center border-r border-slate-200">Max Marks</th>
                              <th className="py-3 px-4 font-bold text-center border-r border-slate-200">Marks Obtained</th>
                              <th className="py-3 px-4 font-bold text-center">Weightage</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200">
                            {getScoreCard(currentUser.score).map((row, idx) => (
                              <tr key={idx} className="hover:bg-slate-50/50">
                                <td className="py-3 px-4 font-bold text-slate-800 border-r border-slate-200">{row.subject}</td>
                                <td className="py-3 px-4 text-center font-semibold text-slate-500 border-r border-slate-200">{row.maxMarks}</td>
                                <td className="py-3 px-4 text-center font-black text-slate-900 border-r border-slate-200">{row.marksObtained}</td>
                                <td className="py-3 px-4 text-center font-semibold text-slate-500">{row.weightage}</td>
                              </tr>
                            ))}
                            <tr className="bg-slate-100 font-extrabold text-slate-900 border-t-2 border-slate-300">
                              <td className="py-3 px-4 border-r border-slate-200">Weighted Aggregate</td>
                              <td className="py-3 px-4 text-center border-r border-slate-200">100</td>
                              <td className="py-3 px-4 text-center text-sm font-black border-r border-slate-200">{currentUser.score}%</td>
                              <td className="py-3 px-4 text-center">100%</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                  
                      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between items-end text-xs text-slate-600">
                        <div className="space-y-1">
                          <div>Evaluation Status: <strong className="text-emerald-700">PASSED</strong></div>
                          <div>Percentile standing: <strong>{(currentUser.score + 2.5).toFixed(1)}%</strong></div>
                          <div>Declaration Date: <strong>{currentUser.registeredAt}</strong></div>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-1">
                          <QrCode className="h-10 w-10 text-slate-800" />
                          <span className="text-[6px] font-black uppercase tracking-wider">Secure Online Verification</span>
                        </div>

                        <div className="text-center font-bold text-[9px] text-slate-500 flex gap-8">
                          <div className="space-y-1">
                            <div className="h-5 w-20 border-b border-slate-300 mx-auto flex items-center justify-center">
                              <span className="font-serif italic text-xs text-blue-900/60 font-semibold">Dr. S. Dev</span>
                            </div>
                            <div className="text-[7px] text-slate-400 uppercase tracking-widest font-extrabold">Convenor</div>
                          </div>
                          <div className="space-y-1">
                            <div className="h-5 w-20 border-b border-slate-300 mx-auto flex items-center justify-center">
                              <span className="font-serif italic text-xs text-blue-900/60 font-semibold">Prof. K. Rama</span>
                            </div>
                            <div className="text-[7px] text-slate-400 uppercase tracking-widest font-extrabold">Registrar</div>
                          </div>
                        </div>
                      </div>

                      <hr className="my-6 border-slate-300" />

                      <div className="text-[9px] text-slate-700 leading-relaxed">
                        <h4 className="text-[11px] font-bold uppercase text-slate-900 mb-2">
                          Rules, Regulations & Terms
                        </h4>

                        <ol className="list-decimal list-inside space-y-1">
                          <li>This marksheet is generated electronically by Central Sanskrit University and is valid without a physical signature.</li>
                          <li>The marks and evaluation shown are based on the official records available at the time of publication.</li>
                          <li>Any discrepancy in student details must be reported to the examination authority within 15 days of declaration.</li>
                          <li>This marksheet is intended solely for academic and verification purposes.</li>
                          <li>Unauthorized alteration, duplication, or misuse of this document is strictly prohibited and may lead to legal action.</li>
                          <li>The QR Code provided on this marksheet can be used for online verification of its authenticity.</li>
                          <li>The decision of the Examination Committee and Central Sanskrit University shall be final and binding in all matters relating to evaluation and results.</li>
                        </ol>

                        <p className="mt-4 text-center text-[8px] text-slate-500 italic">
                          *** This is a computer-generated marksheet. No manual signature or seal is required. ***
                        </p>

                        <p className="mt-2 text-center text-[8px] text-slate-500">
                          © 2026 Central Sanskrit University, Ministry of Education, Government of India.
                          All Rights Reserved.
                        </p>
                      </div>
                    </div> */}

                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div className="text-xs text-slate-500 font-semibold">
                        🏆 Overall standing percentile: <strong className="text-[#007799] font-black">{(currentUser.score + 2.5).toFixed(1)}%</strong>
                      </div>
                      <div className="bg-emerald-50 text-emerald-800 text-[10px] font-bold px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1.5">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                        Eligible for National Merit Certificate
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Dynamic content: Merit Certificate */}
                {dashboardTab === "certificate" && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm animate-fade-in">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-6 pb-4 border-b border-slate-100">
                      <div>
                        <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                          <Award className="h-5 w-5 text-amber-600" />
                          National Merit Certification
                        </h3>
                        <p className="text-xs text-slate-500 mt-1">
                          Download or print your official verified Central Sanskrit University certificate.
                        </p>
                      </div>
                      <button
                        onClick={handlePrintCertificate}
                        className="bg-[#007799] hover:bg-[#005577] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Printer className="h-4 w-4" />
                        <span>Print / Save PDF</span>
                      </button>
                    </div>

                    {/* <div className="overflow-x-auto border border-slate-200 rounded-xl p-4 bg-slate-50 flex justify-center">
                      <div
                        ref={certificateRef}
                        className="bg-white w-[750px] min-w-[750px] h-[500px] border-[16px] border-double border-amber-600 p-8 flex flex-col justify-between relative shadow-lg overflow-hidden select-none"
                      >
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                          <img src="/navbar.png" alt="watermark" className="w-[320px] h-auto object-contain" />
                        </div>

                        <div className="text-center relative z-10 space-y-1">
                          <div className="flex justify-center items-center gap-3">
                            <img src="/navbar.png" alt="Sanskrit Olympiad Logo" className="h-16 w-auto object-contain" />
                          </div>
                          <h2 className="text-[#881b1b] text-lg font-bold tracking-wider uppercase font-serif">
                            Central Sanskrit University
                          </h2>
                          <p className="text-slate-600 text-[9px] uppercase font-bold tracking-widest leading-none">
                            Established by an Act of Parliament | Ministry of Education, Govt. of India
                          </p>
                          <div className="h-[2px] bg-gradient-to-r from-transparent via-amber-600 to-transparent w-2/3 mx-auto mt-1" />
                        </div>

                        <div className="text-center space-y-5 relative z-10 my-auto">
                          <h3 className="text-amber-700 text-2xl font-bold tracking-wide italic font-serif">
                            Certificate of Merit
                          </h3>
                          <p className="text-slate-600 text-xs font-medium max-w-xl mx-auto leading-relaxed">
                            This is to proudly certify that
                          </p>
                          <div className="border-b border-dotted border-slate-400 w-3/4 mx-auto pb-1">
                            <span className="text-slate-900 text-xl font-extrabold uppercase font-serif tracking-wide px-4">
                              {currentUser.fullName}
                            </span>
                          </div>
                          <p className="text-slate-600 text-xs leading-relaxed max-w-2xl mx-auto px-6">
                            of <span className="font-extrabold text-slate-800">{currentUser.className}</span> has successfully participated in the <span className="font-extrabold text-[#007799]">National Sanskrit Olympiad (Academic Session 2026)</span> and demonstrated excellent proficiency by attaining a score of <span className="font-black text-amber-700 text-sm">{currentUser.score}%</span>.
                          </p>
                        </div>

                        <div className="flex justify-between items-end relative z-10 pt-3 border-t border-slate-100">
                          <div className="space-y-1 text-left text-[8px] text-slate-500 font-semibold font-mono">
                            <div>Certificate ID: <span className="text-slate-800 font-bold">{currentUser.regId}-CERT</span></div>
                            <div>Verification Date: <span className="text-slate-800 font-bold">{currentUser.registeredAt}</span></div>
                            <div>Status: <span className="text-emerald-700 font-bold uppercase">Official Verified</span></div>
                          </div>

                          <div className="flex flex-col items-center justify-center gap-1 pb-1">
                            <QrCode className="h-8 w-8 text-slate-800 opacity-80" />
                            <span className="text-[6px] text-slate-500 font-bold tracking-widest uppercase">Verify Online</span>
                          </div>

                          <div className="flex gap-8 text-center text-[9px] text-slate-600 font-bold pb-1">
                            <div className="space-y-1">
                              <div className="h-5 w-20 border-b border-slate-300 mx-auto flex items-center justify-center">
                                <span className="font-serif italic text-xs text-blue-900/60 font-semibold">Dr. S. Dev</span>
                              </div>
                              <div className="text-[7px] text-slate-400 uppercase tracking-widest font-extrabold">Convenor</div>
                            </div>
                            <div className="space-y-1">
                              <div className="h-5 w-20 border-b border-slate-300 mx-auto flex items-center justify-center">
                                <span className="font-serif italic text-xs text-blue-900/60 font-semibold">Prof. K. Rama</span>
                              </div>
                              <div className="text-[7px] text-slate-400 uppercase tracking-widest font-extrabold">Vice Chancellor</div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div> */}
                  </div>
                )}

                {/* 4. Dynamic content: EDIT PROFILE TAB */}
                {dashboardTab === "edit-profile" && (
                  <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm animate-fade-in">
                    <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                      <Edit3 className="h-4 w-4 text-[#007799]" />
                      Edit Profile Details
                    </h3>
                    <p className="text-xs text-slate-500 mb-6">
                      Modify your registered contact and academic credentials below. Fields marked with <span className="text-red-500">*</span> are required.
                    </p>

                    <form onSubmit={handleSaveProfile} className="space-y-5">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={editName}
                            onChange={(e) => setEditName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#007799]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Father's Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={editFatherName}
                            onChange={(e) => setEditFatherName(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#007799]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            School/College Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={editSchool}
                            onChange={(e) => setEditSchool(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#007799]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Contact Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            value={editMobile}
                            onChange={(e) => setEditMobile(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#007799]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Class/Year of Study <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={editClassStudy}
                            onChange={(e) => setEditClassStudy(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#007799] cursor-pointer"
                          >
                            <option value="Class 6">Class 6</option>
                            <option value="Class 7">Class 7</option>
                            <option value="Class 8">Class 8</option>
                            <option value="Class 9">Class 9</option>
                            <option value="Class 10">Class 10</option>
                            <option value="Class 11">Class 11</option>
                            <option value="Class 12">Class 12</option>
                            <option value="Undergraduate Year 1">Undergraduate Year 1</option>
                            <option value="Undergraduate Year 2">Undergraduate Year 2</option>
                            <option value="Undergraduate Year 3">Undergraduate Year 3</option>
                            <option value="Postgraduate Year 1">Postgraduate Year 1</option>
                            <option value="Postgraduate Year 2">Postgraduate Year 2</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            How did you hear about us? <span className="text-red-500">*</span>
                          </label>
                          <select
                            value={editHearAbout}
                            onChange={(e) => setEditHearAbout(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-[#007799] cursor-pointer"
                          >
                            <option value="Social Media">Social Media</option>
                            <option value="School/College">School/College</option>
                            <option value="Friend/Family">Friend/Family</option>
                            <option value="Website">Website</option>
                            <option value="Newspaper">Newspaper</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {editHearAbout === "Other" && (
                        <div>
                          <label className="block text-xs font-bold text-slate-600 mb-1.5">
                            Specify Other <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={editHearOther}
                            onChange={(e) => setEditHearOther(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-[#007799]"
                          />
                        </div>
                      )}

                      <div className="pt-4 flex justify-end">
                        <button
                          type="submit"
                          className="px-6 py-3 rounded-xl bg-[#007799] hover:bg-[#005577] text-white text-xs font-bold shadow-md cursor-pointer transition-all flex items-center gap-1.5"
                        >
                          <Save className="h-4 w-4" />
                          <span>Save Profile Details</span>
                        </button>
                      </div>

                    </form>
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default function StudentPortal() {
  return (
    <Suspense fallback={
      <div className="bg-slate-50 min-h-screen py-12 px-4 flex items-center justify-center font-sans">
        <div className="text-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#007799] mx-auto mb-4" />
          <h2 className="text-lg font-bold text-slate-800">Loading Student Portal...</h2>
        </div>
      </div>
    }>
      <StudentPortalContent />
    </Suspense>
  );
}
