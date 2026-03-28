import {
  Playfair_Display,
  Plus_Jakarta_Sans,
  Great_Vibes,
} from "next/font/google";
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
  metadataBase: new URL('https://riyo-lukma.vercel.app'),
  title: "Undangan Digital | Riyo & Lukma",
  description: "Undangan pernikahan digital yang responsif dan mobile-friendly.",
  openGraph: {
    title: "Undangan Digital | Riyo & Lukma",
    description: "Undangan pernikahan digital yang responsif dan mobile-friendly. Hubungi 082179410376",
    url: 'https://riyo-lukma.vercel.app',
    siteName: 'Undangan Pernikahan Riyo & Lukma',
    images: [
      {
        url: '/images/berdua.jpeg', // You can change this to any image in your public/images folder like '/images/slide1.jpg'
        width: 1200,
        height: 630,
        alt: 'Riyo & Lukma Wedding',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Undangan Digital | Riyo & Lukma",
    description: "Undangan pernikahan digital yang responsif dan mobile-friendly.",
    images: ['/images/berdua.jpeg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${scriptFont.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
