
import React from 'react';
import { Card, Button } from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css';

class Error extends React.Component {

    
    render() {
        return (
            <div className = "cardcontainer">
                {this.props.showError &&
                    <Card style={{ width: '28rem', backgroundColor: 'red', boxShadow: '2px 2px 2px black' }} >

                        <Card.Body>
                            <Card.Title>Ops... You should pick a city</Card.Title>
                        </Card.Body>
                    </Card>
                }

            </div>
        )
    }
}


export default Error;
