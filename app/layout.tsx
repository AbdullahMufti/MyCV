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
        url: "https://pps.whatsapp.net/v/t61.24694-24/227763001_1021944651926586_291083306691608058_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdSml-Rk2mDWA7jUVkIqHX4CICCwz1Pu3PI732y-nFdmlQ&oe=641D1873",
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
