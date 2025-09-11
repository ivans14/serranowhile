import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./comps/Navbar";
import Footer from "./comps/Footer";
import ContextProvider from "./comps/context";

export const metadata: Metadata = {
  title: "Serrano While",
  description:
    "Soluciones profesionales integrales para empresas, directivos y particulares. Consultoría, fiscalidad, procesos y estrategia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex items-center flex-col min-h-[100vh]`}>
        <ContextProvider>
          <Navbar />
          {children}

          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
