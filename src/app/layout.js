import "./globals.css";
import Header from "@/Components/Header";
import { Inter } from "next/font/google";
export const metadata = {
  title: "Note App",
  description: "Create and manage your notes easily",
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Shared Header */}
        <main>{children}</main> {/* Replaces all individual page content */}
      </body>
    </html>
  );
}
