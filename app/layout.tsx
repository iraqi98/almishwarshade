import type { Metadata } from "next";
import { Cairo, Almarai } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

const almarai = Almarai({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
});

export const metadata: Metadata = {
  title: "مظلات المشوار | مظلات هرمية وكهربائية في بغداد",
  description:
    "مظلات المشوار - تصميم وتنفيذ المظلات الهرمية والكهربائية وجلسات الحدائق والأسطح في بغداد. جادر أسترالي، هيكل مغلون، ضمان حتى 10 سنوات.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${almarai.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}
