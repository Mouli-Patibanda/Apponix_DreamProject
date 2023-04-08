var myPromise = new Promise(function (rej, res) {
    // res('iam working')
    var a = 5, b = 6;
    if (a > b)
        rej('iam fulfilled');
    else
        res('iam rej');
});
//myPromise.then((a)=>{console.log(a)})
console.log(myPromise["catch"](function (a) { (a); }));
console.log(myPromise);
