// number array and sum of elements
// 

let n= prompt("enter n: ")
let a=[],sum=0;
for(let i=0;i<n;i++){
    //let ele = (prompt("at index "+i));
    ele=parseInt(ele);              // to convert the input into int
    a.unshift(ele);
    sum+=ele
}
console.log("sum is ",sum)

// number array to get even numbers


let b=[1,222,34,23,17,91,87,63,42]
for(let index of b){
    if(index%2==0){
        console.log(index)
    }
}

//for (let b1 in b){
//    console.log(b1)
//}


let c=[1,111,23,2,3,56,47,81,90]
for(let x=0;x<c.length;x++){
    let y=c[x];
    let flag=0;
    for(let fact=2;fact<y;fact++){
        if(y==1){
            flag=1;
        }
       else if(y%fact==0){
            flag=1;
            break;
        }
    }
    if(flag==0){
        console.log(y)
    }
}
