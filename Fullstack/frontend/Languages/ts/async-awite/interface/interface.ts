
// interface Mytype{
//     caroot:number,
//     cabbage:string,
//  }
// //Generic Concept
// interface Veg<Mytype>{
    
// }

// var vegetable:Veg<Boolean>={
//     cucumber: true,
//     caroot: 23,
//     cabbage: "Two"
// }

// var vegetable1:Veg<number>={
//     cucumber: 22,
//     caroot: 23,
//     cabbage: 'gijhgjh'
// }
// console.log(vegetable)
// console.log(vegetable1)



// //Interface concept

// interface ruits{
//    [x: string]: string

//    a:string,
//    b:string,
//    [k:number]:string,


// }

// var fruits:ruits={
//     a:'apple',b:'banana'
// }
// fruits[1]='orange'
// fruits.name='mango'
// console.log(fruits)
// const a:any<{b:string}>=(b)=>{
//     return(b+'apple')
     
// }

class Human{
  
      eye:string;
      nose:string;
      constructor(){
        this.eye='two',
        this.nose='1'
      }
       witheyes(a:string){
        return(a)
      }
}
const mouli=new Human
mouli.eye='three'
console.log(mouli.eye)
console.log(mouli.witheyes('we watcg'))
    
//  const mouli= new Human{
    
// }

