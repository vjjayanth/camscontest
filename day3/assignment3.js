// scopes and functions default parameters , let and var

// 1.1
function bigOfTwo(a,b){
    if(a>b){
        return a;
    }
    return b;
}
console.log(bigOfTwo(1,10.5))

//1.2
greaterInTwo=function(a,b){
    if(a>b)
    {
        return a;
    }
    else{
        return b;
    }
}
console.log(greaterInTwo(12,'13'))

//2.1
function bigOfThree(a,b=8,c=12){
    let d= a>b? (a>c ? a:c) :(b>c?b:c);
    return d
}
console.log(bigOfThree(1,22))

//2.2
greaterInThree=function(a=1,b,c){
    if(a>b){
        if(a>c){
            return a;
        }
        return c;
    }
    else{    // b>a
        if(b>c){
            return b;
        }
        else{
            return c;
        }
    }
}
console.log(greaterInThree(23,34,1))

//3.1
function factors(num){
    console.log("the factors of %d are: ",num)
    for(let i=1;i<=num;i++)
    {
        if(num%i==0){
            console.log(i)
        }
    }
}
factors(25)

//3.2
factorsof=function(num){
    console.log("the factors of %d are: ",num)
    for(let i=1;i<=num;i++)
    {
        if(num%i==0){
            console.log(i)
        }
    }
}
factorsof(26)

//4.1
let flag=0;
function IsPrime(num){
    for(let i=2;i<num;i++)
    {   
        if(num%i==0)
        {
            console.log("%d is not prime",num)
            
            flag=1;
            break;
        }   
    }
    if(flag==0)
        console.log("%d is prime",num)
}

IsPrime(4)

//4.2
let flag1=0;
IsThisPrime=function (num){
    for(let i=2;i<num;i++)
    {   
        if(num%i==0)
        {
            console.log("%d is not prime",num)
            flag1=1;
            break;
        }   
    }
    if(flag1==0)
        console.log("%d is prime",num)
}
IsThisPrime(111)

//5.1
function EvenFactors(num){
    console.log("the even factors of %d are :",num)
    for(let i=2;i<=num;i+=2){
        if(num%i==0)
            console.log("%d",i);
    }
}

EvenFactors(28)

//5.2
EvenFactorsOfNum=function (num){
    console.log("the even factors of %d are :",num)
    for(let i=2;i<=num;i+=2){
        if(num%i==0)
            console.log("%d",i);
    }
}

EvenFactorsOfNum(4)

//6.1
function SumOfDigits(num){
    
    let temp=num;
    let rem,sum=0;
    while(num>0)
    {
        rem=num%10;
        sum+=rem;
        num/=10;
    }
    console.log("the sum of digits is %d",sum);
}
num=prompt('enter a number')
SumOfDigits(num)

//6.2
SumOfDigits=function (num){
    
    let temp=num;
    let rem,sum=0;
    while(num>0)
    {
        rem=num%10;
        sum+=rem;
        num/=10;
    }
    console.log("the sum of digits is %d",sum);
}
num=prompt('number for sum of digits')
SumOfDigits(num)