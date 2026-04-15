# 🌤️ Weather App

Aplikacja pogodowa zbudowana w **Next.js 16**, pobierająca dane w czasie rzeczywistym z **OpenWeatherMap API**. Umożliwia wyszukiwanie pogody dla dowolnego miasta oraz wyświetla kafelki z aktualną pogodą dla popularnych miast europejskich.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?logo=bootstrap)
![SCSS](https://img.shields.io/badge/SCSS-sass-CC6699?logo=sass)

## 🚀 Demo

🔗 [weather-app.vercel.app](https://weather-app.vercel.app)

## ✨ Funkcjonalności

- 🔍 Wyszukiwanie pogody dla dowolnego miasta na świecie
- 🌍 Kafelki z pogodą dla 6 popularnych miast (Warszawa, Londyn, Madryt, Paryż, Rzym, Berlin)
- 🌡️ Temperatura, odczuwalna, wilgotność i prędkość wiatru
- ⌨️ Wyszukiwanie przez `Enter` lub przycisk
- 💬 Opisy pogody w języku polskim
- ⚠️ Pełna obsługa błędów (brak miasta, błąd połączenia, rate limit API)
- 📱 Responsywny layout — działa na mobile i desktop

---

## 🛠️ Stack technologiczny

| Technologia        | Zastosowanie                           |
| ------------------ | -------------------------------------- |
| Next.js 16         | Framework — App Router, API Routes     |
| React 19           | UI, custom hook `useWeather`           |
| Bootstrap 5.3      | Stylowanie i responsywność             |
| SCSS               | Globalne style i nadpisania Bootstrapa |
| OpenWeatherMap API | Dane pogodowe w czasie rzeczywistym    |

---

## 📁 Struktura projektu

```
weather-app/
├── app/
│   ├── api/
│   │   └── weather/
│   │       └── route.js          # API Route — proxy do OpenWeatherMap
│   ├── components/
│   │   ├── SearchBar.jsx         # Pole wyszukiwania z obsługą Entera
│   │   ├── WeatherResult.jsx     # Wynik pogody dla szukanego miasta
│   │   └── CityGrid.jsx          # Kafelki popularnych miast
│   ├── constants/
│   │   └── cities.js             # Lista popularnych miast
│   ├── hooks/
│   │   └── useWeather.js         # Custom hook — cała logika i fetching
│   ├── layout.jsx                # Root layout
│   ├── page.jsx                  # Strona główna
│   └── globals.scss              # Globalne style SCSS
├── .env.local                    # Klucz API (nie commitować!)
└── package.json
```

---

## ⚙️ Uruchomienie lokalne

### 1. Klonowanie repozytorium

```bash
git clone https://github.com/twoj-username/weather-app.git
cd weather-app
```

### 2. Instalacja zależności

```bash
npm install
```

### 3. Zmienne środowiskowe

Utwórz plik `.env.local` w katalogu głównym projektu:

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
```

Cała logika fetchingu i stanu aplikacji jest wydzielona do custom hooka `useWeather`. Komponenty są wyłącznie prezentacyjne i nie zawierają logiki biznesowej.

---

## 👨‍💻 Autor

**Michał Pawłowski** — [michalpawlowski.pl](https://michalpawlowski.pl)
