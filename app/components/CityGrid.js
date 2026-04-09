export default function CityGrid({ cityCards, onCityClick }) {
  if (cityCards.length === 0) return null;

  return (
    <>
      <p className="mb-3 fs-6 text-white-50">Popularne miasta</p>
      <div className="row g-3">
        {cityCards.map(({ name, data }) => (
          <div className="col-6 col-md-4" key={name}>
            <div className="city-mini-card p-3" onClick={() => onCityClick(data.name)}>
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-semibold fs-6 text-white">{data.name}</span>
                <span className="fs-5 fw-bold text-primary">
                  {Math.round(data.main.temp)}°C
                </span>
              </div>
              <p className="mb-0 text-capitalize fs-6 text-white-50">
                {data.weather[0].description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
