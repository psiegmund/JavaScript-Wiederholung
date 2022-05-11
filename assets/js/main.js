// console.log("Works");

// let text = 'Hello World!';
// const PI = 3.1415;
// var isDone = true;

// text = 'Guten Abend.';

// console.log(PI);
// document.write(text);
// document.getElementById('headline').innerHTML = text;
// console.log(text);
// console.log(isDone);

// JS Output

// window.alert('Hallo');
// alert(text);
// 
// JS Input -> prompt & confirm

// let myName = prompt('Give your Name!');
// console.log(myName);
// let isCool = confirm('Are you cool');
// console.log(isCool);

// string + number
// console.log("5" + 4);
// // number + string
// console.log(4 + "5");
// // string * number = number
// console.log("5" * 2);
// // 
// console.log("abc" * 5); // NaN - Not a Number

// functions
// declaration & calling

// declaration
// function sayHi() {
// }

// // calling
// sayHi();

// // a = prompt("Zahl 1 eingeben");
// // b = prompt("Zahl 2 eingeben");
// let htmlA = document.getElementById('htmlA');
// let htmlB = document.getElementById('htmlB');

// // function multiplyPrompt(a, b) {
// //     console.log('Zahl a = ' + a);
// //     console.log('Zahl b = ' + b);
// //     console.log('PROMPT - Das Ergebnis von Zahl a * Zahl B lautet: ' + a * b);
// // }

// // multiplyPrompt(a, b);

// function multiplyHtml() {
//     console.log('Zahl a = ' + htmlA.value);
//     console.log('Zahl b = ' + htmlB.value);
//     console.log('HTML - Das Ergebnis von Zahl a * Zahl B lautet: ' + htmlA.value * htmlB.value);
// }

// console.log(typeof ('Test'));

//  @true numbers

// let htmlC = document.getElementById('htmlC');
// let htmlD = document.getElementById('htmlD');

// function addHtml() {
//     console.log(htmlC.value * 1 + htmlD.value * 1);
// }

// addHtml();

// // Type Conversions
// // String Conversion

// let isDone = true; //Boolean
// console.log(isDone); //Boolean
// console.log(String(isDone)); //String
// console.log(Number(isDone)); //Number
// console.log(Boolean(isDone)); //Boolean

// + - / * % ++ --
// a = a + b    / a += b
// a = a - b    / a -= b
// a = a * b    / a *= b
// a = a / b    / a /= b

//Increment

// a = a + 1    / a++  /a += 1


// comparison
// == value
// === type & value

// let headline = document.getElementById('headline');

// CHANGE BY classList

// function setLeft() {
//     headline.classList.remove('alignLeft', 'alignCenter', 'alignRight');
//     headline.classList.add('alignLeft');
// }

// function setCenter() {
//     headline.classList.remove('alignLeft', 'alignCenter', 'alignRight');
//     headline.classList.add('alignCenter');
// }

// function setRight() {
//     headline.classList.remove('alignLeft', 'alignCenter', 'alignRight');
//     headline.classList.add('alignRight');
// }

// CHANGE by .style

// function setLeft() {
//     headline.style.textAlign = 'left';
// }

// function setCenter() {
//     headline.style.textAlign = 'center';
// }

// function setRight() {
//     headline.style.textAlign = 'right';
// }

// let x = 20;
// let y = 30;
// let z = 10;

// console.log(x + y);
// console.log(x - y);
// console.log(y - x);

// let result = x * y;

// resultOne = (x * y) / z;

// console.log(resultOne);

// LEV 2_1
// let btnChange = document.getElementById('navChange');
// let navHome = document.getElementById('navHome');

// function chgButton() {
//     navHome.classList.toggle('one');
// }

// LEV 2_2

// let firstName = document.getElementById('vorname');
// let lastName = document.getElementById('nachname');
// let country = document.getElementById('land');

// function getIt() {
//     console.log(firstName.value + lastName.value + country.value);
// }

// LEV 2_10

// let container = document.getElementById('kiste');

// function small() {
//     container.classList.remove('small', 'middle', 'crazy');
//     container.classList.add('small');
// }

// function middle() {
//     container.classList.remove('small', 'middle', 'crazy');
//     container.classList.add('middle');
// }

// function crazy() {
//     container.classList.remove('small', 'middle', 'crazy');
//     container.classList.add('crazy');
// }

// LVL 2_11

function colorChg() {
    let colorR = Math.floor(Math.random() * 255);
    let colorG = Math.floor(Math.random() * 255);
    let colorB = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = ("rgba(" + colorR + ", " + colorG + ", " + colorB + ")");
}

