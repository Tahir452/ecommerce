const products=(state=[],action)=>{

switch(action.type)
{


    case "GET_PRODUCTS":
        debugger;
        
       
        return {...state,payload:action.payload}


        case "SET_PRODUCTS":  
        debugger; 
        
        return {...state,payload:action.payload}


    default:
        return state

}



}

export default products;