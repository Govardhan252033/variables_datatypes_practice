//Datatypes
//primitive datatypes: these datatypes store only single value 
//datatype is decided at run time in javascript


//Number

let a = 100; //integer
console.log(a)
console.log(typeof (a))

let b = 200.252; //decimal
console.log(b) 
console.log(typeof (b))

//Bigint

let c= 25214524125412n;
console.log(c) 
console.log (typeof(c))

//Boolean

let NameisCorrect = true;
console.log(NameisCorrect) 
console.log(typeof (NameisCorrect))

//unidentifed 

let d;
console.log(d)
console.log (typeof (d))

//null

let image = null;
console.log (image)
console.log (typeof (image)) // the value is null, but datatype is object: need to understand more

//sring

let compnayName = 'veevigo' //single quote 
let countryRegistered = "india" // double quote
let compnayInfo =`this compnay is registered as ${compnayName} and it is registerd in ${countryRegistered}`
//this is the backtick

console.log (compnayName)
console.log (countryRegistered)
console .log (compnayInfo)
console.log (typeof compnayInfo)

//Non-primitive datatypes----these datatypes store multiple values

//object ---- object store key-value pair 

let employeDetail = {
emp: "john",
empid:  "100",
role: "senior",
isActive: "true"
}
console.log(employeDetail.emp)
console.log(typeof employeDetail)

let labDetails = {
supervisor: "erika",
students: 10,
phds: 5,
postdocs: 3,
researchAssistants: 1,
undergrad: 1
}
console.log (labDetails.students)
console.log(typeof (labDetails)) // it prints datatype as object
console.log (labDetails.phds)

//array

let studentNos = [1,2,3,4,5,6,7,8,9,10]
console.log(studentNos)
console.log(typeof(studentNos)) // it is also printing the datatype as object
console.log(studentNos[0]) // it prints 1
console.log(studentNos [2]) // it prints 3

//functions

function add (f, h) {
    let i = f+h
    console.log (i)
}
add (100, 500)
console.log(typeof(add)) // it is printing the datatype as function


//coding exam question

let idnumber = 10
let idnumber1 = 10
console.log(idnumber === idnumber1)

let id1 = symbol ('id')
let id2 = synbol ('id')
console.log(id1 === id2)

//NaN is a not a number

console.log('ravi'/3)
