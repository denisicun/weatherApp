import React, { Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import _ from 'lodash';
import GoogleMap from '../components/map';

class WeatherList extends Component{
  renderWeather(cityData){
    const cityName = cityData.city.name;
    const tempsData = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressureData = cityData.list.map(weather => weather.main.pressure);
    const humidityData = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={tempsData} color="green" units="C"/></td>
        <td><Chart data={pressureData} color="blue" units="hPa"/></td>
        <td><Chart data={humidityData} color="orange" units="%"/></td>
      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temprature (C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
