//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let userArray = [
    new User(1, 'Andrii', 'Test', 'test@gmail.com', '+380987454321'),
    new User(2, 'John', 'Doe', 'john.doe@gmail.com', '+380987654321'),
    new User(3, 'Jane', 'Smith', 'jane.smith@yahoo.com', '+380934567890'),
    new User(4, 'Alex', 'Brown', 'alex.brown@outlook.com', '+380951234567'),
    new User(5, 'Emily', 'Johnson', 'emily.johnson@example.com', '+380973214567'),
    new User(6, 'Michael', 'Williams', 'michael.williams@gmail.com', '+380992345678'),
    new User(7, 'Sarah', 'Garcia', 'sarah.garcia@yahoo.com', '+380963456789'),
    new User(8, 'Chris', 'Martinez', 'chris.martinez@outlook.com', '+380953456123'),
    new User(9, 'Sophia', 'Davis', 'sophia.davis@example.com', '+380973123456'),
    new User(10, 'David', 'Taylor', 'david.taylor@gmail.com', '+380962134567'),
];
console.log(userArray);

//- Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
let filteredArray = userArray.filter(value => value.id % 2 === 0);
console.log(filteredArray);

//- Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortArray = userArray.sort( (user1, user2) => user1.id - user2.id);
console.log(sortArray);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Order {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [
    new Client(1, 'Andrii', 'Test', 'test@gmail.com', '+380987454321', [
        new Order('Laptop', 1200),
        new Order('Mouse', 25),
        new Order('Keyboard', 45)
    ]),
    new Client(2, 'John', 'Doe', 'john.doe@gmail.com', '+380987654321', [
        new Order('Monitor', 300),
        new Order('HDMI Cable', 10)
    ]),
    new Client(3, 'Jane', 'Smith', 'jane.smith@yahoo.com', '+380934567890', [
        new Order('Tablet', 500)
    ]),
    new Client(4, 'Alex', 'Brown', 'alex.brown@outlook.com', '+380951234567', [
        new Order('Printer', 200),
        new Order('Paper', 15)
    ]),
    new Client(5, 'Emily', 'Johnson', 'emily.johnson@example.com', '+380973214567', [
        new Order('Smartphone', 800),
        new Order('Phone Case', 20),
        new Order('Charger', 25)
    ]),
    new Client(6, 'Michael', 'Williams', 'michael.williams@gmail.com', '+380992345678', [
        new Order('Camera', 900),
        new Order('Memory Card', 50)
    ]),
    new Client(7, 'Sarah', 'Garcia', 'sarah.garcia@yahoo.com', '+380963456789', [
        new Order('Headphones', 100)
    ]),
    new Client(8, 'Chris', 'Martinez', 'chris.martinez@outlook.com', '+380953456123', [
        new Order('Gaming Chair', 250),
        new Order('Desk', 180)
    ]),
    new Client(9, 'Sophia', 'Davis', 'sophia.davis@example.com', '+380973123456', [
        new Order('Cookware Set', 120),
        new Order('Knife Set', 75),
        new Order('Cutting Board', 30)
    ]),
    new Client(10, 'David', 'Taylor', 'david.taylor@gmail.com', '+380962134567', [
        new Order('Fitness Tracker', 150)
    ])
];
console.log(clients);

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по-кількості товарів в полі order по зростанню. (sort)
let sortClientsArray = clients.sort( (client1, client2) => client1.order.length - client2.order.length);
console.log(sortClientsArray);

//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car