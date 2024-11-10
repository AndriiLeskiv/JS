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

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function areaOfCylinder(H, R){
    return 2 * 3.14 * R*(H + R);
}
console.log(areaOfCylinder(5, 7));

//- створити функцію яка приймає масив та виводить кожен його елемент