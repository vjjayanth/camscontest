let obj1={
    a:10
}

let obj2={
    b:10
}
// to prevent any modifications
Object.freeze(obj2)
obj2.b=22///////////////////   ignored
console.log(obj2)



let newObj=Object.assign({},obj1,obj2)
console.log(newObj)

let d=[1,2,3]
d[0]=2
console.log(d)