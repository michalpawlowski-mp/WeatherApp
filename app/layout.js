import "./globals.scss";

export const metadata = {
  title: "WeatherApp - Twoja Prognoza Pogody",
  description: "Aplikacja pogodowa stworzona w Next.js z użyciem SCSS i Bootstrapa",
  authors: [{ name: "MPDEV | Michał Pawłowski", url: "https://michalpawlowski.pl/" }],
  icons: {
    icon: "./weatherapp.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-success">{children}</body>
    </html>
  );
}
