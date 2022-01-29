import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { sidebarViewReducer } from "./reducers/viewReducer"

const initialState = {
    userCredsSignIn: {
        userInfo: localStorage.getItem("userInfo")
            ? JSON.parse(localStorage.getItem("userInfo"))
            : null,
    },
    sidebar_view: {
        view: "off"
    }
};
const reducer = combineReducers({
    //this is where all the reducers go
    sidebar_view: sidebarViewReducer,

});

const composeForBrowser =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeForBrowser(applyMiddleware(thunk))
);

export default store;