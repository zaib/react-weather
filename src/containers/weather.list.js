import React, {Component} from 'react';
import { connect } from 'react-redux';

import WeatherListItem from '../components/weather.list.item';

class WeatherList extends Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.weather.map(data => {
                            return <WeatherListItem key={Math.random()} data={data} />
                        }
                    )}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherList);