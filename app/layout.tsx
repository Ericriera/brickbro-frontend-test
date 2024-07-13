import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SearchProvider } from "@/providers/search-provider";
import MapProvider from "@/providers/map-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brickbro",
  description: "Brickbro Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SearchProvider>
        <MapProvider>
          <body className={inter.className}>{children}</body>
        </MapProvider>
      </SearchProvider>
    </html>
  );
}
