let http=require('http')
let url=require('url')
http.createServer((req:any, res:any)=>{
    if(req.url=='/mouli'){
    res.write('<h1>Iam server of mouli</h1>')
    res.end()
}
if(req.url=='/mm'){
    res.write('<h1>Iam server of mm</h1>')
    res.end()
}
}).listen(8080,()=>{console.log('I am running')})