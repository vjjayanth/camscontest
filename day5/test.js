// object non-primitive datatype

let student=    {
    name:'ravi',
    rollNo: 123,
    address:{
        city:'hyd'
    }
}


//to add new property to an existing obj
student.mobile=9999999
student.fee=909090

// todelete
delete student.mobile;

// update
student.name='ravi kumar'

// . operator
// [  ' '  ]  another method
console.log(student.name)
console.log(student['rollNo'])


// for-in loop
for(key in student){
    console.log('value of ',key,'is',student[key])

                                    // cant use student.key
}


let emp={

    empId:1,
    name:'Bahnu',
    skills:['a','b','c'],
    basic:2000,


    //method declaration
    getSalary:function(){

        // **this** in methods used to refer vars inside same object
        // this refers to current object
        let hra=0.15*this.basic
        let da=0.10*this.basic
        let salary=this.basic+hra+da
        return salary;
    }
}

console.log(emp.getSalary())
console.log(emp.skills.length)



//multiple objects of same type
////   objects===instances   instantisation

// creating a type(reference)
    function EmpData(rollNo,name,age,techSkills){
        // object initialization logic

        this.rollNo=rollNo,
        this.empName=name,
        this.empAge=age,
        this.empTechSkills=techSkills
    }

    EmpData.prototype.getData=function(){
        return "hello"
    }
// creating objects

   let emp1=new EmpData(100,'vj',22,['23','dffa'])
console.log(emp1)