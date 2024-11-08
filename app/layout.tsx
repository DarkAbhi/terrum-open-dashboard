import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LandingHeader } from "@/components/home-page-header";
import { Toaster } from "@/components/ui/toaster";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Terrum Open Dashboard",
  description:
    "Terrum Open Dashboard, the ultimate resource for sustainable living",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex min-h-screen flex-col">
            <LandingHeader />
            <div className="flex-grow">{children}</div>
            <SiteFooter/>
          </main>
          <Toaster />
        </ThemeProvider>
        <script
          defer
          src={process.env.NEXT_PUBLIC_UMAMI_SRC}
          data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
        />
      </body>
    </html>
  );
}
