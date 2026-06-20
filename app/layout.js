import { Roboto_Mono, Roboto_Slab } from "next/font/google";
import "./globals.css";

const robotoSans = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Highlands YSWS!",
  description: "A mountain themed You Ship We Ship!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${robotoSans.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
