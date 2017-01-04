import React, {Component, PropTypes} from 'react'
import Immutable from 'immutable'
import './cast.css'
import {Tag} from 'reactstrap';
const Cast = ({group}) => (
    <div>
        <People group={group}/>
    </div>
)

function People({group}) {
    return (
        <div>
            {group.map((name, i) => {

                return (
                    <Tag key={i} color="default" pill>{name + ' '}</Tag>
                )
            })}
        </div>
    )
}
export default Cast