import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getuserprofile } from '../redux/auth/action'


const UsersProfile = () => {
    const [val,setVal] = useState({})
    const dispatch = useDispatch()
    const data = useSelector((store)=>store.users)
     console.log(data)

     useEffect(()=>{
        dispatch(getuserprofile())
     },[])

  return (
    <div style={{width:"90%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",margin:"auto",marginTop:"30px"}}>
        {
            data.users && 
             data.users.map((el)=>{ 
                return <div key={el.id} style={{width:"400px",border:"1px solid red",margin:"auto",marginBottom:"20px",padding:"10px"}}>
                
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIH3cVN9nVOwezMJZgjRo0YhASylFMo1nJpw&usqp=CAU" style={{width:"300px",height:"300px",marginLeft:"50px"}}/>
                <h3>Username : {el.username}</h3> 
                <h2>FullName : {el.fullname}</h2>
                <h2>Email ID : {el.email}</h2>
                <h2>Password : {el.password}</h2>
                <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px",marginBottom:"20px"}}>
                
                </div>
    </div>
             })
        }
    </div>
  )
}

export default UsersProfile