import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { twMerge } from "tailwind-merge";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piotr Chuchla - Frontend Developer",
  description: "Frontend Developer website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <body className={twMerge(montserrat.className, "bg-gray-800 background")}>
        {children}
      </body>
    </html>
  );
}
