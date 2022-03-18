import {GET_MESSAGES} from "../actionTypes/messagesActionTypes.js";

const storage = JSON.parse(localStorage.getItem('message')) || []

const initialState = {
    user: null,
    message: [],
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state,
                user: action.user,
                message: action.message,
                isLoading: false
            }

        default : return state
    }
}

export default reducer