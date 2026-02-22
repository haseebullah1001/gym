import { IoIosPersonAdd } from "react-icons/io";


export default function Button({ children, variant = "primary", className = "" }) {
  const base = "mt-6 text-xl px-6 py-2 rounded-xl font-medium transition-all duration-300 flex flex-row items-center gap-2";

  const variants = {
    primary:
      "bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:bg-orange-600 shadow-md",
    secondary:
      " text-orange-500 hover:bg-gray-900 bg-gradient-to-r from-[#2d2d2d]/80 to-[#1a1a1a]/90 backdrop-blur-md border border-white/10",
    outline:
      "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
        
      {children}
      <IoIosPersonAdd />
    </button>
  );
}