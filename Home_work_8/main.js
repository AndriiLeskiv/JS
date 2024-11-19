//Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepClone(obj) {
    if (obj === null || obj === undefined) {
        return obj;
    }
    if (typeof obj === 'number' && isNaN(obj)) {
        return NaN;
    }
    if (typeof obj !== 'object') {
        return obj;
    }
    if (typeof obj === 'function') {
        return obj.bind(null);
    }
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const clonedObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(obj[key]);
        }
    }

    Object.setPrototypeOf(clonedObj, Object.getPrototypeOf(obj));

    return clonedObj;
}

const obj = {
    name: "Test",
    value: NaN,
    method: function () { return "Hello"; },
    nested: {
        key: "value",
        func: () => "Nested function",
    },
    array: [1, 2, 3, { a: 1 }],
};

const clonedObj = deepClone(obj);

console.log(clonedObj);
console.log(clonedObj.method());
console.log(clonedObj.nested.func());

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// за допомоги map перетворити кожен елемент на наступний тип {id, title, monthDuration}
// Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції
console.log(coursesAndDurationArray.map((value, index)=>({id: index + 1, title: value.title, monthDuration: value.monthDuration})));