import React from 'react';
import axios from 'axios';
import CityCard from './components/CityCard';
import MapModal from './components/MapModal';
import WeatherCard from './components/WeatherCard';
import MoviesCard from './components/MoviesCard';
import Error from './components/Error';
import YelpServices from './components/YelpServices';
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
      MoviesInformation: [],
      showMovies: false,
      yelpInformation: [],
      yelpShow: false,
      serviceQuery: '',
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
    console.log(responseData);
    await this.setState({
      cityInformation: responseData.data[0],
      showInformation: true,
    })

    // This for weather information  && Movies Information
    this.renderWeather();
    this.renderMovies();
  }


  // Rendering Weather (Getting Response Fron API)
  renderWeather = async () => {
    const city = this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1);

    let weatherUrl = `https://city-explorer-backend-301d25.herokuapp.com/weatherinfo?cityName=${city}&format=json`;
    // let weatherUrl = `http://localhost:3001/weatherinfo?cityName=${city}&format=json`;


    let weatherData = await axios.get(weatherUrl)
    await this.setState({
      WeatherInformation: weatherData.data,
      showWeather: true,
    })
  }


  // Rendering Movies (Getting Response From API)
  renderMovies = async () => {
    const city = this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1);

    let moviesUrl = `https://city-explorer-backend-301d25.herokuapp.com/moviesinfo?cityName=${city}&format=json`;
    // let moviesUrl = `http://localhost:3001/moviesinfo?cityName=${city}&format=json`;


    let moviesData = await axios.get(moviesUrl)
    await this.setState({
      MoviesInformation: moviesData.data,
      showMovies: true,
    })
  }





  renderYelp = async (e) => {
    e.preventDefault();
    let serviceQuery = e.target.service.value;

    const city = this.state.cityName.charAt(0).toUpperCase() + this.state.cityName.slice(1);

    // let yelpUrl = `https://city-explorer-backend-301d25.herokuapp.com/yelp?cityName=${city}&term=${serviceQuery}`

    let yelpUrl = `http://localhost:3001/yelp?cityName=${city}&&term=${serviceQuery}&format=json`;


    axios
      .get(yelpUrl)
      .then(yelpInfo => {
        this.setState({
          yelpInformation: yelpInfo.data,
          yelpShow: true
        })
      })




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

  // This Part for Rendering
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

        {this.state.showInformation &&
          <div className="yelp">
            <h3>Yelp Fusion</h3>

            <form onSubmit={this.renderYelp} >
              <input type="text" placeholder="Type of service ..." name="service" />

              <button type="submit"> Explore </button>
            </form>
            <a href="#service" >??? Go to service ???</a>
          </div>
        }

        {/* <Error showError={this.state.showError} /> */}
        <CityCard cityInformation={this.state.cityInformation} showInformation={this.state.showInformation} showMapModal={this.showMapModal} />

        <WeatherCard WeatherInformation={this.state.WeatherInformation} showWeather={this.state.showWeather} cityInformation={this.state.cityInformation} renderWeather={this.renderWeather} />


        {this.state.MoviesInformation.map(movie => {
          return (
            <MoviesCard movie={movie} showMovies={true} />
          )


        })}
        <div id="service">
          {this.state.yelpInformation.map(service => {
            return (
              <YelpServices service={service} yelpShow={this.state.yelpShow} />
            )


          })}

        </div>


        <MapModal cityInformation={this.state.cityInformation} showMap={this.state.showMap} handleClose={this.handleClose} />

      </div>
    )
  }

}


export default App;