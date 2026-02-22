import { heroData } from "@/constants/heroData";
import Stats from "./Stats";
import ActionButtons from "./ActionButtons";
import { LuDumbbell } from "react-icons/lu";

export default function HeroContent() {
  return (
  <div className="flex flex-col items-center text-white gap-6 mt-16">

   
      <div className=" bg-gradient-to-r from-orange-400 to-orange-600  rounded-3xl w-28 h-28 flex items-center justify-center shadow-xl">
        <LuDumbbell size={32} className="text-white" />
      </div>

      <h1
        className="md:text-5xl font-bold text-center"
        style={{ fontSize: 100 }}
      >
        {heroData.title}
      </h1>

      <h2 className="text-6xl text-orange-500 mt-4 font-semibold text-center">
        {heroData.highlight}
      </h2>

      <p className="mt-6 text-gray-200 text-3xl text-center max-w-2xl">
        {heroData.description}
      </p>

      <Stats />
      <ActionButtons />

    </div>
  );
}
