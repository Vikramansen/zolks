import type { Metadata } from "next";
import { Caveat, Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const ibmPlex = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zolks — Staging that actually matches production",
  description:
    "Mirror tools, auth, and config so your agents fail in staging, not on customers. Save engineering time and model spend.",
  openGraph: {
    title: "Zolks",
    description:
      "Prod-shaped environments for testing AI agents. Fewer incidents, faster feedback, saner bills.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlex.variable} ${caveat.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
