/*
synchronous line by line 


console.log('first')

//               blocking statement
for(let i=0;i<999999999;i++){}
console.log('second')

*/





/*
setTimeout(()=>{
    console.log('customer 1')
}                                           // setTimeout : one time
,5000)

setTimeout(()=>{
    console.log('customer 2')
}
,2000)

setTimeout(()=>{
    console.log('customer 3')
}
,3000)


setInterval(()=>{                           // setInterval: after every 2 s this executes
    console.log('111')
},2000)
*/



//////////////////// promises

console.log('promise for 5 seconds')
let st='true1'
let PromiseMade= new Promise((fufilled,rejected)=>{
    setTimeout(()=>{
        if(st=='a'){
            fufilled("success")
        }
        else{
            rejected("fail")
        }
    },5000)
})


PromiseMade
.then((msgsuccess)=>{
    console.log('success msg ',msgsuccess)}
    )
.catch((fail)=>{console.log(fail)})