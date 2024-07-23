import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/PageSections/Footer";
import Chat from "./components/Chat/Chatbot";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Luis Molinuevo",
  description: "Luis Molinuevo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="min-h-screen bg-[#e5e5e5] text-[black] min-h-screen"> */}
        <div className="bg-background min-h-screen text-primary flex flex-col">
          <Navbar />
          {/* {children} */}
          <main className="flex-grow">{children}</main>
          <Chat />
          <Footer />
        </div>
      </body>
    </html>
  );
}
