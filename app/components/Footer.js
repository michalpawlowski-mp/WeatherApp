export default function Footer() {
  return (
    <footer className="text-center text-white-50 py-2 mt-auto border-top border-opacity-10">
      <p className="mb-1">
        Dane pogodowe pochodzą z
        <a
          href="https://openweathermap.org"
          className="text-white-50 mx-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenWeatherMap
        </a>
        i są odświeżane w czasie rzeczywistym.
      </p>
      <p className="mb-0 text-secondary">© {new Date().getFullYear()} Michał Pawłowski</p>
    </footer>
  );
}
