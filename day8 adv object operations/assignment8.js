/*
Consider the following string
aaaabbababababbbbabababaaaa
Find frequency of "a" and "b".
Note- Frequency means, the no of times that specific character has appeared.
*/
let str='aaaabbababababbbbabababaaaa'
count=0
for(let i of str){
    if(i==='a'){
        count=count+1
    }
}
console.log('a count: ',count)
console.log('b count: ',str.length-count)

/*
2. Write a function to receive a string of multiple words as argument and then print the no of words in that string.
    Example:
Input : how are you all
Output: 4
*/
let str1='how are you all'
let count1=1
for(let x of str1){
    if(x==' '){
        count1=count1+1
    }
}
console.log('count of words: ',count1)

let str2='how are you all    friends  ' 


// or //

let arr=str2.trim().split(' ')
//console.log(arr)
for(let i=0;i<arr.length;i++){
    //console.log(arr)
    if(arr[i]===''){
        arr.splice(i,1)
    }
}
console.log(arr)
console.log('count of words :',arr.length)

/*
let c1=0
let c2=0
str2=str2.trim()
for(let i=0;i<str2.length;i++){
    
    if(str2[i]==' ' && ((str2[i-1]!=' ') || (str2[i+1]!=' ')) ){
        c1=c1+1
    }
    if(str2[i]==' ' && ((str2[i-1]=' ') && (str2[i+1]=' ')) ){
        c2=c2+1
    }
   // console.log(c1)
}
c1=c1+1
console.log(c1)
console.log(c2)
*/