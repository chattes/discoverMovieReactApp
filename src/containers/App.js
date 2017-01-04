import React, { Component , PropTypes} from 'react'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Immutable from 'immutable'
import { fetchMovies } from '../actions'
import MovieTile from '../components/movieList'
import ReactPaginate from 'react-paginate'
import ReactDOM from 'react-dom';


class App extends Component {
  static propTypes = {
    movies: PropTypes.instanceOf(Immutable.List).isRequired,
    pagination: PropTypes.instanceOf(Immutable.Map).isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount(){
    const { dispatch } = this.props
    dispatch(fetchMovies(1))
    
  }
  componentDidUpdate(){
    const {isFetching} = this.props
    if (!isFetching)
    window.scrollTo(0, 0)
  }
  handlePageClick = (data) => {
    let page = data.selected + 1
    const { dispatch } = this.props
    dispatch(fetchMovies(page))
    
  }
  render() {
    const { isFetching, movies, lastUpdated, pagination } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>SAP Picture Words</h2>
        </div>
        <MovieTile movies = { movies }/>
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={pagination.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.get('isFetching'),
    movies: state.get('movies'),
    pagination: state.get('pagination'),
    lastUpdated: state.get('lastUpdated')
  }
}
export default connect(mapStateToProps)(App);
