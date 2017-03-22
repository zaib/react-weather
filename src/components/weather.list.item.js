import React from 'react';
import Chart from './weather.chart';
import GoogleMap from './google.map';

const WeatherListItem = (props) => {
    let data    = props.data;
    
    // let name    =   data.city.name
    let id      =   data.city.id + Math.random();
    
    let temp        =   data.list.map(item => item.main.temp);
    let pressure    =   data.list.map(item => item.main.pressure);
    let humidity    =   data.list.map(item => item.main.humidity);

    let { lat, lon } = data.city.coord;

    let width = 60, height = 60;

    return (
        <tr key={id}>
            <td><GoogleMap lat={lat} lng={lon} /></td>
            <td><Chart width={width} height={height} data={temp} color="red" unit="K" /></td>
            <td><Chart width={width} height={height} data={pressure} color="green" unit="hPa" /></td>
            <td><Chart width={width} height={height} data={humidity} color="blue" unit="%" /></td>
        </tr>
    )
}

export default WeatherListItem;

