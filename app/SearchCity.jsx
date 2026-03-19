"use client";

export default function SearchCity({ city, setCity, getWeather }) {
  return (
    <div
      className="input-group mb-4 shadow-sm rounded-pill overflow-hidden bg-white bg-opacity-10"
      style={{ backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}
    >
      <input
        className="form-control bg-transparent border-0 text-white placeholder-white py-3 ps-4"
        placeholder="Wyszukaj miasto..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="btn btn-link text-white text-decoration-none pe-4 fw-bold text-uppercase pb-2"
        type="button"
        onClick={getWeather}
      >
        <span className="opacity-75">Szukaj</span>
      </button>
    </div>
  );
}
