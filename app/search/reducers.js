const initialState = {
    results: []
}

const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_VIDEOS':
            return {...state, results: action.payload}
        default:
            return state
    }
}

export default videosReducer
