import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CarRepair",
  description: "Uma aplicação que gera orçamentos assertivos para reparos mecânicos",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
