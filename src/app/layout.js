import localFont from "next/font/local";
import "./globals.css";

// import { ActiveChain, clientId } from "./lib/constants";
// import { ThirdwebProvider } from "@thirdweb-dev/react";
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

export const metadata = {
  title: "Great-Gonzo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}
      antialiased`}
      >
        {/* <ThirdwebProvider activeChain={ActiveChain} clientId={clientId}> */}
        {children}
        {/* </ThirdwebProvider> */}
      </body>
    </html>
  );
}
