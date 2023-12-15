let arr=[1,2,3];

//unpacking
// loop or index-general

let [a,b,c]=arr
console.log(a,b,c)

let obj={
    x:10,
    y:20
}

//unpack
console.log(obj.x)
let {x,y}= obj
console.log(x,y)

let{x1,y1}=obj
console.log(x1,y1)



/////////////  copy data  ///////////

let val=10;

let v=val;
console.log("initial ",val,v)

val=120               // new copy of variable created
console.log("new ",val,v)


let obj1={
    a:1,
    b:2
}

//let obj2=obj1         // new copy to reference
                        // no new object created


//let obj2=Object.assign({},obj1)
let obj2= {...obj1}
console.log("initial ",obj1,obj2)

obj1.a=12
console.log("new ",obj1,obj2)