import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Note App",
  description: "Create and manage your notes easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Shared Header */}
        <main>{children}</main> {/* Replaces all individual page content */}
      </body>
    </html>
  );
}
