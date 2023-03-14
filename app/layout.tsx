import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resume Abdullah Mufti",
  description: "This app was developedby Abdullah Mufti",
  openGraph: {
    title: "Resume Abdullah Mufti",
    description: "This app was developedby Abdullah Mufti",
    images: [
      {
        url: "/mypic.jpeg",
        width: 200,
        height: 200,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
