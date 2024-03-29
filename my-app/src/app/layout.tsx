import type { Metadata } from "next";
import { Cabin, Inter } from "next/font/google";
import Header from "./components/Header";


const inter = Cabin({ subsets: ["latin"], weight:"500"});

export const metadata: Metadata = {
  title: "SLT",
  description: "SLT ONLINE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
