import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zolks — Cost observability for AI agents",
  description:
    "Your agents are burning tokens right now. Zolks shows you which ones in real time, with the context to actually fix it.",
  openGraph: {
    title: "Zolks",
    description:
      "Cost observability for agents. Attribute spend, detect anomalies, and stop runaway loops before the bill lands.",
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
      className={`${fraunces.variable} ${ibmPlex.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="relative min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
