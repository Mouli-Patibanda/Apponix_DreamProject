//import {Myh1} from './app/component/header/Myh1'
//import { PrintName } from './app/component/header/PrintName'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { FirsthookUseState } from './app/component/notes/hooks/useState/FirsthookUseState'
import { Props } from './app/component/notes/Props-Hoc'
import {About,Contact,DifferentWaysToCallAFunction,Home, UserLogin}from './app/pages'
// import { Outlet, Link } from "react-router-dom";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import { Myh1 } from './app/component';




export const App=()=>{
  return (
  <>

  {/* <PrintName priority={false} name={'Wrong statement...'} size={50}/></> */}
  <Myh1/>
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

   

