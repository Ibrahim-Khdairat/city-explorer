
import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class YelpServices extends React.Component {
    //this.props.showMovies &&

    render() {
        return (
            <div className="service" >
                {



                    <Card style={{ width: '28rem', backgroundColor: 'lightgrey', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>


                            <Card.Title>Name : {this.props.service.name}</Card.Title>

                            <Card.Text> Rating : {this.props.service.rating} </Card.Text>

                            <Card.Text> Price : {this.props.service.price} </Card.Text>

                            <Card.Text> URL : {this.props.service.url} </Card.Text>

                            <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={this.props.service.image_url} />




                        </Card.Body>
                    </Card>


                }
            </div>

        )
    }
}


export default YelpServices;
