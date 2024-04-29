import React from "react";
import type { Metadata } from "next";
import { Lora, Cormorant_Garamond, Nunito } from "next/font/google";
import "./globals.scss";
import { CSSProperties } from "react";
import Header from "./components/header/Header";

const lora = Lora({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Elysia Media Project",
  description:
    "Elysia Media is a VTuber project by VTuber enthusiasts.Join us as we find paradise in the virtual realm!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={lora.className}
        style={
          {
            "--fontMain": lora.style.fontFamily,
            "--fontSecondary": cormorant.style.fontFamily,
            "--fontAlt": nunito.style.fontFamily,
          } as CSSProperties
        }
      >
        <img src="/decors/decor-floor.png" alt="" className="decor-floor" />
        <Header />
        {children}
      </body>
    </html>
  );
}
