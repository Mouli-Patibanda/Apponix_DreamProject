async function func() {
    console.log(1)
var a=setTimeout(()=>{console.log(2)},2000)
a=await(await a )
console.log(3)
console.log(4)
console.log(5)
}

 func()
