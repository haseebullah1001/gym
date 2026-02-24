import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="w-full bg-white  py-3 px-6 dark:bg-[#1F2C3B]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center mt-10">
           <ThemeToggle />
             
          </div>
        </div>
      </div>
    </header>
  );
}