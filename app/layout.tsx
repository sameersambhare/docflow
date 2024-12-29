import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import Provider from "./Provider";
import "./globals.css";
import { cn } from "@/lib/utils";
import { dark } from "@clerk/themes";
const fontSans = FontSans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocFlow",
  description: "Your go-to collaborative editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
      variables: { colorPrimary: "#3371FF", fontSize: '16px' }
    }}>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn("min-h-screen font-sans antialiased")}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>

  );
}
