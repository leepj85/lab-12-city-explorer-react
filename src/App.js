import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
// import superagent from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header />
          <Main />
        </div>
      </React.Fragment>
    )
  }
}


export default App;
