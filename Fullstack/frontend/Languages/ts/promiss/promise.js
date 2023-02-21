var myPromise = new Promise(function (res, rej) {
    // res('iam working')
    rej('iam rej');
});
myPromise.then(function (a) { console.log(a); });
myPromise["catch"](function (a) { console.log(a); });
console.log(myPromise);
