import type { Metadata } from "next";
import { DM_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });
export const metadata: Metadata = { title: "Vũ Thị Lan Anh — Content Creator", description: "AI-powered content marketing portfolio of Vũ Thị Lan Anh." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${inter.variable} ${mono.variable}`}><body>{children}</body></html>; }
