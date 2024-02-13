import { LOGGED_IN, LOGGED_OUT } from "../../utilities/constants"

export const userLoggedIn = () => {
    return {
        type: LOGGED_IN,
        payload: ''
    }
};

export const userLoggedOut = () => {
    return {
        type: LOGGED_OUT
    }
}