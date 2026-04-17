"use client";
import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherResult from "./components/WeatherResult";
import CityGrid from "./components/CityGrid";
import Image from "next/image";
import ImageApp from "./assets/image.png";

export default function WeatherApp() {
  const {
    city,
    setCity,
    weather,
    error,
    loading,
    cityCards,
    fetchWeather,
    handleCityClick,
  } = useWeather();

  return (
    <>
      <div className="d-flex w-100 justify-content-center align-items-center gap-4 pb-4">
        <Image src={ImageApp} alt="Opis zdjęcia" width={48} height={48} />
        <h1 className="text-center text-light fs-1 fw-semibold">Aplikacja pogodowa</h1>
      </div>
      <SearchBar
        city={city}
        setCity={setCity}
        onSearch={() => fetchWeather(city)}
        loading={loading}
      />
      <WeatherResult weather={weather} error={error} />
      <CityGrid cityCards={cityCards} onCityClick={handleCityClick} />
    </>
  );
}
