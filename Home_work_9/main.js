// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let divBox = document.createElement('div');
divBox.classList.add('wrap', 'collapse', 'alpha', 'beta');
let titleBox = document.createElement('h2');
titleBox.innerText = 'Test Title';
divBox.style.background = 'yellow';
divBox.style.color = 'blue';
titleBox.style.fontSize = '25px';
divBox.appendChild(titleBox);
document.body.appendChild(divBox);

let cloneDivBox = divBox.cloneNode(true);
document.body.appendChild(cloneDivBox);
//////////////////////////////////////////////////////

//- Є масив:
let pagesName =  ['Main','Products','About us','Contacts'];
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let ulBox = document.createElement('ul');
for (const pageName of pagesName) {
    let liContent = document.createElement('li');
    liContent.innerText = pageName;
    ulBox.appendChild(liContent);
}
document.body.appendChild(ulBox);
///////////////////////////////////////////////////////////////

//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    let itemBox = document.createElement('div');

    let titleItem = document.createElement('h2');
    let monthDurationItem = document.createElement('p');
    titleItem.innerText = item.title;
    monthDurationItem.innerText = item.monthDuration;

    itemBox.append(titleItem, monthDurationItem);
    document.body.appendChild(itemBox);
}
///////////////////////////////////////////////////////////////
//- Є масив
let newCoursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const item of newCoursesAndDurationArray) {
    let itemBox = document.createElement('div');
    itemBox.classList.add('item');

    let titleItem = document.createElement('h1');
    titleItem.classList.add('heading');
    titleItem.innerText = item.title;

    let monthDurationItem = document.createElement('p');
    monthDurationItem.classList.add('description');
    monthDurationItem.innerText = item.monthDuration;

    itemBox.append(titleItem, monthDurationItem);
    document.body.appendChild(itemBox);
}