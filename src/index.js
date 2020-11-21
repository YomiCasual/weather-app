import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Navbar from './components/Navbar'
import Weather from './components/Weather'
import Input from './components/Input'

class App extends Component {

  state ={
    cityName: "",
    cityWeather: {},
    loading: false,
    error: false
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  fetchItem = () => {
    const { cityName } = this.state

      this.setState({
        loading: true
      })

      const searchItem = async(cityName) => {
      const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_CLIENT_ID}`);

     const response = await request.json()
     const data = response
      
     const {name} = data
     const {humidity, pressure, temp} = data.main
     const {description} = data.weather[0]
     const { lat, lon } = data.coord

     return {name, humidity, pressure, temp, description, lat, lon}
    }

    

    searchItem(cityName).then(data => {
      this.setState({
        cityName: '',
        cityWeather: data,
        error: false,
        loading: false,
      })
    }).catch(err =>{
      this.setState({
        error: true,
        loading: false,
      })
    })
   
  }
  render() {

    return (
      <div>
      <Navbar header="Weather App"/>
      <Input 
      handleInput={this.handleInput}
      fetchItem={this.fetchItem}
      state={this.state}
       />
      <Weather cityWeather={this.state.cityWeather} state={this.state}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
