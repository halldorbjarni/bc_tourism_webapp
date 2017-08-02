import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

export default class Map extends Component {
  render() {
    return (
      <ReactMapGL
        width={Number(this.props.width)}
        height={Number(this.props.height)}
        latitude={53.7577}
        longitude={-123.4376}
        zoom={3}
        mapboxApiAccessToken={'pk.eyJ1IjoiaGFsbGRvciIsImEiOiJjajV2YXB0a24wMDFwMzNtbm0zOTVwaGRxIn0.YXj7zYaIRkH477fmV-7t2Q'}
        mapStyle={'mapbox://styles/mapbox/outdoors-v10'}
        onViewportChange={(viewport) => {
          const {width, height, latitude, longitude, zoom} = viewport;
          // Optionally call `setState` and use the state to update the map.
        }}
      />
    );
  }
}
