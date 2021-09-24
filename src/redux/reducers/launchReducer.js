import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    launches: [],
};

export const launchReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_LAUNCHES:
            return {...state, launches: payload};
        default:
            return state;
    }
};

export const selectedLaunchReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_LAUNCH:
            return {...state, ...payload};
        case ActionTypes.REMOVED_SELECTED_LAUNCH:
            return {};
        default:
            return state;
    }
}