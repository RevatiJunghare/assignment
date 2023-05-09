import { ADD_SIGNUP_ERROR, ADD_SIGNUP_LOADING, ADD_SIGNUP_SUCCESS, GET_SIGNUP_ERROR, GET_SIGNUP_LOADING, GET_SIGNUP_SUCCESS, GET_USERS, GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from "./type"



const initialState = {
    loading : false,
    error : false,
    users : []
}

export const signupReducer  = (state=initialState , {type,payload})=>{
   switch (type) {
    case ADD_SIGNUP_LOADING: return {
        ...state,
       loading : true,
       error : false
    }

    case ADD_SIGNUP_ERROR : return {
        ...state,
       loading : false,
       error : true
    }

    case ADD_SIGNUP_SUCCESS : return {
        ...state,
        loading : false,
        error : false,
        users : [...state.users,payload]
    }

    case GET_SIGNUP_LOADING : return {
        ...state,
        loading : true,
        error : false
    }

    case GET_SIGNUP_ERROR : return {
        ...state,
        loading : false,
        error : true
    }

    case GET_SIGNUP_SUCCESS : return {
        ...state,
        loading : false,
        error : false,
        users : payload
    }

    case GET_USERS_LOADING : return {
        ...state,
        loading : true,
        error : false
    }

    case GET_USERS_ERROR : return {
        ...state,
        loading : false,
        error : true
    }

    case GET_USERS_SUCCESS : return {
        ...state,
        loading : false,
        error : false,
        users : payload
    }

    
    case GET_USERS : return {
        ...state,
        error : false,
        loading : false,
        users : payload
    }

    
        
       
    default: return state
   }
}