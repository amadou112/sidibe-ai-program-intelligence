import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sidibe Enterprises | AI Program Intelligence Platform",
  description:
    "Empowering organizations with AI-driven insights to manage programs, automate processes, and accelerate strategic outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
