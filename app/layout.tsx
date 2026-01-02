import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import SiteFrame from "./components/SiteFrame";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onmain",
  description: "Onmain",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
