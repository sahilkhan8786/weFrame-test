import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ToggleContextProvider } from "./context/ToggleContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WeFrame Tech Internship Test",
  description: "A dashboard for internship test",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToggleContextProvider>
          <Navbar />
          <Sidebar />
          {children}
        </ToggleContextProvider>
      </body>
    </html>
  );
}
