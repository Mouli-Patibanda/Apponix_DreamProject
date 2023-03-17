import { useState } from "react"

export const FirsthookUseState:React.FC<{}>=()=>{
   var [mystate,setState]= useState('Hi iam  a functon')
    const changestate=()=>{
        setState("I am clicked")
    }
    return<>{mystate}
    <button onClick={changestate}>click</button>
    </>
}