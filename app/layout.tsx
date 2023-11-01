import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LandingHeader } from "@/components/home-page-header";
import { SiteFooter } from "@/components/site-footer";

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
            <SiteFooter className="border-t" />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
