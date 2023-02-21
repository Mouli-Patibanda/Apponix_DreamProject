
var myarry:any= []
function captureinfo(info:any){
   
    myarry.push(info)
    console.log(myarry)


myarry.map((val)=>{
    var div=document.getElementById('root') as HTMLDivElement
    var h1=document.createElement('h1')
    h1.innerHTML=val
    div.appendChild(h1)
})
}





