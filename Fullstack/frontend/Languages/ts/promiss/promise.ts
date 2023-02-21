var  myPromise=new Promise((res,rej)=>{
// res('iam working')
rej('iam rej')

});

myPromise.then((a)=>{console.log(a)})
myPromise.catch((a)=>{console.log(a)})
console.log(myPromise)