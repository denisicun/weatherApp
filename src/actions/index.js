import axios from 'axios';

const API_KEY = '9e346d79b060fdebff67d35ebfe6c932';
const rootUrl = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const finalURL = `${rootUrl}&q=${city},us`;
  const request = axios.get(finalURL);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
