import { ROOT_URL, FEATCH_WEATHER } from '../constants'; 
import axios from 'axios';

export default function fetchWeather(city) {
    
    const url       =   `${ROOT_URL}&q=${city},us`;
    const request   =   axios.get(url);

    return {
        type: FEATCH_WEATHER,
        payload: request
    }
}