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

