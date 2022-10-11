import { recipe } from "../../res/data";
import * as types from "../actionTypes/appActionTypes"

const initialData = {
    recipe: recipe,
};

const appReducers = (state = initialData, action) => {
    switch (action.type) {
        case types.CHANGE_DATA:
            return {
                ...state,
                recipe: action.flag
            }
        default:
            return state;
    }
};
export default appReducers;