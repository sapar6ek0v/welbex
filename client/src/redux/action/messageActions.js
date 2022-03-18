import {GET_MESSAGES} from "../actionTypes/messagesActionTypes.js";

export const getMessages = (data) => {
    localStorage.setItem('message', JSON.stringify(data))
    return {type: GET_MESSAGES, user: data.message?.author?.name, message: data.message}
}