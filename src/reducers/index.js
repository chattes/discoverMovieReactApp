import { combineReducers } from 'redux'
import {
    REQUEST_MOIVES, RECEIVE_MOVIES, SELECT_MOVIES
} from '../actions'
import { Map, List, fromJS } from 'immutable'

const initState = fromJS({
    isFetching: false,
    movies: [],
    pagination: {},
    lastUpdated: Date.now()

})
const reducer = (state = initState, action) => {
    switch (action.type) {
        case REQUEST_MOIVES:
        return state.merge({isFetching: true})
        case RECEIVE_MOVIES:
        let newState = state.merge({
            isFetching: false,
            movies: action.data.movies,
            pagination: action.data.pagination,            
            lastUpdated: action.receivedAt
        }) 
        return newState 
        case SELECT_MOVIES:
return state
        default:
return state
    }
}

export default reducer