"use client";

import { useRef } from "react";

type OtpInputProps = {
  onChange: (code: string) => void;
};

export default function OtpInput({ onChange }: OtpInputProps) {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const changehanlde = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value && index < 4) {
      inputs.current[index + 1]?.focus();
    }

    const code = inputs.current.map((i) => i?.value || "").join("");
    onChange(code);
  };

  const keydown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault();

      if (inputs.current[index]?.value) {
        inputs.current[index]!.value = "";
      } else if (index > 0) {
        inputs.current[index - 1]?.focus();
        if (inputs.current[index - 1])
          inputs.current[index - 1]!.value = "";
      }

      const code = inputs.current.map((i) => i?.value || "").join("");
      onChange(code);
    }
  };

  return (
    <div dir="ltr" className="flex justify-center gap-3 md:gap-8 mb-8">
      {[0, 1, 2, 3, 4].map((_, i) => (
        <input
          key={i}
         ref={(el) => {
  inputs.current[i] = el;
}}
          type="text"
          inputMode="numeric"
          placeholder="......"
          maxLength={1}
          onChange={(e) => changehanlde(e, i)}
          onKeyDown={(e) => keydown(e, i)}
          className="w-[84px] md:w-[96px] h-[74px] md:h-[86px] rounded-xl text-black bg-white text-center text-2xl md:text-3xl font-semibold shadow-lg outline-none ring-1 ring-orange-200 focus:ring-3 focus:ring-orange-300 transition dark:bg-[#1F2C3B] dark:text-white dark:shadow-lg dark:shadow-red-900/40"
        />
      ))}
    </div>
  );
}