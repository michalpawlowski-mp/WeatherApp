import "./globals.css";

export const metadata = {
  title: "WeatherApp",
  description: "Aplikacja pogodowa stworzona w Next.js z użyciem CSS i Bootstrapa",
  keywords: ["pogoda", "weather app", "next.js", "openweather"],
  authors: [{ name: "MPDEV | Michał Pawłowski", url: "https://michalpawlowski.pl/" }],
  creator: "Michał Pawłowski",
  openGraph: {
    title: "WeatherApp",
    description: "Aplikacja pogodowa stworzona w Next.js z użyciem CSS i Bootstrapa",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="vh-100 vw-100 d-flex flex-column overflow-hidden p-2 py-5 bg-dark bg-gradient">
        {children}
      </body>
    </html>
  );
}
