import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./styles/globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kangs Tour",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="main-layout">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
