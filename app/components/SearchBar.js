"use client";

export default function SearchBar({ city, setCity, onSearch, loading }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className="row justify-content-center w-100 mx-0 mt-2 mb-5">
      <div className="col-11 col-md-8 col-lg-6 col-xxl-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-dark text-light border-secondary"
            placeholder="Wpisz miasto..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="btn px-4 text-white border-0 bg-secondary"
            onClick={onSearch}
            disabled={loading}
          >
            {loading ? <span className="spinner-border spinner-border-sm" /> : "Szukaj"}
          </button>
        </div>
      </div>
    </div>
  );
}
