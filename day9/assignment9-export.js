import {employees} from "./assignment9.js";
console.log('imported objects')
for(let i of employees){
    console.log(i)
}
console.log('the names(array of names) of employees of Hyderabad')
let arr=[]
for(let x of employees){
    arr.unshift(x.name)
}
console.log(arr)
console.log('the name and address of employees whose age between 40 and 50')
for(let x of employees){
    if(x.age>40 && x.age<50){
        console.log('name :',x.name,' age: ',x.age)
    }
}
console.log('Find the employees who are not from Hyderabad')
for(let x of employees){
    if(x.address.city!='hyderabad'){
    console.log(x.name)
    }
}
let arr1=[]
console.log('Find the names (array of names) of employees whose skill is "reactjs"')
for(let x of employees){
    let e=(x.skills).find(ele=>ele=='reactjs')
    if(e!=undefined){
        arr1.unshift(x['name'])
    }
}
console.log(arr1)
