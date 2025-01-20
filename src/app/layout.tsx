import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Import home.json content
import homeContent from "../content/pages/home.json"; // Adjust path based on your file location

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: homeContent.title, // Dynamically set metadata title
  description: homeContent.description, // Dynamically set metadata description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gif bg-cover bg-center bg-fixed`}
      >
        {/* Attach the JSON content with data-sb-object-id */}
        <div data-sb-object-id={homeContent.id}>
          <header>
            {/* Link the title field */}
            <h1 data-sb-field-path="title">{homeContent.title}</h1>
          </header>
          <main>
            {/* Optionally display the description */}
            <p data-sb-field-path="description">{homeContent.description}</p>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
