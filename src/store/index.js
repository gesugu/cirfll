import {createStore, combineReducers} from "redux";
import {planetsReducer} from "./PlanetsReducer";
// Изменить cashReducer 
const rootReducer = combineReducers({
    planetsReducer
})
export const store = createStore(rootReducer);