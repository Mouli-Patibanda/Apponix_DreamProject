import { Grid } from "@mui/material"
import Container from "@mui/material/Container"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Myslider from "../../component/notes/Courosel/Myslider"
import { MultiplewaysOfCallingCss } from "../../component/notes/css/MultiplewaysOfCallingCss"
import TopNavBar from "../../component/TopNavBar/TopNavBar"
import { UserLogin } from "../login"


export const Home:React.FC<{}>=()=>{
    var [username,setUserName]=useState('')
    var locate=useLocation()  
    useEffect(()=>{
        setUserName(locate.state.userName)
    },[])
   
    return<>

   <Container maxWidth="xl">
     <Grid xs={12}>
       <Grid item >
         <TopNavBar/>
        </Grid>
        <Grid item>
    <Myslider/>
        </Grid>
   
  
    </Grid>
    <h1>Welcome {username}</h1>
 <MultiplewaysOfCallingCss/>    
  
   </Container>
    </>
}