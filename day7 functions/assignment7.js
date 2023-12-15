//1. Find sum of elements of an array 
let arr=[21,-2,34,25,11,8,-96]
let sum=0
arr.forEach(element => {                   // forEach(element,index)
    sum+=element
})
console.log('the sum of ele in arr is:',sum)


/*
2. Consider the following array
      [ 1 ,2 , 3, 4 ]
      Create new array by adding 10 to first element, 20 to second element , 30 to third element and so on using map() method.
        [1,2,3,4 ]======>[ 11,22,33,44]
*/
let arr1=[1,2,3,4]
let res1=arr1.map(function(element,index){
    let x=index+1
    return element+(x*10)
})
console.log(res1)


/*
3. Consider the following array of students marks
        [
            { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},

            { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},

            { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},

        ]
    Find the names of students who got highest marks in maths , physics and chemistry. */

let arr2= [
    { name:"ravi", marks :{ maths: 89, physics : 70 , chemistry :88}},
    { name:"bhanu", marks :{ maths: 98, physics : 50 , chemistry :68}},
    { name:"kiran", marks :{ maths: 50, physics : 82 , chemistry :94}},
]
let res2=arr2.filter(function(element){
    let y= element['marks']
    return y['maths']
})
console.log(res2)

let students = [
    { name: "ravi", marks: { maths: 89, physics: 70, chemistry: 88 } },
    { name: "bhanu", marks: { maths: 98, physics: 50, chemistry: 68 } },
    { name: "kiran", marks: { maths: 50, physics: 82, chemistry: 94 } },
  ];
  function findTopScorer(subject) {
    let topScorer = { name: "", marks: -1 };  // declaring a object for comparing and updating
    for (let  student of students) {
      let marks = student.marks[subject];
      if (marks > topScorer.marks) {
        topScorer.name = student.name;
        topScorer.marks = marks;
      }
    }
    return topScorer.name;
  }
  let topMathsScorer = findTopScorer("maths");
  let topPhysicsScorer = findTopScorer("physics");
  let topChemistryScorer = findTopScorer("chemistry");
  
  console.log('top in maths',topMathsScorer);
  console.log('Top scorer in Physics:',topPhysicsScorer);
  console.log('Top scorer in Chemistry: ',topChemistryScorer);
  