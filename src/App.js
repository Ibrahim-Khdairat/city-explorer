import React from 'react';
import axios from 'axios';
import CityCard from './components/CityCard';
import MapModal from './components/MapModal';
import './App.css'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      cityName: '',
      cityInformation: {},
      showInformation: false,
      showMap: false
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
      <div className = "main" >
        <div className = "form">
        <h1>City Explorer</h1>
        <p>In this page you can search for any city and show the details for it as City Name , Latitude, and Longitude</p>

        <form onSubmit={this.exploreCity}>
          <input type="text" placeholder="Name of the city" name="city" />
          <button type="submit"> Explore </button>
        </form>
        </div>

        <CityCard cityInformation={this.state.cityInformation} showInformation={this.state.showInformation} showMapModal={this.showMapModal} />

        <MapModal cityInformation={this.state.cityInformation} showMap={this.state.showMap} handleClose={this.handleClose} />


        
        {/* <h3>City Name : {this.state.cityInformation.display_name}</h3>
        <h3>Latitude : {this.state.cityInformation.lat}</h3>
        <h3>Longitude : {this.state.cityInformation.lon}</h3>

        {this.state.showInformation &&
          <img alt='' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityInformation.lat},${this.state.cityInformation.lon}&zoom=15`} />
        } */}


      </div>
    )
  }

}


export default App;