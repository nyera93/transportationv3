import React from 'react';
import ReactDOM from 'react-dom';

class Map extends React.Component{

  componentDidMount(){
    this.loadMap();
    this.forceUpdate();
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.google !== this.props.google){
      console.log('updating props');
      this.loadMap();
    }
  }

  loadMap(){
    if(this.props && this.props.google){
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom =14;
      let lat = 37.774929;
      let lng = -122.419416;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
      console.log(this.map);
    }
  }

  render(){
    return (
      <div ref="map">map will come here</div>
    );
  }
}

export default Map;
