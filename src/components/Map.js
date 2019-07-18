import React from 'react';

export default class Map extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p>{this.props.latitude}</p>
        <p>{this.props.longitude}</p>
        <p> <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.latitude}%2c%20${this.props.longitude}&zoom=13&size=600x300&maptype=roadmap&key=${process.env.GEOCODE_API_KEY}`} alt="Google Maps" /></p>
      </React.Fragment>
    );
  }
}
