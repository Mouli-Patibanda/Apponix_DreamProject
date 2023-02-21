const myfunc=(a)=>{
    // console.log(a.json())
return a.json()
}

var apiData=fetch("https://fakestoreapi.com/products")
apiData.then(myfunc).then((a)=>{console.log(a)})
console.log(apiData)