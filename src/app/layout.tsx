import "./globals.css";
import '@mantine/core/styles.css';
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hotel Devdaha & Restaurant",
  description: "Most luxurious hotel in Kathmandu - Hotel Devdaha & Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
         <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <MantineProvider
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
