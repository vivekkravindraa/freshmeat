const initialState = {
    quantity: {}
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "SET_QUANTITY":
            return {
                ...state,
                quantity: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
