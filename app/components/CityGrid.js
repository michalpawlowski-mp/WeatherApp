export default function CityGrid({ cityCards, onCityClick }) {
  if (cityCards.length === 0) return null;

  return (
    <div className="row justify-content-center w-100 mx-0 mt-2 mb-5">
      <div className="col-11 col-md-8 col-lg-6 col-xxl-4">
        <p className="mb-3 fs-6 text-white-50">Popularne miasta</p>
        <div className="row g-3">
          {cityCards.map(({ name, data }) => (
            <div className="col-6" key={name}>
              <div
                className="card bg-dark border border-secondary rounded-3 p-3 h-100"
                style={{ cursor: "pointer" }}
                onClick={() => onCityClick(data.name)}
              >
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <span className="fw-semibold fs-6 text-white text-truncate me-2">
                    {data.name}
                  </span>
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
      </div>
    </div>
  );
}
