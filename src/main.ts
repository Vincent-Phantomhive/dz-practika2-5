import './style.css'

// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

function age() { 
let x = prompt('Введите ваш возраст:') 
let y = x > 0 && x < 2 ? 'Младенец' :
x >= 2 && x < 12 ? 'Ребенок' :
x >= 12 && x < 18 ? 'Подросток' :
x >= 18 && x < 60 ? 'Взрослый' :
'Пенсионер'
console.log(y)
}
// age()

// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

function sim() {
    let num = +prompt('Введите цифру от 0 до 9:')
    switch(num) {
        case 1:
            console.log('!')
            break
        case 2:
            console.log('@')
            break
        case 3:
            console.log('#')
            break
        case 4:
            console.log('$')
            break
        case 5:
            console.log('%')
            break
        case 6:
            console.log('^')
            break
        case 7:
            console.log('&')
            break
        case 8:
            console.log('*')
            break
        case 9:
            console.log('(')
            break
        case 0:
            console.log(')')
            break
        default: 
            console.log('Извини, но с тупыми программа не работает ;(')
    }
}

// sim()

// Запросить у пользователя трехзначное число и проверить,
// есть ли в нем одинаковые цифры.

function sravnenie() {
    let num = +prompt('Введите трёхзначное число:')
    let num1 = num % 10
    let num2 = (num - num % 10) % 100 / 10
    let num3 = (num - num % 100) % 1000 / 100
    if(num1 == num2 || num1 == num3 || num2 == num3 ){
        console.log('Есть одинаковые цифры')
    }
    else {
        console.log('Нет одинаковый цифр')
    }
}

// sravnenie()

// Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

function leapYear() {
    let year = +prompt('Введите год:')
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        console.log('Високосный')
    }
    else {
        console.log('Не високосный')
    }
}

// leapYear()

// Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.

function polindrom() {
    let num = +prompt('Введите пятизначное число: ')
    let num1 = num % 10
    let num2 = (num - num % 10) % 100 / 10
    let num3 = (num - num % 100) % 1000 / 100
    let num4 = (num - num % 1000) % 10000 / 1000
    let num5 = (num - num % 10000) % 100000 / 10000
    if(num1 == num5 && num2 == num4){
        console.log('Полиндром')
    }  
    else {
        console.log('Не полиндром')
    }
}
// polindrom()

// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

function valuta() {
    let USD = prompt('Введите кол-во USD:')
    let val = prompt('Выберете валюту, в которую перевести: EUR, UAH, AZN')
    let EUR = 1.1043
    let UAH = 0.0271
    let AZN = 0.5882
    if 
}