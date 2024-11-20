// Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
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
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
for (const course of coursesArray) {

    let courseBox = document.createElement('div');
    courseBox.classList.add('item');

    let titleCourse = document.createElement('h2');
    titleCourse.classList.add('heading');
    titleCourse.innerText = course.title;

    let courseInfo = document.createElement('div');
    courseInfo.classList.add('courseInfo');

    let monthDurationItem = document.createElement('p');
    monthDurationItem.innerText = course.monthDuration;
    let hourDuration = document.createElement('p');
    hourDuration.innerText = course.hourDuration;
    courseInfo.append(monthDurationItem, hourDuration);

    let modulesBox = document.createElement('div');
    modulesBox.classList.add('modulesBox');

    let ulBox = document.createElement('ul');
    for (const modules of course.modules) {
        let liContent = document.createElement('li');
        liContent.innerText = modules;
        ulBox.appendChild(liContent);
    }
    modulesBox.appendChild(ulBox);

    courseBox.append(titleCourse, courseInfo, modulesBox);
    document.body.appendChild(courseBox);
}

////////////////////////////////////////////////////////////////////////////////
// створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.
let divBox = document.createElement('div');
divBox.classList.add('container');

let divBox1 = document.createElement('div');
divBox1.innerText = "Lorem ipsdc test";
let divBox2 = document.createElement('div');
divBox2.innerText = "створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.";
let divBox3 = document.createElement('div');
divBox3.innerText = " створити три блоки з різним мали висоту найбільшого з них.";

divBox.append(divBox1, divBox2, divBox3);
document.body.appendChild(divBox);