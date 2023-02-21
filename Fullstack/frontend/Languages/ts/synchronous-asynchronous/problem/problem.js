function finalbill() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = a.reduce(function (a, b) { return a + b; });
    console.log(sum);
}
var b = setTimeout(function () { 1000; }, 2000);
finalbill(100, 200, 300, b, 400, 500);
