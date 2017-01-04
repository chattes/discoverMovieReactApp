import React, {PropTypes} from 'react'
import Immutable from 'immutable'
import './stars.css'
import {Glyphicon} from 'react-bootstrap'
import {Media} from 'reactstrap'

const Stars = ({movie}) => (
    <Media>
        <Media body>
            <DetermineStars rating={movie.get("discoveryRating")}/>
        </Media>
    </Media>
)

function DetermineStars(props) {
    let starRating = [];
    //One Star Rating
    if (props.rating < 5) {
        for (let i = 0; i < 1; i++) {
            starRating.push(<Glyphicon className="red" key={i} glyph="heart"/>);
        }
    }
    //Two Star Rating
    if (props.rating >= 5 && props.rating < 10) {
        for (let i = 0; i < 2; i++) {
            starRating.push(<Glyphicon className="red" key={i} glyph="heart"/>);
        }
    }
    //Three Star Rating
    if (props.rating >= 10 && props.rating < 15) {
        for (let i = 0; i < 3; i++) {
            starRating.push(<Glyphicon className="red" key={i} glyph="heart"/>);
        }
    }
    //Four Star Rating
    if (props.rating >= 15 && props.rating < 19) {
        for (let i = 0; i < 4; i++) {
            starRating.push(<Glyphicon className="red" key={i} glyph="heart"/>);
        }
    }

    //Four Star Rating
    if (props.rating >= 19) {
        for (let i = 0; i < 5; i++) {
            starRating.push(<Glyphicon className="red" key={i} glyph="heart"/>);
        }
    }

    return (
        <div>
            {starRating}
        </div>
    )
}

Stars.PropTypes = {
    movie: PropTypes
        .instanceOf(Immutable.Map)
        .isRequired
}

export default Stars