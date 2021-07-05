import React from 'react';
import axios from 'axios';
import CityCard from './components/CityCard';
import MapModal from './components/MapModal';
import WeatherCard from './components/WeatherCard';
import Error from './components/Error';
import './App.css'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      cityName: '',
      cityInformation: {},
      showInformation: false,
      showMap: false,
      WeatherInformation: [],
      showWeather: false,
      showError: false
    }
  }

  // This Function used to take the value from the form and render the result
  exploreCity = async (e) => {
    e.preventDefault();

    await this.setState({
      cityName: e.target.city.value.toLowerCase()
    })

    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.cityName}&format=json`;

    let responseData = await axios.get(url);

    await this.setState({
      cityInformation: responseData.data[0],
      showInformation: true,
    })


    // This for weather information 
    this.renderWeather();
  }



  renderWeather = async () => {
    const city = this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1);

    let weatherUrl = `https://city-explorer-backend-301d25.herokuapp.com/weatherinfo?cityName=${city}&format=json`;

    let weatherData = await axios.get(weatherUrl)
    await this.setState({
      WeatherInformation: weatherData.data,
      showWeather: true,
    })

    console.log(this.state.WeatherInformation.map(day => day.description))

  }




  // This function response to show the map modal
  showMapModal = async () => {
    await this.setState({
      showMap: true,
    })
  }

  handleClose = () => {
    this.setState({
      showMap: false,
    })
  }

  render() {
    return (
      <div className="main" >
        <div className="form">
          <h1>City Explorer</h1>
          <p>In this page you can search for any city and show the details for it as City Name , Latitude, and Longitude</p>

          <form onSubmit={this.exploreCity} >
            <input type="text" placeholder="Name of the city" name="city" />
            <button type="submit"> Explore </button>
          </form>
        </div>

        {/* <p>{this.state.WeatherInformation.map (day => day.description) } </p> */}

        {/* <Error showError={this.state.showError} /> */}
        <CityCard cityInformation={this.state.cityInformation} showInformation={this.state.showInformation} showMapModal={this.showMapModal} />

        <WeatherCard WeatherInformation={this.state.WeatherInformation} showWeather={this.state.showWeather} cityInformation={this.state.cityInformation} renderWeather={this.renderWeather} />

        <MapModal cityInformation={this.state.cityInformation} showMap={this.state.showMap} handleClose={this.handleClose} />






      </div>
    )
  }

}


export default App;