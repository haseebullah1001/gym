import HeroContent from "./HeroContent";
import ThemeToggle from "./ThemeToggle";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/modern-urban-gym.jpg')",
      }}
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      <ThemeToggle />

    
      <div className="relative z-10 min-h-screen px-[80px] py-[40px]">
        <div
          className="
        w-full
h-full
bg-white/10
backdrop-blur-xl
border
border-white/30
rounded-3xl
shadow-2xl
flex
flex-col
items-center
justify-center
      "
        >
          <HeroContent />
        </div>
      </div>
    </section>
  );
}
