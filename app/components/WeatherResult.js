export default function WeatherResult({ weather, error }) {
  if (error)
    return (
      <div className="alert mx-auto mb-4 text-danger bg-danger-subtle border-danger">
        {error}
      </div>
    );

  if (!weather) return null;

  return (
    <div className="result-card p-3 text-white mx-auto mb-5 w-100">
      <div className="d-flex justify-content-between align-items-start w-100 md:w-50">
        <div>
          <p className="fw-semibold mb-0 fs-4">{weather.name}</p>
          <p className="mb-3 fs-6 text-white-50">{weather.sys.country}</p>
        </div>
        <span className="temp-badge px-3 py-1">{Math.round(weather.main.temp)}°C</span>
      </div>
      <p className="mb-3 text-capitalize text-white-50">
        {weather.weather[0].description}
      </p>
      <div className="row g-2 text-center">
        {[
          { label: "Odczuwalna", value: `${Math.round(weather.main.feels_like)}°C` },
          { label: "Wilgotność", value: `${weather.main.humidity}%` },
          { label: "Wiatr", value: `${Math.round(weather.wind.speed)} m/s` },
        ].map(({ label, value }) => (
          <div className="col-4" key={label}>
            <div className="stat-box py-2">
              <p className="mb-1 text-white-50">{label}</p>
              <p className="mb-0 fw-semibold fs-6">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
