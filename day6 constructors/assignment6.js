//1. Create ployee constructor function and add properties name, age, basic and add getSalary method to its prototype.
//Create 5 ployee objects and print their salaries.
function Emp(name,age,basic){
    this.name=name
    this.age=age
    this.basic=basic
}
Emp.prototype.getSalary=function(){
    let hra=0.10*this.basic
    return hra+(this.basic)
}


console.log('object and total sal')
let emp1= new Emp('Ravi',23,10000)
let emp2= new Emp('Ram',29,12000)
let emp3= new Emp('Somu',28,10000)
let emp4= new Emp('Naveen',33,11000)
let emp5= new Emp('Raju',21,10800)

console.log(emp1,'Total',emp1.getSalary())
console.log(emp2,emp2.getSalary())
console.log(emp3,emp3.getSalary())
console.log(emp4,emp4.getSalary())
console.log(emp5,emp5.getSalary())

//2. Create Product constructor function and add properties brand, price, model and add getDiscountPrice method to its prototype.
//Create 5 Products objects and print their discount price.
//Note: For each object of these 5, send different discount percentages as argument

class Product{
    constructor(brand,price,model){
        this.brand=brand
        this.price=price
        this.model=model
    }
    getDiscount(){
        //console.log('After discount')
        return 0.90*this.price
    }
}

console.log('object and price after discount')
let p1= new Product('A',23000,'Max')
let p2= new Product('R',29000,'Note Pro')
let p3= new Product('S',28000,'Ultra')
let p4= new Product('N',33000,'Pro')
let p5= new Product('J',21000,'Note')

console.log(p1,p1.getDiscount())
console.log(p2,p2.getDiscount())
console.log(p3,p3.getDiscount())
console.log(p4,p4.getDiscount())
console.log(p5,p5.getDiscount())