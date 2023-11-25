import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/global/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Raiyan",
  description: "Raiyan Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-neutral-950 relative text-neutral-100 font-light`}>
        <Sidebar />
        <main className="absolute lg:w-3/4 right-0 max-lg:left-0 top-0 text-sm">{children}</main>
      </body>
    </html>
  );
}
