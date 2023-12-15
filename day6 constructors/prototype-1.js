let car={
    name:'car',
    num:123,
    variant:'petrol',
    getData:function(){
        console.log()
    }
}
// create mgHector
let mgHector={
    num:1234
}

// Inheritance for objects
Object.setPrototypeOf(mgHector,car)
console.log(mgHector)




//////////////////////////////
// Inheritance for constructors
function Person(name){
    this.name=name
}

function Emp(name,sal){
    Person.call(this,name)//     like super()
    this.salary=sal
}

Emp.prototype=Object.create(Person.prototype)


// check this
// adding method to a constructor
Person.prototype.getData=function(){
    return "hello"
}
//


let emp1= new Emp('ravi',1000)
console.log(emp1.getData())

let p=new Person('abc')
console.log(p)





/// using classes
class P{
    constructor(name){
        this.name=name
    }
}
class E extends P{
    constructor(name,sal){
        super(name)
        this.sal=sal
    }

    //  by default this method added to prototype
    method(){
        //code
    }
}