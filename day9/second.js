/*import {a,b} from "./first.js"
console.log(a)
console.log(b)

// named export same name should be used here
*/



//importing default export
// no need of name matching from exported file
import x from './first.js'// x recieve an object
console.log("x is ",x)
console.log(x.a)
console.log(x.personName)