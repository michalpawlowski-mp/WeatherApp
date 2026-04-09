"use client";

export default function SearchBar({ city, setCity, onSearch, loading }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className="input-group mb-5 mx-auto mt-2 w-100">
      <input
        type="text"
        className="form-control dark-input"
        placeholder="Wpisz miasto..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn px-3 text-white boder-0 bg-secondary"
        onClick={onSearch}
        disabled={loading}
      >
        {loading ? <span className="spinner-border spinner-border-sm" /> : "Szukaj"}
      </button>
    </div>
  );
}
