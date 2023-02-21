function finalbill(...a){
  var sum=a.reduce((a,b)=>{return a+b})
    console.log(sum)
}

var b=setTimeout(()=>{1000},2000)
 finalbill(100,200,300,b,400,500)