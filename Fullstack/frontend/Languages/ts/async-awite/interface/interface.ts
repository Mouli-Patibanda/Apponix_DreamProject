


interface Veg<Mytype>{
    caroot:number,
    cabbage:string,
    cucumber:Mytype
}

var vegetable:Veg<string>={
    cucumber: 'dsj',
    caroot: 23,
    cabbage: "Two"
}

var vegetable1:Veg<number>={
    cucumber: 22,
    caroot: 23,
    cabbage: "Two"
}
console.log(vegetable)
console.log(vegetable1)





interface fruits{
   a:string,
   b:string,
   [key:string]:string,


}

var fruits:fruits={
    a:'apple',b:'banana'
}
fruits.o='orange'
console.log(fruits)