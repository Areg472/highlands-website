import "./globals.css";
import ThemeProvider from "./theme-provider";

export const metadata = {
  title: "Highlands YSWS!",
  description: "A mountain themed You Ship We Ship!",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
