import productReducer from "./products";

import {combineReducers} from  "redux";

const allReducers=combineReducers({
    productReducer

})
export default  allReducers;