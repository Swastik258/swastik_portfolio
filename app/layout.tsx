import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://swastikpradhan.dev"),
  title: {
    default: "Swastik Pradhan | DevOps / SRE Engineer",
    template: "%s | Swastik Pradhan",
  },
  description:
    "Swastik Pradhan is a DevOps / Site Reliability Engineer building resilient CI/CD pipelines, cloud automation, and observability that reduce deployment and incident response times.",
  keywords: [
    "DevOps Engineer",
    "SRE",
    "AWS",
    "Azure",
    "Terraform",
    "Kubernetes",
    "Observability",
    "CI/CD",
    "Portfolio",
  ],
  openGraph: {
    title: "Swastik Pradhan | DevOps / SRE Engineer",
    description:
      "Production-minded DevOps and SRE portfolio focused on resilient pipelines, cloud automation, and observability.",
    url: "https://swastikpradhan.dev",
    siteName: "Swastik Pradhan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swastik Pradhan | DevOps / SRE Engineer",
    description:
      "I build resilient CI/CD pipelines, automate infrastructure, and ship observability that cuts release and incident response times.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#121513] text-stone-100">{children}</body>
    </html>
  );
}
