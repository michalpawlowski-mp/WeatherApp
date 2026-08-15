# 🌤️ Weather App

Aplikacja pogodowa zbudowana w **Next.js 16**, pobierająca dane w czasie rzeczywistym z **OpenWeatherMap API**. Umożliwia wyszukiwanie pogody dla dowolnego miasta oraz wyświetla kafelki z aktualną pogodą dla popularnych miast z Europy, USA i Azji.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel)](https://weather-app-mpdev.vercel.app/)

## 🚀 Demo

🔗 [Live Demo](https://weather-app-mpdev.vercel.app/)

## ✨ Funkcjonalności

- 🔍 Wyszukiwanie pogody dla dowolnego miasta na świecie
- 📍 Pobieranie pogody dla bieżącej lokalizacji użytkownika
- 🌍 Kafelki z aktualną pogodą dla popularnych miast z Europy, USA i Azji
- 🌡️ Temperatura, odczuwalna, wilgotność i prędkość wiatru
- ⌨️ Wyszukiwanie przez `Enter` lub przycisk
- 💬 Opisy pogody w języku polskim
- ⚠️ Pełna obsługa błędów (brak miasta, błąd połączenia, brak zgody na lokalizację, rate limit API)
- 📱 Responsywny layout — działa na mobile i desktop
- 📄 Atrybucja danych zgodna z warunkami OpenWeatherMap

---

## 🛠️ Stack technologiczny

| Technologia        | Zastosowanie                                  |
| ------------------ | --------------------------------------------- |
| Next.js 16         | Framework — App Router, API Routes            |
| React 19           | UI, custom hooki `useSearch` i `useCityCards` |
| Bootstrap 5.3      | Stylowanie i responsywność                    |
| OpenWeatherMap API | Dane pogodowe w czasie rzeczywistym           |

---

## 🗂️ Struktura projektu

```
app/
├── api/weather/     # Route handler (proxy do OpenWeatherMap)
├── components/      # Komponenty prezentacyjne
├── constants/       # Lista popularnych miast
├── hooks/           # useSearch, useCityCards
└── assets/          # Obrazki
```

---

## ⚙️ Uruchomienie lokalne

### 1. Klonowanie repozytorium

```bash
git clone https://github.com/michalpawlowski-mp/WeatherApp.git
cd WeatherApp
```

### 2. Instalacja zależności

```bash
npm install
```

### 3. Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij klucz API:

```env
OPENWEATHER_API_KEY=twoj_klucz_api
```

> Klucz API wygenerujesz bezpłatnie na [openweathermap.org](https://openweathermap.org/api)

### 4. Uruchomienie

```bash
npm run dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

---

## 🔑 Zmienne środowiskowe

| Zmienna               | Opis                        | Wymagana |
| --------------------- | --------------------------- | -------- |
| `OPENWEATHER_API_KEY` | Klucz do OpenWeatherMap API | ✅ Tak   |

---

## 🏗️ Architektura

Aplikacja używa **Next.js API Route** jako proxy do OpenWeatherMap — klucz API nigdy nie trafia do przeglądarki użytkownika.

```
Przeglądarka → /api/weather?city=Warszawa → OpenWeatherMap API
Przeglądarka → /api/weather?lat=52.23&lon=21.01 → OpenWeatherMap API
```

Logika aplikacji jest podzielona na dwa custom hooki:

- `useSearch` — wyszukiwanie pogody dla wybranego miasta oraz pobieranie pogody na podstawie geolokalizacji (`navigator.geolocation`)
- `useCityCards` — równoległe ładowanie pogody dla popularnych miast (`Promise.all`)

Komponenty są wyłącznie prezentacyjne i nie zawierają logiki biznesowej.

---

## 👨‍💻 Autor

**Michał Pawłowski** — [michalpawlowski.pl](https://michalpawlowski.pl)
