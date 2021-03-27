async function weatherByLocation(location) {
  let endpoint = `https://api.weatherapi.com/v1/current.json?key=627d050e37f6439592435238212603&q=${location}&aqi=no`;

  return await fetch(endpoint, { mode: 'cors' }).then((res) => res.json());
}

export { weatherByLocation };
