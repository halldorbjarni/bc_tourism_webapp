import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {

  state = {
      mapStyle: 'mapbox://styles/mapbox/outdoors-v10',
      viewport: {
        latitude: 54,
        longitude: -133,
        zoom: 4.2,
        minZoom: 2,
        bearing: 0,
        pitch: 0,
      },
      hoverInfo: null
    };

  _onViewportChange = viewport => this.setState({viewport});

  render() {

    const {viewport, mapStyle} = this.state;

    return (
      <ReactMapGL
        {...viewport}
        width={Number(this.props.width)}
        height={Number(this.props.height)}
        mapboxApiAccessToken={'pk.eyJ1IjoiaGFsbGRvciIsImEiOiJjajV2YXB0a24wMDFwMzNtbm0zOTVwaGRxIn0.YXj7zYaIRkH477fmV-7t2Q'}
        mapStyle={mapStyle}
        onViewportChange={this._onViewportChange}
      />
    );
  }
}
