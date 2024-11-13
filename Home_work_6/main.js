//- Знайти та вивести довжину наступних стрінгових значень
//  'hello world', 'lorem ipsum', 'javascript is cool'
let helloW = 'hello world';
console.log(helloW.length);
let loremI = 'lorem ipsum';
console.log(loremI.length);
let jsIsCool = 'javascript is cool';
console.log(jsIsCool.length);

//- Перевести до великого регістру наступні стрінгові значення
//  'hello world', 'lorem ipsum', 'javascript is cool'
let helloWorld = 'hello world';
console.log(helloWorld.toUpperCase());
let loremIpsum = 'lorem ipsum';
console.log(loremIpsum.toUpperCase());
let javasIsCool = 'javascript is cool';
console.log(javasIsCool.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hWorld = 'HELLO WORLD';
console.log(hWorld.toLowerCase());
let lIpsum = 'LOREM IPSUM';
console.log(lIpsum.toLowerCase());
let jIsCool = 'JAVASCRIPT IS COOL';
console.log(jIsCool.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str.trim());

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів. ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let strNew = 'Ревуть воли як ясла повні';
function stringToarray(strNew){
    return strNew.split(' ');
}
console.log(stringToarray(strNew));

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.