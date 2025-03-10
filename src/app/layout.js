import { Fira_Sans } from "next/font/google";  // Import Fira Sans
import "./globals.css";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: "400", // Regular weight
});

export const metadata = {
  title: "Dev Camarin",
  description: "Portfolio and Stuffs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${firaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
