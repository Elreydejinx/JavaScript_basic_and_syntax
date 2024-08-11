let naMe = "Jeremiah"
let age = "32"
let grade = "Coding Bootcamp"
let isAttendence = true

console.log(`${naMe} is ${age} years old and currently in ${grade} and is ${isAttendence}`);

let num1 = 32
let num2 = 27

let sum = num1 + num2
let difference = num1 - num2
let product = num1 * num2
let quotient = num1 / num2

console.log("sum:",sum);
console.log("difference:", difference);
console.log("product:", product);
console.log("quotient:", quotient);

num1 *= 12
num2 += 54

console.log("updated num1:", num1);
console.log("updated num2:", num2);

comp1 = num1 == num2
comp2 = num1 >= num2
comp3 = num1 != num2

console.log("Is num1 equal to num2?", comp1);
console.log("Is num1 greater than num2", comp2);
console.log("Is num1 not equal to num2", comp3);

let isPositive = num1 && num2 > 0;
let isEven = (num1 % 2 ==0) || (num2 % 2==0);

console.log("are both numbers positive?", isPositive);
console.log("is at least one number even?", isEven);