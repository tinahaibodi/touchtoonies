import React, { Component } from 'react';
import data from './data.json';
import './App.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {points: data}
    console.log(this.state.points);
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        {
          this.state.points.plays.map(marker => (
              <Marker onClick={(() => window.open("http://localhost:1234", "_self")).bind(this)}
                name={'Current location'}
                position={{lat: marker["latitude"], lng: marker["longitude"]}} /> 
          ))     
        }
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDlRst-ot8PXG2GnZl_t2iKmmOleF57ENc")
})(App)
