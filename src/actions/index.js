import axios from 'axios';

const API_KEY = '6e9df3c832b6808bc8ac4f3ece61a769';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url =`${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request:',request);

  return{
    type : FETCH_WEATHER,
    payload : request
  };
}
