import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const work_sans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Library",
  description: "Prebuilt TypeScript Web Assets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://kit.fontawesome.com/5f2bb09986.js"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={work_sans.className}>{children}</body>
    </html>
  );
}
