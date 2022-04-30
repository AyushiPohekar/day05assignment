//print odd numbers in an array
let x=function(arr)
{
let odds=arr.filter(n=>n%2)
return odds;
}
console.log(x([1,2,3,4,5,6]));


//Sum of all numbers in an array
var sum=0;
let x=function(arr)
{
for(var i=0;i<arr.length;i++)
{
sum=sum+arr[i];
}
return sum;
}
console.log(x([1,2,3,4,5]));

//Remove duplicates from an array
let x=function(arr)
{
 return Array.from(new Set(arr));
}
console.log(x([1,2,3,4,6,6]));

//Return all the prime numbers in an array

var prime=[];
let x=function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
  var flag=1;
  var half=arr[i]/2;
    for(var j=2;j<=half;j++)
    {
      if((arr[i]%j)===0)
      {
      flag=0;
      break;
      }
    }
    if(flag===1)
    {
      prime.push(arr[i]);
    }else
    {
      cmp.push(arr[i]);
    }
  }
 return prime;
}
x([5, 9, 63, 29, 35, 6, 55, 23]);
console.log(prime);


//Return median of two sorted arrays of the same size
let median=0;
let x=function(arr1,arr2)
{
  
  arr1.sort;
  arr2.sort;
  var array = arr1.concat(arr2);
  //console.log(array)
  if(array.length%2===0)
  {
   var i=array.length/2;
   var j=array.length/2-1;
    median=(array[i]+array[j])/2;
  }
  else
  {
    i=array.length/2;
    median=array[i]/2;
  }
  return median;
}
x([5,6],[4,3]);

//Return all the palindromes in an array
var palindrom=[];
let x=function(arr)
{
  for(var i=0;i<arr.length;i++)
  {
   var flag=0;
   var arr2=[];
   arr2=arr[i];
   var str=arr2.toString();
   for(var j=0;j<str.length/2;j++) 
    {
     if(str[j]!==str[str.length-j-1])
     {
       flag=1;
       break;
     }
    }
    if(flag===0)
    {
      palindrom.push(arr[i])
    }
  }
  
 return palindrom; 
}
x([12134,1331,'did']);
console.log(palindrom);


//Remove duplicates from an array

var x=function(arr)
{
  var uniqueArr = new Set(arr);
  
 var array = [...uniqueArr]; 
  return array;
}
console.log(x([12134,1331,'did','did']));

//Rotate an array by k times


var k=3; 
var x=function(arr)
{
  var l=arr.length;
  var last_k=[];
  for(var i=l-k;i<l;i++)
  {
  last_k.push(arr[i]);
  }
 for(var i=l-k-1;i>=0;i--)
 {
   arr[k+i]=arr[i];
 }
 for(var i=0;i<k;i++)
 {
   arr[i]=last_k[i];
 }
 return arr;
}
console.log(x([1,2,3,4,5,6,7,8,9,10]));

//Convert all the strings to title caps in a string array

var x=function(arr)
{
 var arr1= arr.split(' ');
 for(var i=0;i<arr1.length;i++)
 {
   var word=arr1[i];
   word=word.charAt(0).toUpperCase()+word.slice(1);
   arr1[i]=word;
 }
 arr1=arr1.join(' ');
 console.log(arr1);
}
console.log(x("guvi assignment"));



//ARROW FUNCTIONS//

//print odd numbers in an array
let x=(arr)=>
{
return=arr.filter(n=>n%2);
}
console.log(x([1,2,3,4,5,6]));


//Sum of all numbers in an array
const num = [1,2,3,4,5] 
var sum = (a, b) =>
 a + b
 sum = num.reduce(sum)
console.log(sum);

//Return all the prime numbers in an array
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num/2;i++){
 if(num%i===0)
 {
 return false;
 }
 }
 return true;
});
console.log(myPrime);

//Return all the palindromes in an array


const newArray=[12134,1331,'did'];
var palindrom=newArray.filter(arr=>{
  var str=arr.toString();
   for(var j=0;j<str.length/2;j++) 
    {
     if(str[j]!==str[str.length-j-1])
     {
      return false;
     }
    }
     return true;
});
console.log(palindrom);

//Convert all the strings to title caps in a string array

var newArray=(arr1)=>{
  arr1= arr1.split(' ');
  for(var i=0;i<arr1.length;i++)
  {
    var word=arr1[i];
    word=word.charAt(0).toUpperCase()+word.slice(1);
    arr1[i]=word;
  }
  arr1=arr1.join(' ');
  console.log('arr1 just before return',arr1)
  return arr1;
  
 };
 console.log(newArray('guvi assignment'));




