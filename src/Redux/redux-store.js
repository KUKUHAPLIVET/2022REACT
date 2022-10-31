import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";
import autnReducer from "./autnReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer"

let reducers = combineReducers

({
    
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage: usersReducer,
    auth: autnReducer,
    app : appReducer,


})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)
  ));






// let store = createStore(reducers, applyMiddleware(thunk))


window.store = store


export default store