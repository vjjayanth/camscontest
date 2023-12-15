
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