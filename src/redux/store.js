//#region import
//#region list of reducers
import appReducers from './reducers/appReducers';
//#endregion
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//#endregion

const rootReducer = combineReducers({
    appReducers,
});
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;