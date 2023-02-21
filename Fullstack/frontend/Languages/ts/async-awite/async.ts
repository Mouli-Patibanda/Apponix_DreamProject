async function myfun() {
var apiData=fetch('https://fakestoreapi.com/products')
var data= await(await apiData).json()
console.log(data)

}
myfun()