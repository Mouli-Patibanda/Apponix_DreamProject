//import {Myh1} from './app/component/header/Myh1'
//import { PrintName } from './app/component/header/PrintName'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { FirsthookUseState } from './app/component/notes/hooks/useState/FirsthookUseState'
import { Props } from './app/component/notes/Props-Hoc'
import {About,Contact,DifferentWaysToCallAFunction,Home, UserLogin}from './app/pages'
// import { Outlet, Link } from "react-router-dom";




export const App=()=>{
  return (<>

  {/* <PrintName priority={false} name={'Wrong statement...'} size={50}/></> */}
  <Router>
    <Routes>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   <Route path="/home" element={<Home/>}/>
   <Route path="/login" element={<UserLogin/>}></Route>
   <Route path="/" element={<Props/>}></Route>

   
    </Routes>
  </Router>
  </>)
}

   

