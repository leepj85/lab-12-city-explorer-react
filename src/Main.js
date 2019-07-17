import React from 'react';
import Result from './Result.js';

class Main extends React.Component {

  render() {
    return (
      <React.Fragment>
        <div>
          <Search />
          <Map />
          <Result />
        </div>
      </React.Fragment>
    )
  }
}

class Search extends React.Component {

  render() {
    return (
      <React.Fragment>
        <input />Search for a location
        <button>Explore</button>
      </React.Fragment>
    )
  }
}

class Map extends React.Component {

  render() {
    return (
      <React.Fragment>
        <img src="" alt="" />
      </React.Fragment>
    );
  }
}

export default Main;