console.log("---Welcome in Js---");
document.write("hello world");
//et a = 5;
//console.log(a)
//var b = 5;
//console.log(b)
//const c = 10;
//console.log(c)
//a=9;
//b=5;
//c=9;

const userInput = 99;
for(let i=1; i<=10; i++){
    const tableRow =  userInput + " * " + i + " = " + userInput * i;
    console.log(tableRow);
}
let n;
for(let i=1; i<=10; i++){
    const tableRow = "n * " + i + " = " + n * i;
    console.log(tableRow);
}
console.log("no divisible by 3 and 5")
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}


console.log("no divisible by 3 ")
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
console.log("no divisible by 3 and 5 or 9")
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0 )  {
        console.log(i);
    }else if(i % 9 === 0){
            console.log(i)
        }
    }



console.log("even number and odd number")
let evennumber = "a";
let oddnumber = "b";
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0)  {
        console.log(evennumber);
    }else if(i % 2 !== 0){
            console.log( oddnumber)
        }
    }




// while loop
let i = 0;
while(i<5){
    console.log(i);
    i++;
}



console.log("even number")
let a = 0;
while (a <= 100) {
    if (a % 2 === 0) {
        console.log(a);
    }
    a++;
}
console.log("number in reverse order")
n = 100;
while (n >= 0) {
    console.log(n);
    n--;
}
console.log("sum of all even number")
let sum = 0;
i = 0;

while (i <= 100) {
    if (i % 2 === 0) {
        sum += i;
    }
    i++;
}

console.log(sum);

