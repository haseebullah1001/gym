"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="absolute top-6 left-6 bg-white/20 backdrop-blur-md p-2 rounded-full text-white"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}