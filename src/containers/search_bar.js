import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class Searchbar extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
    //binding context so that onInputChange's this keyword refers to componets
    //this keyword
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

onInputChange(event) {
  console.log(event.target.value);
  this.setState({term: event.target.value})
}

onFormSubmit(event) {

  event.preventDefault();


  //at this point we need to fetch weather data
  this.props.fetchWeather(this.state.term);
  this.setState({ term: ''})
}
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
        placeholder="Get a five-day forecast in your favorite cities"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary'>Submit</button>
        </span >
      </form>

    );
  }
}

function mapDispacthToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispacthToProps)(Searchbar);
