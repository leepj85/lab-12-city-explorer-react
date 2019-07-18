
import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'City Explorer',
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}