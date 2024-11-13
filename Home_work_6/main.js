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


//- створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
function sortNums(array, direction){

}
console.log(sortNums(nums,'ascending')) // [3,11,21]
sortNums(nums,'descending') // [21,11,3]


//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
let sortArray = coursesAndDurationArray.sort( (monthDuration1, monthDuration2) =>{
    return monthDuration2.monthDuration - monthDuration1.monthDuration;
})
console.log(sortArray);
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filteredArray =  coursesAndDurationArray.filter(value => value.monthDuration > 5);
console.log(filteredArray);
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mapArray = coursesAndDurationArray.map(function (value, index){
    return {
        id: index + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
})
console.log(mapArray);