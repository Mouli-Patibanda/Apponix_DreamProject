var myarry = [];
function captureinfo(info) {
    myarry.push(info);
    console.log(myarry);
    myarry.map(function (val) {
        var div = document.getElementById('root');
        var h1 = document.createElement('h1');
        h1.innerHTML = val;
        div.appendChild(h1);
    });
}
