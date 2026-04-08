export default function WeatherResult({ weather, error }) {
  if (error)
    return (
      <div
        className="alert mx-auto mb-4"
        style={{
          maxWidth: 460,
          background: "rgba(220,53,69,0.15)",
          border: "0.5px solid rgba(220,53,69,0.3)",
          color: "#f08080",
        }}
      >
        {error}
      </div>
    );

  if (!weather) return null;

  return (
    <div className="result-card p-3 text-white mx-auto mb-5" style={{ maxWidth: 460 }}>
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <p className="fw-semibold mb-0" style={{ fontSize: 18, color: "#e8e8f0" }}>
            {weather.name}
          </p>
          <p className="mb-3" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            {weather.sys.country}
          </p>
        </div>
        <span className="temp-badge px-3 py-1">{Math.round(weather.main.temp)}°C</span>
      </div>
      <p
        className="mb-3 text-capitalize"
        style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}
      >
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
              <p
                className="mb-1"
                style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}
              >
                {label}
              </p>
              <p className="mb-0 fw-semibold" style={{ fontSize: 14, color: "#e8e8f0" }}>
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
