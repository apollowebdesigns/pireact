import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <nav className="white first" role="navigation">
                    <div className="nav-wrapper container">
                        <a id="logo-container" href="#" className="brand-logo">Raspberry Pi</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a ui-sref="home">Home</a></li>
                            <li><a ui-sref="orders" id="ordersnav">Move!</a></li>
                            <li><a ui-sref="map" id="mapnav">Map</a></li>
                            <li><a ui-sref="about" id="aboutnav">About</a></li>
                            <li><a ng-click="appCtrl.killPi()">Exit Server</a></li>
                        </ul>

                        <ul id="nav-mobile" className="side-nav background">
                            <li><h3 className="font-black container top-space">Raspberry Pi Options</h3></li>
                            <li><a ui-sref="home" className="container top-space">Home</a></li>
                            <li><a ui-sref="orders" className="container top-space">Move!</a></li>
                            <li><a ui-sref="map" className="container top-space">Map</a></li>
                            <li><a ui-sref="about" className="container top-space">About</a></li>
                            <li><a className="container top-space" ng-click="appCtrl.killPi()">Exit Server</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse" id="navmob"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
