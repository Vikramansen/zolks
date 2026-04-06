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
  title: "Zolks — Trajectory testing for AI agents",
  description:
    "Unit tests were built for deterministic code. Zolks gives your agents a staging environment that mirrors production — same tools, permissions, and config — so you catch failures before your customers do.",
  openGraph: {
    title: "Zolks",
    description:
      "Trajectory testing and environment parity for AI agents. Catch tool loop failures, cost blowouts, and scope violations in staging.",
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
