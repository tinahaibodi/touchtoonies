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

  onClickHandler = (e) => {
    var points = this.state.points.plays.filter(x => x.latitude === e.latitude).filter(x => x.longitude === e.longitude)

    var groupBy = function(xs, key) {
      return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
      }, {});
    };

    var groupedBy = groupBy(points, "songId");
    
    var results = []

    Object.keys(groupedBy).forEach(x => {
      results.push({"key": x, "value": groupedBy[x]})
    });

    var sortResults = results.sort((a,b) => {
        if (a.value.length < b.value.length)
          return -1;
        if (a.value.length > b.value.length1)
          return 1;
        return 0;
    }).reverse();
    window.open("http://localhost:1234/?q=[" + sortResults.map(x => "\"" + x.key + "\"").toString() + "]", "_self")
  };

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        {
          this.state.points.plays.map(marker => (
              <Marker onClick={this.onClickHandler.bind(this, marker)}
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
