import type { Metadata } from "next";
import { Pridi } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "@/components/AnimatedLayout";

const pridi = Pridi({
  variable: "--font-pridi",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Moments We Share (and miss)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        style={{ fontFamily: "var(--font-pridi), sans-serif" }}
        className={`${pridi.variable} antialiased relative mx-auto min-h-screen w-full max-w-md overflow-x-hidden overscroll-none`}
      >
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
