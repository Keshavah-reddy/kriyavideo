import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kriya Meet - Branded Meeting Platform",
  description: "White-label meetings for modern teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen custom-scrollbar">
        {children}
      </body>
    </html>
  );
}
