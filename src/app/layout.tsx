import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}