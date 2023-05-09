import axios from "axios"
import { ADD_SIGNUP_ERROR, ADD_SIGNUP_LOADING, ADD_SIGNUP_SUCCESS, GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from "./type"

// import { browserHistory } from 'react-router'
let url="http://localhost:8080/users2"
let url2="https://crowded-plum-horse.cyclic.app/users2"


export const addusers = (user)=> async(dispatch)=>{
   dispatch({type:ADD_SIGNUP_LOADING})
   try{
    let res = await axios.post("https://crowded-plum-horse.cyclic.app/users2",user)
    console.log(res.data)
    dispatch({type:ADD_SIGNUP_SUCCESS,payload:res.data})
   }catch(error){
     dispatch({type:ADD_SIGNUP_ERROR})
   }
}


export const getusers = (val,navigate)=> async(dispatch)=>{
  
  //console.log(val)
   dispatch({type:GET_USERS_LOADING})
   try{
     let res = await axios.get("https://crowded-plum-horse.cyclic.app/users2")
     //console.log(res.data)
     
     let filt = res.data.filter((el)=> el.username==val.username && el.email==val.email && el.password==val.password )
     //console.log(filt)
   if(filt.length>0){
        alert("Logged in successful")
        navigate('/userprofile')
       }else{
        alert("Login Failed")
      }
     
     
     dispatch({type:GET_USERS_SUCCESS , payload:filt})
   }catch(error){
     dispatch({type:GET_USERS_ERROR})
   }
}




export const getuserprofile = ()=> async(dispatch)=>{
    dispatch({type:GET_USERS_LOADING})
    try{
       let res = await axios.get("https://crowded-plum-horse.cyclic.app/users2")
       console.log(res.data)
       dispatch({type:GET_USERS_SUCCESS , payload:res.data})
    }catch(error){
       dispatch({type:GET_USERS_ERROR})
    }
}