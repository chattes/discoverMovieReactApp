import React, { Component , PropTypes} from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Immutable from 'immutable';
import { fetchMovies } from '../actions';
import MovieTile from '../components/movieList'


class App extends Component {
  static propTypes = {
    movies: PropTypes.instanceOf(Immutable.List).isRequired,
    isFetching: PropTypes.bool.isRequired,
    retrievedAt: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchMovies(1))
    
  }
  render() {
    const { isFetching, movies, lastUpdated } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Discover Movies</h2>
        </div>
        <MovieTile movies = { movies }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.get('isFetching'),
    movies: state.get('movies'),
    lastUpdated: state.get('lastUpdated')
  }
}
export default connect(mapStateToProps)(App);
