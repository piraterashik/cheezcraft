//#region import
import * as types from "../actionTypes/appActionTypes";
//#endregion

export const toggleLike = (oldData, id) => {
    return async dispatch => {
        oldData.forEach(element => {
            if (element.id == id) {
                element.liked = !element.liked
            }
        });
        dispatch({ type: types.CHANGE_DATA, flag: oldData });
    }
}