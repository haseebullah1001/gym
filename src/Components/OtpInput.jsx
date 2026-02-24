"use client";
import { useRef } from "react";

export default function OtpInput({ onChange }) {
  const inputs = useRef([]);

  const changehanlde = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value && index < 3) {
      inputs.current[index + 1]?.focus();
    }

    const code = inputs.current.map((i) => i?.value || "").join("");
    onChange(code);
  };

  const keydown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      if (inputs.current[index].value) {
       
        inputs.current[index].value = "";
      } else if (index > 0) {
      
        inputs.current[index - 1].focus();
        inputs.current[index - 1].value = "";
      }

      const code = inputs.current.map((i) => i?.value || "").join("");
      onChange(code);
    }
  };

  return (
    <div
      dir="ltr"
      className="grid grid-cols-4 gap-6 md:gap-8 justify-items-center mb-8"
    >

{/* 
      اگر دکمه بیشتر خواستین با علاوه کردن عدد ۴ روی ارایه میتواید یکی اضافه کنین */}
      {[0, 1, 2, 3].map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          type="text"
          inputMode="numeric"
          placeholder="......"
          maxLength={1}
          onChange={(e) => changehanlde(e, i)}
          onKeyDown={(e) => keydown(e, i)}
className="w-[84px] md:w-[96px] h-[74px] md:h-[86px] rounded-xl text-black bg-white text-center text-2xl md:text-3xl font-semibold shadow-lg outline-none ring-1 ring-orange-200 focus:ring-3 focus:ring-orange-300 transition dark:bg-[#1F2C3B] dark:text-white dark:shadow-lg dark:shadow-red-900/40 "
        />
      ))}
    </div>
  );
}
