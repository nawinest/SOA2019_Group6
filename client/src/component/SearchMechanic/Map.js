import React, { Component } from 'react';
import RenderMap from './RenderMap'
class Maps extends Component {
    state = {
        currentLocation: {
            lat: 0.0,
            lng: 0.0
        }
    }

    componentDidMount() {
        this.getLocation()
    }

    getLocation = () => {
        if (navigator.geolocation) {
            let self = this;
            navigator.geolocation.getCurrentPosition(function (position) {
                self.setState({ currentLocation:{
                    lat:position.coords.latitude ,
                    lng:position.coords.longitude
                } })
            });
        }
    }
    render() {
        
        
        return (
            <div className="map" id="map">
                <RenderMap center={this.state.currentLocation} list={this.props.list}/>
            </div>);
    }
}

export default Maps;