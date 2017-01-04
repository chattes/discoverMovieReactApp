export const REQUEST_MOIVES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const SELECT_MOVIES = 'SELECT_MOVIES'

export const requestMovies = page => ({
    type: REQUEST_MOIVES,
    page
})
export const receiveMovies = data => ({
    type: RECEIVE_MOVIES,
    data
})
export const fetchMovies = page => dispatch => {
    let myUrl = `http://localhost:4000/?p=${page}`
    dispatch(requestMovies(page))
    return fetch(myUrl).then(
        response => response.json()
    ).then(
        json => dispatch(receiveMovies(json))
    )
}