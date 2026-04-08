export default function CityGrid({ cityCards, onCityClick }) {
  if (cityCards.length === 0) return null;

  return (
    <>
      <p className="mb-3" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
        Popularne miasta
      </p>
      <div className="row g-3">
        {cityCards.map(({ name, data }) => (
          <div className="col-6 col-md-4" key={name}>
            <div className="city-mini-card p-3" onClick={() => onCityClick(data.name)}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-semibold" style={{ fontSize: 15, color: "#e8e8f0" }}>
                  {data.name}
                </span>
                <span style={{ fontSize: 18, fontWeight: 600, color: "#a5a5ff" }}>
                  {Math.round(data.main.temp)}°C
                </span>
              </div>
              <p
                className="mb-0 text-capitalize"
                style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}
              >
                {data.weather[0].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
