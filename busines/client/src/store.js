import { configureStore, applyMiddleware, compose } from "reduxjs/toolkit";
import {thunk} from  "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";


const store = configureStore(rootReducer, {}, compose(
    applyMiddleware(thunk),
    composeWithDevTools()
));


export default store;