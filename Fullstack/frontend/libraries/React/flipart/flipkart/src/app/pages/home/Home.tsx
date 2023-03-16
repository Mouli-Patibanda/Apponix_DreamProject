import Container from "@mui/material/Container"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { MultiplewaysOfCallingCss } from "../../component/notes/css/MultiplewaysOfCallingCss"
import { UserLogin } from "../login"

export const Home:React.FC<{}>=()=>{
    var [userName,setUserName]=useState('')
    var locate=useLocation()  
    useEffect(()=>{
        setUserName(locate.state.userLogin)
    },[])
   
    return<>

   <Container maxWidth="lg">
    <h1>Welcome {userName}</h1>
    {/* <MultiplewaysOfCallingCss/> */}
   </Container>
    </>
}