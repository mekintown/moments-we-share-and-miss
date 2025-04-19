import type { Metadata } from "next";
import { Pridi } from "next/font/google";
import "./globals.css";
import AnimatedLayout from "@/components/AnimatedLayout";
import AudioProvider from "@/providers/AudioProvider";

const pridi = Pridi({
  variable: "--font-pridi",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Moments We Share (and miss)",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="th">
    <body
      style={{ fontFamily: "var(--font-pridi), sans-serif" }}
      className={`${pridi.variable}`}
    >
      <AudioProvider>
        <div className="antialiased relative mx-auto min-h-screen w-full max-w-md overflow-hidden overscroll-none`">
          <AnimatedLayout>{children}</AnimatedLayout>
        </div>
      </AudioProvider>
    </body>
  </html>
);

export default RootLayout;
