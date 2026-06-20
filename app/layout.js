import "./globals.css";

export const metadata = {
  title: "Highlands YSWS!",
  description: "A mountain themed You Ship We Ship!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
