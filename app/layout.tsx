import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";
import SiteFrame from "./components/SiteFrame";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
        <Script id="onmain-scroll-restoration" strategy="beforeInteractive">
          {`
            try {
              if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
            } catch (e) {}
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
          `}
        </Script>

        <SiteFrame>{children}</SiteFrame>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
