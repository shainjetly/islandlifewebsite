import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Island Life Travel | Luxury Maldives Travel Agency",
    template: "%s | Island Life Travel",
  },
  description:
    "Discover the Maldives with Island Life Travel. Luxury resorts, authentic guesthouses, and unforgettable island experiences curated by local experts.",
  keywords: [
    "Maldives",
    "travel agency",
    "luxury resorts",
    "island guesthouses",
    "Maldives experiences",
    "overwater villa",
    "Island Life Travel",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
