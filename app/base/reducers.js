const initialState = {
    results: [],
    isLoading: false,
    isError: false,
    isSuccess: false
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_IMAGES_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isSuccess: false
            }
        case 'ALL_IMAGES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isSuccess: true,
                results: action.payload.data
            }
        case 'ALL_IMAGES_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isSuccess: false,
                results: action.payload.data
            }
        default:
            return state
    }
}

export default imagesReducer
