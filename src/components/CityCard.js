
import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class CityCard extends React.Component {

    render() {
        return (
            <div className = "cardcontainer">
                {this.props.showInformation &&
                    <Card style={{ width: '28rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                            <Card.Title>City Nmae : {this.props.cityInformation.display_name}</Card.Title>
                            {/* <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityInformation.lat},${this.props.cityInformation.lon}&zoom=15`} alt={this.props.cityInformation.display_name} /> */}
                            <Card.Text>
                                Latitude :  {this.props.cityInformation.lat}
                            </Card.Text>
                            <Card.Text>
                                Latitude :  {this.props.cityInformation.lon}
                            </Card.Text>
                            <Card.Text>
                                To see the map please click on Show Map
                            </Card.Text>

                            <Button variant="primary" onClick={this.props.showMapModal}>Show Map</Button>
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }
}


export default CityCard;
