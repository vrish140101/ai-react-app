const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getWeatherInsights(weather) {
  const prompt = `
You are an intelligent weather assistant.

Weather Details:
City: ${weather.location.name}
Temperature: ${weather.current.temp_c}°C
Condition: ${weather.current.condition.text}
Humidity: ${weather.current.humidity}%
Wind Speed: ${weather.current.wind_kph} km/h
UV Index: ${weather.current.uv}

Give exactly 5 recommendations.

Return ONLY plain text.

Format exactly like this:

Clothing: ...
Travel: ...
Outdoor Activities: ...
Health: ...
Safety: ...

Do not use markdown.
Do not use **.
Do not use bullet points.
Keep each recommendation under 20 words.
`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();

  return data.candidates[0].content.parts[0].text;
}