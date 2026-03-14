"use client";

export default function SearchCity({ city, setCity, getWeather }) {
  return (
    <div className="input-group mb-3">
      <input
        className="form-control"
        placeholder="Wyszukaj miasto"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button className="btn btn-primary" onClick={getWeather}>
        Wyszukaj
      </button>
    </div>
  );
}
