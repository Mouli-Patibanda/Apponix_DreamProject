let http1=require('http')
let url1=require('url')
http1.createServer((req:any, res:any)=>{
let add='http://localhost:8080/mouli?name:mouli&age:23'
let p=url1.parse(add)
console.log(p.pathname)
console.log(p.host)
let data=p.query
console.log(data)
}).listen(8081,()=>{console.log('I am running')})