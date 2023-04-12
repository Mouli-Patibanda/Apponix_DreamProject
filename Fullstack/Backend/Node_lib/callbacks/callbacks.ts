let fs1=require('fs')
// let data=fs1.readFileSync('index.txt')
// console.log(data.toString())
// console.log('I am Mouli')
fs1.readFile('index.txt',(err:any, res:any)=>{
    if(err)return(err)
    console.log(res.toString(),err)

})
console.log('I am mouli')