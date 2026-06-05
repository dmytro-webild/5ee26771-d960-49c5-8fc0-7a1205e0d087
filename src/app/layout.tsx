import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Libre_Baskerville } from "next/font/google";



export const metadata: Metadata = {
  title: 'MAMUN AKHTAR | Interactive 3D Portfolio',
  description: 'Showcasing Mamun Akhtar\'s full-stack development and editing work through dynamic 3D animations and immersive digital experiences.',
  keywords: ["Mamun Akhtar, portfolio, 3D animation, interactive, full stack developer, editor, web development, UI/UX, tech, creative"],
  openGraph: {
    "title": "MAMUN AKHTAR | Interactive 3D Portfolio",
    "description": "Showcasing Mamun Akhtar's full-stack development and editing work through dynamic 3D animations and immersive digital experiences.",
    "url": "/",
    "siteName": "MAMUN AKHTAR Portfolio",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/aesthetic-background-with-light-sunset-projector-lamp_53876-108129.jpg",
        "alt": "Interactive 3D Animated Portfolio Background"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "MAMUN AKHTAR | Interactive 3D Portfolio",
    "description": "Showcasing Mamun Akhtar's full-stack development and editing work through dynamic 3D animations and immersive digital experiences.",
    "images": [
      "http://img.b2bpic.net/free-photo/aesthetic-background-with-light-sunset-projector-lamp_53876-108129.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${libreBaskerville.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
