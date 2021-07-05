
import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class WeatherCard extends React.Component {


    render() {
        return (
            <div className="cardcontainer">
                {this.props.showWeather &&
                    <Card style={{ width: '28rem', backgroundColor: '#b0ceff', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                            <Card.Title>Weather for : {this.props.cityInformation.display_name}</Card.Title>


                            {this.props.WeatherInformation.map(day =>
                                <>
                                    <Card.Text>
                                        {day.date}
                                    </Card.Text>
                                    <Card.Text>
                                        {day.description}
                                    </Card.Text>
                                </>
                            )}
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }
}


export default WeatherCard;
