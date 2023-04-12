let buf= Buffer.alloc(11)
let len=buf.write('AI am')
console.log(len,buf.toJSON())