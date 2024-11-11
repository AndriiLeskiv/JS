//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaOfRectangle(a, b){
    return a * b;
}
console.log(areaOfRectangle(4,5));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
function areaOfCircle(r){
    return 3.14 * (r * r);
}
console.log(areaOfCircle(5));

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
function areaOfCylinder(H, R){
    return 2 * 3.14 * R*(H + R);
}
console.log(areaOfCylinder(5, 7));

//- створити функцію яка приймає масив та виводить кожен його елемент
function printerArray(array){
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
printerArray(['test', 4, 12, 'tesdfdf', 14]);

//- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function writeParagraph(textParagraph) {
    document.write(
        `<p>${textParagraph}</p>`
    )
}
writeParagraph('Створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент');

//- створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
// Текст li задати через аргумент всім однаковий
function writeUl(textUl) {
    document.write(
        `<ul>
            <li>${textUl}</li>
            <li>${textUl}</li>
            <li>${textUl}</li> 
        </ul>`
    )
}
writeUl('Текст li');

// - створити функцію яка створює ul з елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function createdUl(textUl, countLi) {
    let ulContent = `<ul>`;
    for (let i = 0; i < countLi; i++) {
        ulContent += `<li>${textUl}</li>`;
    }
    ulContent += `</ul>`;
    document.write(ulContent);
}
createdUl('Текст li', 10);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// (ul li) та виводить його через document.write
function getArray(array){
    let ulContent = `<ul>`;
    for (const arrayElement of array) {
        ulContent += `<li>${arrayElement}</li>`;
    }
    ulContent += `</ul>`;
    document.write(ulContent);
}
getArray(['test', 4, 12, 'tesdfdf', 14, true, 1242, 'master', false]);

//- створити функцію яка приймає масив об'єктів з наступними полями id, name, age та виводить їх в документ.
// Для кожного об'єкту окремий блок.
let products = [
    {
        id: 1,
        title: 'milk',
        age: 20
    },
    {
        id: 2,
        title: 'meat',
        age: 22
    },
    {
        id: 3,
        title: 'banana',
        age: 45
    },
    {
        id: 4,
        title: 'water',
        age: 78
    },
];

function getProducts(arrayProducts){
    for (const arrayProduct of arrayProducts) {
        document.write(`
            <div>
                <h2>${arrayProduct.id} -  ${arrayProduct.title}</h2>
                <p>Product age - ${arrayProduct.age}</p>
            </div>
        `);
    }
}
getProducts(products);

// - створити функцію яка повертає найменьше число з масиву
// function getMinNumber(arrayNumber){
//     return Math.min(...arrayNumber);
// }
function getMinNumber(arrayNumber){
    let min = arrayNumber[0];
    for (let i = 1; i < arrayNumber.length; i++) {
        if (arrayNumber[i] < min) {
            min = arrayNumber[i];
        }
    }
    return min;
}
console.log(getMinNumber([5, 2, 9, 1, -3, 10]));

// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr){
    let sumArr = 0;
    for (const arrElement of arr) {
        sumArr += arrElement;
    }
    return sumArr;
}
console.log(sum([1,2,10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    return arr;
}
console.log(swap([11,22,33,44],0,1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency){
    let changeCurrency;
    for (const itemValues of currencyValues) {
        if (itemValues.currency === exchangeCurrency){
            changeCurrency = itemValues;
        }
    }
    return sumUAH / changeCurrency.value;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));