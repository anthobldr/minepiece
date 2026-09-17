import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Bootstrap from "./bootstrap";

export const metadata: Metadata = {
  title: "Minepiece",
  description: "Serveur Onepiece minecraft",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <Bootstrap />
      <body>{children}</body>
    </html>
  );
}
