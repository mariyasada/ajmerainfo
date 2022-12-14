export const userDataReducer=(state,action)=>{
    switch (action.type) {
        case "LOAD_USERS":
            return{...state,users:[...action.payload]}
          
        case "ASCENDING":
            case "DESCENDING":
            return{...state,currentCategory:action.payload}  
            
         case "ADD_USER":
            return {...state,users:[...state.users,action.payload]}   
         
        default:
           return state;
    }

}