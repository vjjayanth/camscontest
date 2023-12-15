//person type
//function Person(name){
  //  this.name=name}


//class Person
class Person{
    constructor(name){
        //obj initialization logic
        this.name=name;
    }

    getName(){
        return this.name;
    }
}


//let p=new Person('ravi')
//console.log(p)


//student class
class Student extends Person{
    constructor(){

    }
}

//emp class






//student type
/*
function Student(name,course){
    //pass name to student
    Person.call(this, name);

    this.course=course
}

//emp type
function Emp(name,sal){
    Person.call(this,name)
    this.sal=sal
}

//set prototype
Emp.prototype=Object.create(Person,prototype)
Student.prototype=Object.create(Person,prototype)

//create student object
let std= new Student("ravi",'B.Tech')

let emp=new Emp("madhu",700000)
*/