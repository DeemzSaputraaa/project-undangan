import { Playfair_Display, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Undangan Digital | Riyo & Lukmaniati",
  description: "Undangan pernikahan digital yang responsif dan mobile-friendly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
