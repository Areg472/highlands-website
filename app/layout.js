import "./globals.css";
import ThemeProvider from "./theme-provider";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  applicationName: "Highlands YSWS",
  title: {
    default: "Highlands YSWS",
    template: "%s | Highlands YSWS",
  },
  description:
    "A mountain-themed You Ship We Ship program where coding hours earn prizes and a chance to visit Yerevan, Armenia.",
  keywords: [
    "Highlands",
    "YSWS",
    "You Ship We Ship",
    "Hack Club",
    "coding",
    "Yerevan",
    "Armenia",
  ],
  openGraph: {
    title: "Highlands YSWS",
    description:
      "Code, climb digital mountains, earn prizes, and work toward a trip to Yerevan.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Highlands YSWS",
    description:
      "Code, climb digital mountains, earn prizes, and work toward a trip to Yerevan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
