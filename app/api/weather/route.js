const API_KEY = process.env.OPENWEATHER_API_KEY;
const API_BASE = "https://api.openweathermap.org/data/2.5/";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city")?.trim();

    if (!city || city.length > 100) {
      return new Response(
        JSON.stringify({ error: "Brak lub nieprawidłowy parametr city" }),
        {
          status: 400,
        },
      );
    }

    const encodedCity = encodeURIComponent(city);
    const weatherUrl = `${API_BASE}weather?q=${encodedCity}&appid=${API_KEY}&units=metric&lang=pl`;

    const res = await fetch(weatherUrl);

    if (!res.ok) {
      const errorMap = {
        400: "Błędne zapytanie",
        401: "Zły API key",
        403: "Brak dostępu",
        404: "Miasto nie istnieje",
        429: "Rate limit",
        500: "Błąd serwera",
      };

      const message = errorMap[res.status] || "Nieznany błąd";
      return new Response(JSON.stringify({ error: message }), { status: res.status });
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Błąd serwera", details: err.message }), {
      status: 500,
    });
  }
}
