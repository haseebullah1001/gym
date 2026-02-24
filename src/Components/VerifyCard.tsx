"use client";

import { useState } from "react";
import OtpInput from "./OtpInput";

export default function VerifyCard() {
  const [code, setCode] = useState<string>("");

  const handleSubmit = async (): Promise<void> => {
    if (code.length !== 5) {
      alert("کد کامل نیست");
      return;
    }
alert("dar hal teste")
    const res = await fetch("/ainja api bezam", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="w-full max-w-3xl mx-auto rounded-[28px] p-[6px] bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 shadow-[0_14px_30px_rgba(185,28,28,0.12),0_6px_12px_rgba(249,115,22,0.06)] ">
      <div className="bg-white rounded-[22px] p-8 md:p-10 shadow-[0_12px_24px_rgba(0,0,0,0.06)] dark:bg-[#1F2C3B]">
        <OtpInput onChange={setCode} />

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="w-[88%] md:w-4/5 py-5 md:py-6 rounded-xl text-white text-xl md:text-2xl font-extrabold bg-gradient-to-r from-orange-500 to-red-600 shadow-[0_10px_24px_rgba(220,38,38,0.18),0_6px_14px_rgba(249,115,22,0.06)] transform transition active:scale-95"
          >
            تایید
          </button>
        </div>
      </div>
    </div>
  );
}