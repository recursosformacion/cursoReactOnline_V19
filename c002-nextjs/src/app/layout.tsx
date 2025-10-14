import BarraNavegacion from "@/ui/BarraNavegacion";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="principal">
          <nav className="navegacion">
            <BarraNavegacion />
          </nav>

          <main className="contenido">{children}</main>
        </div>
      </body>
    </html>
  );
}
