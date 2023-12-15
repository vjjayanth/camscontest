let obj1={
    a:10
}

let obj2={
    b:20
}

console.log(obj1)
console.log(obj2)

let car = {
    model:'sfnewo',
    variant:'petrol',
    getStatus:function(){
        return 'excellent'
    }
}

let mgHector={
    model:'kia',
    seatingCapacity:5
}

Object.setPrototypeOf(mgHector,car)
console.log(mgHector)

