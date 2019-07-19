import React from 'react';
import superagent from 'superagent';
import './App.css';


import Form from './form.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backEndUrl: '',
      STATIC_MAP_API_KEY: '',
      googleResults: {},
      apiResults: {
        weathers: [],
        yelp: [],
        hiking: [],
        events: [],
        movies: []
      }
    }
  }

  getApiKey = (value) => {
    this.setState({ STATIC_MAP_API_KEY: value });
    localStorage.setItem('STATIC_MAP_API_KEY', value);
  }

  getBackendUrl = (value) => {
    this.setState({ backEndUrl: value });
  }

  getAllData = async (value) => {
    const googleResults = await superagent.get(this.state.backEndUrl + '/location').query({ data: value })
    console.log(googleResults);
    this.setState({ googleResults: googleResults.body });

    const weathersResults = await superagent.get(this.state.backEndUrl + '/weather').query({ data: googleResults.body });
    const moviesResults = await superagent.get(this.state.backEndUrl + '/movies').query({ data: googleResults.body });
    const trailsResults = await superagent.get(this.state.backEndUrl + '/trails').query({ data: googleResults.body });
    const yelpResults = await superagent.get(this.state.backEndUrl + '/yelp').query({ data: googleResults.body });

    this.setState({
      apiResults: {
        weathers: weathersResults.body,
        movies: moviesResults.body,
        hiking: trailsResults.body,
        yelp: yelpResults.body
      }
    })
  }

  render() {
    console.log(this.state.apiResults);
    return (
      <div className="App">
        <h1>City Explorer</h1>
        <h4>Enter a location below to learn about the weather, events, restaurants, movies, and more!</h4>
        {!this.state.STATIC_MAP_API_KEY &&
          <Form onClick={this.getApiKey} formName="Maps key"></Form>}
        <Form onClick={this.getBackendUrl} formName="Backend Url"></Form>
        <Form onClick={this.getAllData} formName="Search Location"></Form>
        <p>{this.state.STATIC_MAP_API_KEY}</p>
        <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.googleResults.latitude}%2c%20${this.state.googleResults.longitude}&zoom=13&size=600x300&maptype=roadmap
        &key=${this.state.STATIC_MAP_API_KEY}`}></img>
        {/* <Results stuff={this.state.apiResults.yelp}></Results> */}
        {this.state.apiResults.yelp.map(yelp =>
          JSON.stringify(yelp)
        )}
        {this.state.apiResults.movies.map(movies =>
          JSON.stringify(movies)
        )}
        {this.state.apiResults.hiking.map(hiking =>
          JSON.stringify(hiking)
        )}
        {this.state.apiResults.weathers.map(weathers =>
          JSON.stringify(weathers)
        )}
      </div>
    );
  }

}

export default App;