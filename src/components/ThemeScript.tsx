"use client";

import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    // Apply theme immediately on mount
    const theme = localStorage.getItem("theme") || "dark";
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, []);

  return null;
}
