"use client";

export default function SearchBar({ city, setCity, onSearch, loading }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className="input-group mb-5 mx-auto" style={{ maxWidth: 460 }}>
      <input
        type="text"
        className="form-control dark-input"
        placeholder="Wpisz miasto..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="btn px-3"
        style={{ background: "#5b5bd6", color: "#fff", border: "none" }}
        onClick={onSearch}
        disabled={loading}
      >
        {loading ? <span className="spinner-border spinner-border-sm" /> : "Szukaj"}
      </button>
    </div>
  );
}
