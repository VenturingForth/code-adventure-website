import type { Metadata } from "next";
import "./globals.css";
import { raleway } from "./ui/fonts";
import Header from "./ui/header";
import NavBar from "./ui/navbar";
import Contact from "./ui/contact";
import Footer from "./ui/footer";

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
      <body className={raleway.className}>
        <Header />
        <NavBar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
