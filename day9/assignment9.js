/*1. Define the following array of object in a module and export it.*/
let employees=
[
   {
    name:"raju",
    age:34,
    skills:["reactjs","angular","nodejs"],
    address:{
    street:"kphb",
    city:"hyderabad"
    }
   },

   {
    name:"bhanu",
    age:36,
    skills:["reactjs","angular","nodejs"],
    address:{
    street:"miyapur",
    city:"hyderabad"
    }

   },
   {
    name:"vikas",
    age:40,
    skills:["java","angular","python"],
    address:{
    street:"koyambed",
    city:"chennai"
    }

   },

   {
    name:"varun",
    age:58,
    skills:["reactjs","python","nodejs"],
    address:{
    street:"time square",
    city:"warangal"
    }

   },

   {
    name:"manasa",
    age:41,
    skills:["python","c#","dotnet"],
    address:{
    street:"gachibowli",
    city:"hyderabad"
    }

   }

]
export {employees};


/*
Import the above array of objects into another module , and then

    1. Find the names(array of names) of employees of Hyderabad

    2. Find the name and address of employees whose age between 40  

        and 50

    3. Find the employees who are not from Hyderabad

    4. Find the names (array of names) of employees whose skill is  

        "reactjs"


*/