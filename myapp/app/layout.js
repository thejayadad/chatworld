import { Inter } from "next/font/google";
import "./globals.css";
import { NextThemeProvider } from "@/lib/NextThemeProvider";
import AuthProvider from "@/SessionProvider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={(inter.className, "dark")}
    style={{
      colorScheme: "dark",
    }}
    >
      <body>
        <AuthProvider>
        <NextThemeProvider>
        {children}
        </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
