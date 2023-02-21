var mobile = {
    screen: 1,
    battery: 'one',
    speakers: 2
};
console.log(mobile);
var car = /** @class */ (function () {
    function car() {
        this.tyre = true;
        this.stearing = 1;
        this.company = 'Mercedes';
        this.model = 1001;
    }
    car.prototype.withtyre = function () {
        console.log('it is base of the car which car to move on the road easily');
    };
    car.prototype.withstearing = function () {
        console.log('with styring we can control the car');
    };
    return car;
}());
var car1 = new car();
car1.company = 'Benz';
car1.model = 1012;
console.log(car1);
