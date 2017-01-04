import React, {PropTypes} from 'react'
import Immutable from 'immutable'
import './movieList.css'
import Stars from './stars'
import Cast from './cast'
import {Media, Button} from 'reactstrap'
import {Glyphicon} from 'react-bootstrap'


const MovieTile = ({movies}) => (
    <ul>
        {movies.map((movie, i) => {
            return (
                <li key={i}>
                    <Media>
                        <Media left middle href="#">
                            <Media
                                object
                                width="200"
                                height="250"
                                className="thumbnail"
                                src={movie.get("poster_path")}
                                alt="Generic placeholder image"/>
                        </Media>
                        <Media body>
                            <Media heading>
                                {movie.get("title")}
                            </Media>
                            <p>{movie.get("overview")}</p>
                            <Stars movie={movie}/>
                            <Media>
                                <Media body>
                                    <Cast group={movie.getIn(["omdb", "actors"])}/>
                                </Media>
                            </Media>
                            <Media>
                                <Media body>
                                    <Cast group={movie.getIn(["omdb", "genres"])}/>
                                </Media>
                            </Media>
                            <Media>
                                <Media body>
                                    <Button color="primary">Fetch Torrent</Button>  <Button color="info">Show More</Button>
                                </Media>
                            </Media>                           
                        </Media>
                    </Media>
                </li>
            )
        })
}
    </ul>

)
MovieTile.PropTypes = {
    movies: PropTypes
        .instanceOf(Immutable.List)
        .isRequired
}

export default MovieTile