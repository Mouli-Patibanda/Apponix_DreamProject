export function hello(){
 console.log('Hi iam a function')
}


 const Html:React.FC<{a:string;b:any;c:any}>=(props)=>{
    return <h1>{props.a} {props.b} {props.c[1]}</h1>
 }
const test=(a:number)=>{
  return<h1>{a}</h1>
}
export const DifferentWaysToCallAFunction:React.FC<{}>= ()=> {
    var colour=false
    return (
        <>
        <Html a={"Iam hear"} b={"new"} c={[1,2]}/>
        { <div style={{width:"200px",height:"200px",background:colour? "green" : "red"}}></div> }
        {test(8)}
        {hello()}
             </>
    )
}