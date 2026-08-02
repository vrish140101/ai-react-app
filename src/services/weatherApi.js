const API_KEY = "1b92935075404f79bac143914260208";

export async function getWeather(city) {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=yes&alerts=no`;

  console.log(url); // Debug

  const response = await fetch(url);

  const data = await response.json();

  console.log(data); // Debug

  if (!response.ok) {
    throw new Error(data.error?.message || "City not found");
  }

  return data;
}