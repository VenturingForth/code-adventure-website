import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Code Adventure",
  description: "The home of Joshua Robinson's coding journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
