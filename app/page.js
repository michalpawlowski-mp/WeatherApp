"use client";
import { useSearch } from "./hooks/useSearch";
import { useCityCards } from "./hooks/useCityCards";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import CityGrid from "./components/CityGrid";
import Image from "next/image";
import ImageApp from "./assets/image.png";

export default function WeatherApp() {
  const { city, setCity, weather, error, loading, fetchWeather } = useSearch();
  const { cityCards, loadingCards } = useCityCards();

  function handleCityClick(name) {
    setCity(name);
    fetchWeather(name);
  }

  return (
    <>
      <header className="d-flex w-100 justify-content-center align-items-center gap-4 pb-4">
        <Image src={ImageApp} alt="Ikona aplikacji pogodowej" width={48} height={48} />
        <h1 className="text-center text-light fs-1 fw-semibold">Aplikacja pogodowa</h1>
      </header>
      <main>
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={() => fetchWeather(city)}
          loading={loading}
        />
        <WeatherResult weather={weather} error={error} />
        <CityGrid
          cityCards={cityCards}
          loadingCards={loadingCards}
          onCityClick={handleCityClick}
        />
      </main>
    </>
  );
}
