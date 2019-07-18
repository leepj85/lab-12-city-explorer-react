import React from 'react';
import superagent from 'superagent';

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      locationQuery: '',
    };
  }

  handleInput = e => {
    let input = e.target.value;
    this.setState({ locationQuery: input });
  }

  handleClick = async e => {
    e.preventDefault();
    let currentSearch = this.state.locationQuery;
    let dataObject = await superagent
      .get('https://city-explorer-backend.herokuapp.com/location')
      .query(
        {
          data: currentSearch,
        }
      );
    this.props.locationFunction(dataObject);
    console.log('I\'ve been clicked and sending location: ' + this.state.locationQuery.input);
  }

  render() {
    return (
      <div>
        <input onChange={this.handleInput} />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
