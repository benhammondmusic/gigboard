async function weatherByLocation(location) {
  const { REACT_APP_WEATHER_API_KEY } = process.env;

  // console.log(REACT_APP_WEATHER_API_KEY);

  let endpoint = `https://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_API_KEY}&q=${location}&aqi=no`;

  return await fetch(endpoint, { mode: 'cors' }).then((res) => res.json());
}

export { weatherByLocation };
