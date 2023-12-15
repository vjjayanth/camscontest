function a(){
    return 'hello'
}
let res1=a()
console.log(res1)

let b=function(){
    console.log('anonymous')
}
b()

function test1(a){
    return a()
}
//let res3=test1(3)
//let res4=test1(function(){console.log('res4')})


let res2=test1(function(){return 'hello2'})
console.log(res2)                                      // callback function

function outer(){
    return function inner(){
        return 100;
    }
}
let res5=outer()
console.log(res5)
console.log(res5())