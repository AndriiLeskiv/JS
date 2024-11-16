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

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)