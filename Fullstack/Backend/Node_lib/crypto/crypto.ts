  let crypto1=require('crypto')
// let mykey=crypto1.createCipher('aes-128-cbc','mypass')
// let mystr=mykey.update('Mouli','utf8','hex')
// mystr+=mykey.final('hex')
// console.log(mystr)


//Decrypting or Decipher

let mykey=crypto1.createDecipher('aes-128-cbc','mypass')
let mystr=mykey.update('1b04f3b69c50194ce6de42be2bffa1f9','hex','utf8')
mystr+=mykey.final('utf8')
console.log(mystr)