import { Grid } from "@mui/material"
import Container from "@mui/material/Container"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { Mycards} from "../../component"
import Myslider from "../../component/notes/Courosel/Myslider"
import { MultiplewaysOfCallingCss } from "../../component/notes/css/MultiplewaysOfCallingCss"
import TopNavBar from "../../component/notes/TopNavBar/TopNavBar"
import { UserLogin } from "../login"
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.webp'

export const Home:React.FC<{}>=()=>{
    var [username,setUserName]=useState('')
    var locate=useLocation()  
    useEffect(()=>{
        setUserName(locate?.state?.userName)
    },[])
    var myarray=[img1,img2,img3,img4]
    const Myarray:React.FC<{img:string}>=(props)=>{
      return<><img src={props.img}/></>
    }
    return<>

   <Container maxWidth="xl">
     <Grid xs={12}>
       <Grid item >
         <TopNavBar/>
        </Grid>
        <Grid item>
    <Myslider/>
    </Grid>
{/* 
    <Props/> */}
    
<Grid
container
direction="row"
justifyContent="space-evenly"
alignItems="center">
{myarray.map((ele)=>{return<><Mycards img={ele}/></>})}


 {/* { <Mycards/> }
 <Mycards/>
 <Mycards/>
 <Mycards/>  */}
 
    </Grid>
  
    </Grid>
    
    <h1>Welcome {username}</h1>
 <MultiplewaysOfCallingCss/>    
  
   </Container>
    </>
}