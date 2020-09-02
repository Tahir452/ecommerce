import {takeEvery,fork,put, all} from "redux-saga/effects";


import axios from "axios";


function* fetchDataFromApi()
{
  

    let rdata;

    yield axios.get("https://fakestoreapi.com/products").then(data=>{
        console.log(data);

     rdata=data["data"]

    })
debugger;

    yield put({type:"SET_PRODUCTS",payload:rdata});


}



 function* WatcherGetData()
{

yield  takeEvery('GET_PRODUCTS',fetchDataFromApi)

}



export default function* root()
{
yield all([

fork(WatcherGetData)

])

}