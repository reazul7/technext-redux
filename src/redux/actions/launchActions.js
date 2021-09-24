import { ActionTypes } from "../contants/actionTypes"

export const setLaunches = (launches) => {
    return {
        type: ActionTypes.SET_LAUNCHES,
        payload: launches,
    }
}

export const selectedLaunch = (launch) => {
    return {
        type: ActionTypes.SELECTED_LAUNCH,
        payload: launch
    }
}

export const removeSelectedLaunch = () => {
    return {
        type: ActionTypes.REMOVED_SELECTED_LAUNCH
    }
}