"use client";

import React from "react";
import { Palette } from "lucide-react";

interface ThemeControlBarProps {
  theme: "version-a" | "version-b";
  setTheme: (theme: "version-a" | "version-b") => void;
}

export const ThemeControlBar: React.FC<ThemeControlBarProps> = ({
  theme,
  setTheme,
}) => {
  return (
    <aside
      aria-label="Prototype Version Switcher"
      className="sticky top-0 z-50 bg-slate-900/95 text-white border-b border-slate-800 shadow-md backdrop-blur-md text-xs py-1.5 px-3 sm:px-6 w-full max-w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Brand info */}
        <div className="flex items-center gap-1.5 shrink min-w-0">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-bold tracking-wide text-slate-200 text-xs truncate">
            C FIVE TRANSPORT
          </span>
          <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[10px] font-mono border border-slate-700 hidden lg:inline">
            Design Concepts
          </span>
        </div>

        {/* Right: Compact Version Switcher */}
        <div className="flex items-center gap-1 bg-slate-950/90 p-0.5 rounded-lg border border-slate-800 shrink-0">
          <button
            onClick={() => setTheme("version-a")}
            className={`px-2.5 py-1 rounded-md font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              theme === "version-a"
                ? "bg-blue-950 text-amber-300 shadow border border-amber-400/40"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0"></span>
            <span>Version A</span>
          </button>

          <button
            onClick={() => setTheme("version-b")}
            className={`px-2.5 py-1 rounded-md font-bold text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
              theme === "version-b"
                ? "bg-white text-orange-600 shadow border border-orange-500/40"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
            <span>Version B</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
