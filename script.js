// index ki file may show hoga
 document.write("Hello");


 var first_name = "anoshaashrafkhan";
 console.log(first_name);
 var lastname = "khan";
 console.log(lastname);

var dateofBirth;
dateofBirth = "31-oct-2007";
 console.log(dateofBirth);


// concordinate
 var name = "Anosha Ashraf Khan";
 var age = "16";
 var email = "anoshaashrafkhan@gmail.com";
 console.log(" My name is " + name + " My age is " + age + " My email is "+ email);


// alert
 var message = "Good Morning";
 alert(message)


// undefined
 var hello;
 console.log(hello);                                    



var a = 10;
 var b = 5;
 var result = a * b;
 console.log("multiply: " + result);


var p = 12;
 var q = 2;
 console.log("the Add:" + (p + q));
 console.log("the multiply:" + (p * q));



 var originalNum = 23; 
  var numToBeAdded = 7; 
 var newNum = originalNum + numToBeAdded ;
 console.log(originalNum + numToBeAdded);


 //task
 let var1 = "one"; var2 = "two"; var3 = "three";


// // legal
// // let FirstName;
// // let lastname;
// // let lastName;

// // illegal
// // let 12;
// // let 12hello;
// // let @34return;


// example question
 var costOfTicket = 600;
 var buyingTicket = 5;
 var answer = costOfTicket * buyingTicket;
 console.log("total cost of ticket:" + answer );


// pre increment
var num = 2;
const ans = ++num + 1;
console.log (ans);

var num = 2;
var newNum = num++ + 1;
console.log (newNum);


// arthemetic operator
var answer = 10 + 10 - 20 *5;
console.log(answer);

// concardinate

 var name = "Anosha";
 var email ="anosha@gmail.com"
alert( "anosha" + "    "+"email" );

 // prompt                                                                                                                                                                                                                              
var spec = prompt("your, name is");
 console.log(spec);

var number1= +prompt("enter number",20);
var number2= +prompt("enter second number");
console.log(number1 + number2);

// Assignment operator
var x =20;
x+= 5;
console.log(x);

 var c = 15;
 var d = 10;
 console.log(c==d);

 let y = 15;
 let z = "10";
 console.log(y===z);



// IF
var mode ="light";
var color = "black";
if(mode == "light"){
    console.log(color);
}
else{
    console.log("white");
}

// 2 IF
var age ="18";
if(age >= 18){
    console.log("you are eligible for voting");
}
else{
    console.log("you are not eligible for voting");
}

// 3 IF
var number = +prompt("enter any number");
if(number % 2 == 0){
    console.log(number, "is a even number");
}
else{ 
    console.log(number, "is a odd number");
}


// elseif
var age = 16;
if(age < 18){
    console.log("junior");
}
else if(age > 60){
    console.log("senior");
}
else{
    console.log("middle");
}



//Class activity questions

// Q1 
var ages = +prompt("enter your age")
if(ages < 18){
    console.log("you are eligible for voting");
}
else{
    console.log("you are eligible for voting");
}


// Q2
var temp = +prompt("input the temperature")
if(temp > 25 ){
    console.log("Its a hot day");
}
else{
    console.log("its a normal day");
}


// Q3
let score = +prompt("Enter the students score");
if(score >= 60){
    console.log("you passed the exam");
}
else{
    console.log("you failed the exam");
}


// Q4
var raining = true; 
if(raining = true){
    console.log("remember to bring an umberalla");
}
else {
    console.log("enjoy the sunny weather");
}

// Q5
var age = +prompt("Enter your age")
if(age  >= 18){
    console.log("you are an adult");
}
else{
    console.log("you are minor");
}


// Q6
var number = +prompt("enter the number")
if(number > 0){
    console.log("the number is positive");
}
else if(number < 0){
    console.log("the number is negative");
}
else if(number==0){
    console.log("the number is zero");
}
else{
    console.log("the number is integer");
}

// logical and  operators (if the two statement true than log nh chlyga)
var scores = +prompt("enter your score") 
// 80 s bri value or 40 s choti
if( scores >= 80 && scores >= 60 ){
    console.log("you are passed");
}
else{
    console.log("you are failed");
}

// or ||(one statement is true than also run the code)
if( scores >= 80 ||  scores >= 60 ){
    console.log("you are passed");
}
else{
    console.log("you are failed");
}

// logicat not ..staetmemt true horh h tou false kryga or false hoga tou true krdyga    !
var israining =false;
 if (!israining) {
    console.log("its not raining.enjoy the day ");
 }
 else{
    console.log("dont forget the umberalla");
}

// AND&&
var weight= +prompt("enter weight");
var time = +prompt("enter time");
var  age = +prompt("enter age");
var gender = +prompt("enter gender");
if (weight > 70 && time > 6 && age > 17 && gender === "female"){
    alert("true");
}
else{
alert("false");
}
// OR||
var weight= +prompt("enters weight");
var time = +prompt("enters time");
var  age = +prompt("enters age");
var gender = +prompt("enters gender");
if (weight > 70 || time > 6 || age > 17 || gender === "female"){
    console.log("true");
}
else{
console.log("false");
}
// NOT!
var weight = +prompt("enter your weight");
var age = +prompt("enter your age");
if (!(weight >200 && age <16)){
    console.log("true");
}
else{
    console.log("false");
}

// NESTED1
let g = 10;
let h = 1;

if (g > 5) {
    if (h > 2) {
        console.log("Both a and b are greater than their respective thresholds.");
    } else {
        console.log("a is greater than 5, but b is not greater than 2.");
    }
} else {
    console.log("a is not greater than 5, so the inner condition is not checked.");
}
// NESTED2
let temperature = 15;
let isSunny = true;

if(temperature > 25){
  console.log("It's hot outside!");

  if(isSunny){
      console.log("Don't forget to wear sunscreen.");
  }
  else{
    console.log("You might still want to wear sunscreen.");
  }
}
else if(temperature >= 15 && temperature <= 25){
    console.log("It's a pleasant day.");
  if(isSunny){
    console.log("Enjoy the sunshine!");
  }
  else{
    console.log("Even if it's cloudy, it's still nice outside.");
}
}
else{
    console.log("It's a bit chilly.");
    if (isSunny) {
        console.log("Don't be fooled by the sun, it's still cool.");
    } else {
        console.log("It might be cloudy, so bring a jacket just in case.");
    }
}
// NESTED3
var age = 18;
var weight = 78;
 if(age > 20){
    if(weight > 45){
console.log("Your are in range");
} 
else{
    console.log("You are out of range");

}
}
else { 
        console.log("Have a Good weight");
}
