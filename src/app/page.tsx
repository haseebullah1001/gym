import Header from "@/components/Header";
import VerifyCard from "@/components/VerifyCard";
import DecorativeLine from "@/components/DecorativeLine";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col dark:bg-[#1F2C3B]" dir="rtl">
      <Header />

      <div className="flex flex-col items-center justify-center flex-1 px-6">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 text-center mb-20 dark:text-white">
            رمز عبور خود را فراموش کردید؟
          </h1>

          <p className="text-base sm:text-lg md:text-2xl font-semibold text-center text-orange-600 mb-6">
            کد وارد شده به ایمیلتان را وارد کنید.
          </p>

          <VerifyCard />

          <DecorativeLine />
        </div>
      </div>
    </main>
  );
}