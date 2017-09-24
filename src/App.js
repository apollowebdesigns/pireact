import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './heading/Heading'
import Navbar from './navbar/Navbar'

/**
 * Ui router import for reactjs
 */
import {UIRouter, UIView, UISref, UISrefActive, pushStateLocationPlugin} from 'ui-router-react';

var helloState = {
    name: 'hello',
    url: '/hello',
    component: () => <h3>hello world</h3>
}

var aboutState = {
    name: 'about',
    url: '/about',
    component: () => <h3>Its the UI-Router hello world app!</h3>
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar></Navbar>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <div>
              Testing some new code
          </div>
          <Heading></Heading>
          <UIRouter plugins={[pushStateLocationPlugin]} states={[helloState, aboutState]}>
              <div>
                  <UISrefActive class="active">
                      <UISref to="hello"><a>Hello</a></UISref>
                  </UISrefActive>
                  <UISrefActive class="active">
                      <UISref to="about"><a>About</a></UISref>
                  </UISrefActive>

                  <UIView/>
              </div>
          </UIRouter>,
      </div>
    );
  }
}

export default App;
