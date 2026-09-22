//we declare variable in three ways: let const and var

//Datatypes:
//what kind of value i can store in the variable
//how the variable will be stored in memory
//what operation i can perform on it 
//datatypes is decided at runtime in javascript. it is dynamic language

/*
Data types are divied into two cateberies 

1)Primitive 
2)non-primitive

1)Primitive data types --- store only single value
number
Bigint
string
boolean
undefined 
null
symbol

Nmuner: number used to store integers and decimals

*/

let a =20; // here datatype is a number
let sal = 23.45; //decimal datatype is a number  
console.log(a)
console.log (sal)
console.log(typeof a) //typeof <variable> tell us the datatype




console.log(Number.MAX_SAFE_INTEGER); //max number stored in the variable
//2 power 10 

let b = 9007199254740991 // we cant store gretare than this number (datatype)
console.log(b)

//because of this above bigint is came into the picture
//Bigint

// more than this number, we use bigint. Bigint store only intergers not decinmals 

let c = 9007199254740991n //we use n at end of this number
console.log(c)
console.log(typeof c)

// can we add bigint abd number

//let x= 20; // number
//let y= 123458n // bigint
//let z = x+y
//console.log(z) // see the error nigint and number cannot mix


// Boolean : can store two values only true or false 

let isfound = true;
let hasflag = false;
let isMlae = true;
console.log (typeof (isfound)


//undefined 

let empnmae; //undefined, value also undefined and datatype also undefined 
console.log(empname)
console.log(typeof(empname)) 



//null ---- used mainly for objects

let object1 = null
console.log(object1) //value is null. it prints null 
console.log(typeof(object1)) //it should print "null" but it prints "object"



//object and symbol learn later


//Most important is string

//string ----- sequence of charcter or group of characters 
// 'mohan' -- it is a 5 charcters
//

let studentNmae = 'Ravi' //single quote
let course = "playwright" // double quote
let message = `my nmae is ravi and i am learning playwright` //backtick
//whatever we keep inside the backtick is literal template    

//what is the use of backtick. we can retrive values of variables also
//what is the value of variable studentName = Ravi. 
//we can retrive the value of variable if we use the backtick 
// and mention the variable in curly brackets and keep $ before it  

let output = `my name ${studentNmae} 
and i am learning ${course}` 
console.log(output)

// if we use the backtick, the code can be written in second like
//and it also provide template


let price = 100

/*non-primitive datatypes --- store multiple values

1)obeject
2)array
3)function

*/

//1) objective, we can store multiple values usubg key-value pair
//

let employeDetail = {
empid:'100',
fullName: 'john', 
role: 'senior'.
isactive: 'true',    
}

console.log(employeDetail. empid) // this will print 100
console.log(typeof (employeDetail))


//array: it can store multiple values in single variable 
//array will be stored in sequence

let arr = [1,2,3,4,5] //arr[0] -- it will print 1, arr[1]
let arrofNames [mohan, krish, raj]
console.log(arrofNames[0])
console.log(typeof (arr))

//function
// syntax of function 
// function function name (a, b){let c = a+b;}
//console.log (c)
// function doesnot excuete by itself, we need to call the fucntion
//here what operation is doing "add"

//function add (a,b)
// {let c = a+b;
//console.log (c)}

//add (2,3)  ----- call the function


function sum(num1, num2){
let output = num1+num2; 
console.log(output)   
}
sum(2, 3)