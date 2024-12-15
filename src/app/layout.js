import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RightTaxMate - Trusted Partner",
  description: "RightTaxMate, A Tax firm that guarantees peace-of-mind with Accurate Returns, Total Compliance and Air-tight Confidentiality",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" sizes="192x192" href="https://static.wixstatic.com/media/79b798_be14756556e845bf98727e75e0e68a19%7Emv2.png/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/79b798_be14756556e845bf98727e75e0e68a19%7Emv2.png" type="image/png"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
