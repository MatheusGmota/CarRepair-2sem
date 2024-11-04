import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cair Repair",
  description: "Uma aplicação que gera orçamentos assertivos para reparos mecânicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-black-russian grid grid-rows-[6.3em_1fr_50px] items-center justify-items-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
