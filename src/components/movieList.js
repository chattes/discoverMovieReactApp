import React, { PropTypes } from 'react'
import Immutable from 'immutable'
import './movieList.css'
import { Grid, Row, Col, Image, Media } from 'react-bootstrap'

const MovieTile = ({movies}) => (
    // <ul>
    //     {
    //         movies.map(
    //             (movie, i) => {
    //                 return (
    //                     <li key={i}>
    //                     <div>
    //                     {movie.get("title")} 
    //                     {movie.get("vote_count")}                      
    //                     </div>
    //                     </li>
    //                 )
    //             }

    //         ) }
    // </ul>
    <ul>
        {
            movies.map(
                (movie, i) => {
                    return (
                        <li key = {i}>
                            <div>
                                <Media>
                                    <Media.Left>
                                        <Image src={ movie.get("poster_path") } alt="Image"/>
                                    </Media.Left>
                                    <Media.Body>
                                        <Media.Heading>{movie.get("title") }</Media.Heading>
                                        <p>{movie.get("overview") }</p>
                        </Media.Body>
                        </Media>
                        </div>
                        </li>
                            )
                            }
                            )
                            }
    </ul>

                    )
                    MovieTile.PropTypes = {
                        movies: PropTypes.instanceOf(Immutable.List).isRequired
                    }

                    export default MovieTile