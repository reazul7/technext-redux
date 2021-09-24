import { combineReducers } from "redux";
import { launchReducer, selectedLaunchReducer } from "./launchReducer";

const reducers = combineReducers({
    allLaunches:launchReducer,
    launch:selectedLaunchReducer,
});

export default reducers;