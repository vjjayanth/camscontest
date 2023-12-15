let a=5,b=6;
if(a>b){
    console.log("%d is greater than %d",a,b)
}
else if(a<b){
    console.log("%d is smaller than %d",a,b);
}
else{
    console.log("%d equals to %d",a,b);
}


a=1,b=0.5
let c=23;
d= (a>b)? (a>c?a:c) : (b>c?b:c);
console.log("the greatest among %d,%f and %d is %d",a,b,c,d);

//function to find factors
function factors(num){
    console.log("the factors of %d are :",num)
    for(let i=1;i<=num;i++){
        if(num%i==0)
            console.log("%d",i);
    }
}

factors(124)

//is prime function
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

IsPrime(5)

//function for even factors
function EvenFactors(num){
    console.log("the even factors of %d are :",num)
    for(let i=2;i<=num;i+=2){
        if(num%i==0)
            console.log("%d",i);
    }
}

EvenFactors(24)

//sum of digits of input

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