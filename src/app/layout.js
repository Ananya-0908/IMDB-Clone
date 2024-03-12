import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import Providers from '@/app/Providers';
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB Clone",
  description: "by Ananya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body>
      <Providers>
      <Header/>
      <Navbar/>
      <main>{children}</main>
      </Providers>
        </body>
    </html>
  );
}