//function convert(degree) {
//var x;
//if (degree == "C") {
//  x = (document.getElementById("c").value * 9) / 5 + 32;
// document.getElementById("f").value = Math.round(x);
//} else {
//  x = ((document.getElementById("f").value - 32) * 5) / 9;
//  document.getElementById("c").value = Math.round(x);
//}
//}

//function vote(age) {
// if (age < 18) {
// console.log("not eligible");
//} else {
// console.log("eligible");

//}
//}
// var res = vote(20);

// function school(grade) {
//   if (grade <= 7) {
//     console.log("primary school");
//   } else if (grade >= 8 && grade <= 10) {
//     console.log("High school");
//   } else {
//     console.log("collage");
//   }
// }
// school(9);

// var fruits = ["apple", "mango", "banana", "papaya", "strawberry"];
// //console.log - declare's the function
// console.log(fruits.length);

// fruits.push("orange");
// //push - add the end
// console.log(fruits);

// fruits.pop();
// //pop - remove the end
// console.log(fruits);

// fruits.shift();
// //shift - remove first element of an array
// console.log(fruits);
// //

// fruits.unshift("grapes");
// //unshift - add first element of an array
// console.log(fruits);

// fruits.splice(2, 1);
// //splice - remove the nmber of arrays from 2 till its given number
// console.log(fruits);

// var print_sum = add(1, 2);
// console.log(print_sum);

// function add(a, b) {
//   sum = a + b;
//   return sum;
// }

// var print_sum = substract(8, 2);
// console.log(print_sum);

// function substract(a, b) {
//   sum = a - b;
//   return sum;
// }

// function sayhello(name, age) {
//   console.log("hello" + name + "your age is" + age);
// }

// sayhello("syed arfath", 25);

// function school(grade) {
//   if (grade <= 7) {
//     console.log("primary school");
//   } else if (grade >= 8 && grade <= 10) {
//     console.log("High school");
//   } else {
//     console.log("collage");
//   }
// }
// school(9);

// var arfat = result(90);

// function result(marks) {
//   if (marks < 35) {
//     console.log("fail");
//   } else if (marks < 60) {
//     console.log("second class");
//   } else if (marks < 85) {
//     console.log("first class");
//   } else {
//     console.log("distinction");
//   }
// }

// marks(60);

//slice
// var num = [1, 2, 3, 4, 5, 6];

// var newarr = num.slice(0, 3);
// console.log(newarr);

// // console.log(num);

// var num = [1, 2, 3, 4, 5, 6];

// varnewarr = num.slice(0, 3);
// console.log(newarr);

//concat
// var num = [1, 2, 3, 4, 5, 6];
// var alp = ["a", "b", "c", "d", "e", "f"];

// var alpnum = alp.concat(num);
// console.log(alpnum.length);

// //indexof
// var indexOfone = alpnum.indexOf("d");
// console.log(indexOfone);

//tostring
// var luckynum = 1641656487;
// console.log(typeof luckynum);
// var luckynumstring = luckynum.toString();
// console.log(typeof luckynumstring);

//Assignment Question--01
var example = ["a", "r", "f", "a", "t", "h"];
console.log(example);
console.log(typeof example);
var example = example.toString();
console.log(typeof example);
var example = ["a", "r", "f", "a", "t", "h"];
var reversedexample = example.reverse();
console.log(example);

//ASSIGNMENT QUESTION--02
var num = ["1", "2", "3", "4", "5"];

if (4 in num) {
  console.log("exists");
} else {
  console.log("not exists");
}
