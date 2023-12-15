let Student={
    name:'ravi',
    idno:111,
    course:'B.Tech',
    address:{
        city:'hyderabad',
        pin:500090
    },
    mobile:7999988844
}
console.log("student :",typeof Student)
//let stu1= new Student();
console.log(Student)

let Bus={
    name:'volvo',
    type:'passenger',
    noOfSeats:55,
    number:'TS 01 EF 1111'
}
console.log("bus object")
//let bus1= new Bus();
console.log(Bus)

let Emp={
    name:'John Doe',
    eid:11111,
    esalary:40000,
    company:'Deloitte',
    joiningDate:'25-01-2016'
}
console.log("employee "+typeof Emp)
//let emp1= new Emp();
console.log(Emp)

let Mobile={
    brand:'Samsung',
    model:'S22 Ultra',
    battery:4600,
    cost:75000,
}
console.log("mobile object")
//let mob1= new Mobile();
console.log(Mobile)

//student object with a method
let Student1={
    name:'ram',
    rollNo:1112,
    course:'M.Com',
    year:2,
    marks:[12,11,13,12],
    getMarks:function(){
        let sum=0;
        for(let i=0;i<this.marks.length;i++){   
            sum+=this.marks[i];
        }
        return sum
    }
}
console.log("student object with a method")
console.log(Student1)
console.log('calling a method: total score: ',Student1.getMarks())

//Product
let Product={
    pname:'television',
    pid:12332345,
    company:'OnePlus',
    model:'43 inch FULL HD',
    price:32000,
    getDiscount:function(){
        let discount= 0.10*this.price
        return discount
    }
}
console.log("Product object")
console.log(Product)
console.log("discount on selelcted product is :",Product.getDiscount())