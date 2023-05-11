import './style.css'

//1. Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).

function age() { 
let x = +(prompt('Введите ваш возраст:') as string)
let y = x > 0 && x < 2 ? 'Младенец' :
x >= 2 && x < 12 ? 'Ребенок' :
x >= 12 && x < 18 ? 'Подросток' :
x >= 18 && x < 60 ? 'Взрослый' :
'Пенсионер'
console.log(y)
}
// age()

//2. Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).

function sim() {
    let num = +(prompt('Введите цифру от 0 до 9:') as string)
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

//3. Запросить у пользователя трехзначное число и проверить,
// есть ли в нем одинаковые цифры.

function sravnenie() {
    let num = +(prompt('Введите трёхзначное число:') as string)
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

//4. Запросить у пользователя год и проверить, високосный он
// или нет. Високосный год либо кратен 400, либо кратен 4 и
// при этом не кратен 100

function leapYear() {
    let year = +(prompt('Введите год:') as string)
    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        console.log('Високосный')
    }
    else {
        console.log('Не високосный')
    }
}

// leapYear()

//5. Запросить у пользователя пятиразрядное число и опреде-
// лить, является ли оно палиндромом.

function polindrom() {
    let num = +(prompt('Введите пятизначное число: ') as string)
    let num1 = num % 10
    let num2 = (num - num % 10) % 100 / 10
    // let num3 = (num - num % 100) % 1000 / 100
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

//6. Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.

function valuta() {
    let sum
    let USD = +(prompt('Введите кол-во USD:') as string)
    let val = +(prompt('Выберете валюту, в которую перевести: 1 - EUR, 2 - UAH, 3 - AZN') as string)
    let EUR = 1.1043
    let UAH = 0.0271
    let AZN = 0.5882
    if(val == 1) {
        return console.log(sum = USD / EUR)
    }
    else {
        if(val == 2) {
            return console.log(sum = USD / UAH)
        }
        else {
            if(val == 3) {
                return console.log(sum = USD / AZN)
            }
            else {
                return alert('Проверьте правильность ввведённых данных')
            }
        }
    }

}

// valuta()


// 7. Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.

function sale() {
    let sum = +(prompt('Введите сумму покупки:') as string)
    if(sum < 200) {
        console.log(`Скидки нет. К оплате: ${sum}`)
    }
    else {
        if(sum >=200 && sum < 300) {
            console.log(`Скидка 3%. К оплате: ${sum - (sum * 0.03)}`)
        }
        else {
            if(sum >=300 && sum < 500) {
                console.log(`Скидка 5%. К оплате: ${sum - (sum * 0.05)}`)
            }
            else {
                if(sum >= 500) {
                    console.log(`Скидка 7%. К оплате: ${sum - (sum * 0.07)}`)
                }
                else {
                    console.log(`Проверьте правильность введённых данных.`)
                }
            }
        }
    }
}

// sale()

