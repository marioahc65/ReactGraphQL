import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import userReducer, { restoreSesssionAction } from './userDuck'
import charsReducer, { getCharacterAction } from './charsDuck'
import thunk from 'redux-thunk'

let rootReducer = combineReducers({
    user: userReducer,
    characters: charsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
        );
        getCharacterAction()(store.dispatch, store.getState);
        restoreSesssionAction()(store.dispatch);
        return store;
};