export default function WeatherResult({ weather, error }) {
  if (error) return <div className="alertbtn ">{error}</div>;
  if (!weather) return null;

  return (
    <div className="row justify-content-center w-100 mx-0 mb-5">
      <div className="col-11 col-md-8 col-lg-6 col-xxl-4">
        <div className="card bg-dark border border-secondary rounded-3 p-3 text-white">
          <div className="d-flex justify-content-between align-items-start w-100">
            <div>
              <p className="fw-semibold mb-0 fs-4">{weather.name}</p>
              <p className="mb-3 fs-6 text-white-50">{weather.sys.country}</p>
            </div>
            <span className="badge fs-3 fw-semibold text-primary px-3 py-2">
              {Math.round(weather.main.temp)}°C
            </span>
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
                <div className="p-3 rounded-3 bg-white bg-opacity-10 py-2">
                  <p className="mb-1 text-white-50">{label}</p>
                  <p className="mb-0 fw-semibold fs-6">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
