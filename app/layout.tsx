import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Autumn Ticket Tracker",
  description: "Created by Islandcoders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full flex flex-col bg-slate-50`}
      >
        <main className="flex w-full">
          <div className="w-[25rem] h-screen">
            <Navbar />
          </div>
          <div className="w-full p-10 md:p-16 bg-slate-100 max-h-screen overflow-y-scroll">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
