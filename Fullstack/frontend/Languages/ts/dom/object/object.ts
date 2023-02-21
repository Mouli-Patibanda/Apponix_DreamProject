var mobile={
    screen:1,
    battery:'one',
    speakers:2

}
console.log(mobile)


class car{
    tyre:boolean
    stearing:number
    company:string
    model:number
  constructor(){
    this.tyre=true
    this.stearing=1
    this.company='Mercedes'
    this.model=1001
  }
  withtyre(){
    console.log('it is base of the car which car to move on the road easily')
}
withstearing(){
    console.log('with styring we can control the car')

}

}
 var car1=new car();
 car1.company='Benz'
 car1.model=1012
 console.log(car1)