import { CLEAR_TIMEOUT_ID, LOGGED_IN, LOGGED_OUT, SET_TIMEOUT_ID } from "../../utilities/constants";

const initialState = {
    isLoggedIn: false,
    isError: false,
    errorMessage: "",
    timeoutId : null
};

export const userReducers = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_TIMEOUT_ID:
            return { ...state, timeoutId: action.payload };
        case LOGGED_IN:
            return { ...state, isLoggedIn: true };
        case LOGGED_OUT:
            return { ...state, isLoggedIn: false };
        case CLEAR_TIMEOUT_ID:
            return initialState;
        default:
            return state;
    }
};