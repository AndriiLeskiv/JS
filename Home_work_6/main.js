//- Знайти та вивести довжину наступних стрінгових значень
//  'hello world', 'lorem ipsum', 'javascript is cool'
let strFixed = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let string of strFixed) {
    console.log(string.length);
}
// let helloW = 'hello world';
// console.log(helloW.length);
// let loremI = 'lorem ipsum';
// console.log(loremI.length);
// let jsIsCool = 'javascript is cool';
// console.log(jsIsCool.length);

//- Перевести до великого регістру наступні стрінгові значення
//  'hello world', 'lorem ipsum', 'javascript is cool'
for (let string of strFixed) {
    console.log(string.toUpperCase());
}
// let helloWorld = 'hello world';
// console.log(helloWorld.toUpperCase());
// let loremIpsum = 'lorem ipsum';
// console.log(loremIpsum.toUpperCase());
// let javasIsCool = 'javascript is cool';
// console.log(javasIsCool.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let strFixedUpper = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
for (let string of strFixedUpper) {
    console.log(string.toLowerCase());
}
// let hWorld = 'HELLO WORLD';
// console.log(hWorld.toLowerCase());
// let lIpsum = 'LOREM IPSUM';
// console.log(lIpsum.toLowerCase());
// let jIsCool = 'JAVASCRIPT IS COOL';
// console.log(jIsCool.toLowerCase());

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
let arrMap = [10,8,-7,55,987,-1011,0,1050,0];
let arrMapString = arrMap.map(arrMapMew=>{
    return arrMapMew + '';
})
console.log(arrMapString);

//- створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого,
// або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
function sortNums(array, direction){
    if (direction === 'ascending'){
       return array.sort((a, b)=> a - b);
    }
    if (direction === 'descending'){
       return array.sort((a, b)=> b - a);
    }
}
console.log(sortNums(nums,'ascending')); // [3,11,21]
console.log(sortNums(nums,'descending')); // [21,11,3]

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

// не знаю чи це окремо потрібно фільтрувати чи все до одночасно
let coursesAndDurationArrayNew = coursesAndDurationArray
    .sort((monthDuration1, monthDuration2) => monthDuration2.monthDuration - monthDuration1.monthDuration)
    .filter((value) => value.monthDuration > 5)
    .map(function (value, index){
        return {
            id: index + 1,
            title: value.title,
            monthDuration: value.monthDuration
        }
    })
console.log(coursesAndDurationArrayNew);

// описати колоду карт (від 6 до туза без джокерів)
let cardSuits = ['spade', 'diamond', 'heart', 'clubs'];
let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let cards = [];
for (const cSuit of cardSuits) {
    for (const value of values) {
        const card = ({cardSuit: cSuit, value: value})
        if (cSuit === 'heart' || cSuit === 'diamond'){
            card.color = 'red';
        }else{
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);
//  - знайти піковий туз
console.log(cards.find(oneCard => oneCard.value === 'ace' && oneCard.cardSuit === 'spade'));
//  - всі шістки
console.log(cards.filter(oneCard => oneCard.value === '6'));
//  - всі червоні карти
console.log(cards.filter(oneCard => oneCard.color === 'red'));
//  - всі буби
console.log(cards.filter(oneCard => oneCard.cardSuit === 'clubs'));
//  - всі трефи від 9 та більше
console.log(cards.filter(oneCard => oneCard.cardSuit === 'clubs' && (oneCard.value !== '6' && oneCard.value !== '7'
    && oneCard.value !== '8' && oneCard.value !== '9')));

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
let cardsObject = cards.reduce((accum, card)=> {
    switch (card.cardSuit){
        case 'spade':
            accum.spades.push(card);
            break;
        case 'diamond':
            accum.diamonds.push(card);
            break;
        case 'heart':
            accum.hearts.push(card);
            break;
        case 'clubs':
            accum.clubs.push(card);
            break;
    }
    return accum;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(cardsObject);

//взяти з arrays.js масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
console.log(coursesArray.filter(modules => modules.modules.includes('sass')));
// --написати пошук всіх об'єктів, в яких в modules є docker
console.log(coursesArray.filter(modules => modules.modules.includes('docker')));