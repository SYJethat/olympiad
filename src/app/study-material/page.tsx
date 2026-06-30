"use client";

import { useState } from "react";
import { Download, FileText, Search, Database, BookOpen, AlertCircle } from "lucide-react";
import studyMaterialData from "@/data/studyMaterials.json";
import { StudyMaterial } from "@/types";

export default function StudyMaterialPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [downloadProgress, setDownloadProgress] = useState<Record<number, number>>({});

  const materials = studyMaterialData as StudyMaterial[];

  // Get filter lists
  const subjects = ["All", ...Array.from(new Set(materials.map((m) => m.subject)))];

  const filteredMaterials = materials.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.class.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === "All" || item.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleDownload = (id: number) => {
    if (downloadProgress[id] !== undefined) return; // Already downloading/downloaded

    // Simulate progress counting up
    setDownloadProgress((prev) => ({ ...prev, [id]: 0 }));
    
    let current = 0;
    const interval = setInterval(() => {
      current += 10;
      setDownloadProgress((prev) => ({ ...prev, [id]: current }));
      
      if (current >= 100) {
        clearInterval(interval);
      }
    }, 150);
  };

  return (
    <div className="bg-mesh min-h-screen py-12 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      
      {/* Header */}
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display">
          Syllabus Notes & Revision Material
        </h1>
        <p className="text-foreground/50 max-w-xl text-xs md:text-sm">
          Download PDF formulas sheets, quick cheat notes, and diagram guides prepared by professional K-12 tutors.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="md:col-span-2 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/45">
            <Search className="h-5 w-5" />
          </div>
          <input
            type="text"
            placeholder="Search notes, classes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-11 pr-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all"
          />
        </div>

        {/* Filter select */}
        <div>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="block w-full px-4 py-3 rounded-2xl glass-panel bg-white/50 border border-zinc-200/50 dark:border-zinc-800/50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-foreground transition-all cursor-pointer font-semibold"
          >
            <option value="All">All Subjects</option>
            {subjects.filter(sub => sub !== "All").map((sub) => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Material cards grid */}
      {filteredMaterials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((item) => {
            const progress = downloadProgress[item.id];
            const isFinished = progress === 100;
            const isDownloading = progress !== undefined && progress < 100;

            return (
              <div
                key={item.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-extrabold bg-blue-500/10 text-blue-600 dark:text-blue-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.type}
                    </span>
                    <span className="text-xs font-bold text-foreground/50 font-mono">{item.class}</span>
                  </div>

                  <h3 className="font-extrabold text-base text-foreground font-display mb-1">{item.title}</h3>
                  <span className="text-[10px] font-bold text-foreground/40 block mb-6">
                    Subject: {item.subject}
                  </span>
                </div>

                <div className="space-y-4 pt-4 border-t border-zinc-200/50 dark:border-zinc-800/50">
                  <div className="flex justify-between text-xs text-foreground/60 font-semibold font-mono">
                    <span className="flex items-center space-x-1">
                      <Database className="h-4 w-4 text-slate-400" />
                      <span>{item.fileSize}</span>
                    </span>
                    <span>{item.downloads + (isFinished ? 1 : 0)} DLs</span>
                  </div>

                  {/* Download button or progress bar */}
                  {isDownloading ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold">
                        <span>Downloading file...</span>
                        <span className="font-mono text-blue-500">{progress}%</span>
                      </div>
                      <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-blue-600 h-full rounded-full transition-all duration-150"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleDownload(item.id)}
                      className={`w-full inline-flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95 ${
                        isFinished
                          ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white"
                      }`}
                    >
                      <Download className="h-3.5 w-3.5" />
                      <span>{isFinished ? "Download PDF Again" : "Download PDF Material"}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 rounded-2xl glass-panel p-8">
          <div className="mx-auto h-12 w-12 text-slate-400 mb-4">
            <BookOpen className="h-12 w-12" />
          </div>
          <h3 className="font-bold text-lg">No Study Material Found</h3>
          <p className="text-xs text-foreground/50 mt-1">
            Try adjusting your search criteria or subject selector.
          </p>
          <button
            onClick={() => {
              setSearchTerm("");
              setSelectedSubject("All");
            }}
            className="mt-4 inline-block bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
