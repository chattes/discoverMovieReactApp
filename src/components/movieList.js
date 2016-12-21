import React, { PropTypes } from 'react'
import Immutable from 'immutable'

const MovieTile = ({movies}) => (
    <ul>
        {
            movies.map(
                (movie, i) => <li key={i}>{movie.get("title")}</li>

            ) }
    </ul>
)
MovieTile.PropTypes = {
    movies: PropTypes.instanceOf(Immutable.List).isRequired
}

export default MovieTile