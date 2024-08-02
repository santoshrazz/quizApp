import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "@/components/Loading";

export const metadata: Metadata = {
  title: "Brainlyized",
  description: "Play quize that sharp your mind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <Suspense fallback={<Loading />}>
          <Toaster />
          {children}
        </Suspense>
        {/* <Navbar /> */}
      </body>
    </html>
  );
}
