import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "400", "700", "800"],
  variable: "--f0nt-poppins",
});

export const metadata: Metadata = {
  title: "Obida",
  description:
    "We design modern websites for companies that make your everyday work easier and represent you professionally on the Internet.",
  icons: {
    icon: "/assets/images/petebuks_transparent.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
