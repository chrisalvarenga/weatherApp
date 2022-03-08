import logo from './logo.svg';
import './App.css';
import WeatherInfo from './components/WeatherInfo';
import WeatherForm from './components/WeatherForm';
import { Component } from 'react';
import {WEATHER_KEY} from './keys';

class App extends Component {

  state = {
    temperature: '',
    description: '',
    humidity: '',
    wind_speed: '',
    city: '',
    country: '',
    error: null
  }

  getWeather = async (e) =>{
    e.preventDefault();
    const {city, country} = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    const id = 'e3341daf305e4f60db08dd06c561e00b';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
    if(cityValue && countryValue){
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      city: data.name,
      country: data.sys.country,
      error: null
    });
    }else {
      this.setState({error: 'Please enter a country and city'})
    }
}
  render(){
  return (
    <div className="App">
      <div className='container p-4'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <div className='mb-4'>
              <h2>WeatherApp</h2>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCUL0kJOFezSV6YWQY_1LBPaYJc8OpMsyPw&usqp=CAU' />
            </div>
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo {...this.state}></WeatherInfo>
            
          </div>
        </div>

      </div>
    </div>
  );
}
}

export default App;
