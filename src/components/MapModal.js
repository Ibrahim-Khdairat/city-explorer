
import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'




class MapModal extends React.Component {


    render() {

        return (

            <div className="map">

                <Modal show={this.props.showMap} onHide={this.props.handleClose} >
                    <Modal.Header style={{ backgroundColor: '#b0ceff' }} closeButton>
                        <Modal.Title>{this.props.cityInformation.display_name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        Latitude : ( {this.props.cityInformation.lat} )
                        Longitude : ( {this.props.cityInformation.lon} )


                        <Card.Img style={{ boxShadow: '2px 2px 2px #ccc' }} variant="top" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.props.cityInformation.lat},${this.props.cityInformation.lon}&zoom=15`} alt={this.props.cityInformation.display_name} />


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        {/* <Button variant="primary" onClick={this.props.handleClose}>
                        Save Changes
                    </Button> */}
                    </Modal.Footer>
                </Modal>

            </div>






        )
    }
}


export default MapModal;



