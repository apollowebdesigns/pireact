import React, { Component } from 'react';
import './Heading.scss';

class Heading extends Component {
    render() {
        return (
            <div>
                <nav class="white first" role="navigation">
                    <div class="nav-wrapper container">
                        <a id="logo-container" href="#" class="brand-logo">Raspberry Pi</a>
                        <ul class="right hide-on-med-and-down">
                            <li><a ui-sref="home">Home</a></li>
                            <li><a ui-sref="orders" id="ordersnav">Move!</a></li>
                            <li><a ui-sref="map" id="mapnav">Map</a></li>
                            <li><a ui-sref="about" id="aboutnav">About</a></li>
                            <li><a ng-click="appCtrl.killPi()">Exit Server</a></li>
                        </ul>

                        <ul id="nav-mobile" class="side-nav background">
                            <li><h3 class="font-black container top-space">Raspberry Pi Options</h3></li>
                            <li><a ui-sref="home" class="container top-space">Home</a></li>
                            <li><a ui-sref="orders" class="container top-space">Move!</a></li>
                            <li><a ui-sref="map" class="container top-space">Map</a></li>
                            <li><a ui-sref="about" class="container top-space">About</a></li>
                            <li><a class="container top-space" ng-click="appCtrl.killPi()">Exit Server</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" class="button-collapse" id="navmob"><i class="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Heading;
