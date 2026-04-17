import "./globals.scss";

export const metadata = {
  title: "WeatherApp",
  description: "Aplikacja pogodowa stworzona w Next.js z użyciem SCSS i Bootstrapa",
  authors: [{ name: "MPDEV | Michał Pawłowski", url: "https://michalpawlowski.pl/" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="vh-100 d-flex flex-column overflow-hidden p-2 py-5 bg-dark bg-gradient ">
        {children}
      </body>
    </html>
  );
}
