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

// 8. Запросить у пользователя длину окружности и периметр
// квадрата. Определить, может ли такая окружность поме-
// ститься в указанный квадрат.

// Math.sqrt() - квадратный корень
// D = C/Pi - диаметр через длину окружности
function okrujnostIkvadrat() {
    let okrujnost = +(prompt('Введите длину окружности:') as string)
    let perimetr = +(prompt('Введите периметр квадрата:') as string)
    let diametr = okrujnost / 3.14
    let storona = perimetr / 4
    if (diametr <= storona) {
        console.log(`Окружность с длиной ${okrujnost} ПОМЕСТИТСЯ в квадрат с периметром ${perimetr}`)
    }
    else {
        console.log(`Окружность с длиной ${okrujnost} НЕ поместится в квадрат с периметром ${perimetr}`)
    }
}

// okrujnostIkvadrat()

// 9. Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.

/* 
1. Cколько лап у виверн?
а) 2 !
б) 4
в) 6

2. Как переводится среднеанглийское слово "wyvere", от которого происходит слово "виверна"?
а) гадюка !
б) ящерица
г) динозавр

3. Где чаще всего изображали виверн в средневековье?
а) на окнах храмов
б) на стенах замков
в) на гербах !

*/

function viktorina() {
    let i = 0
    let firstQuestion = prompt('За каждый правильный ответ вы получаете по 2 балла.  1. Cколько лап у виверн? а) 2; б) 4; в) 6') 
    let secondQuestion = prompt('2. Как переводится среднеанглийское слово "wyvere", от которого происходит слово "виверна"? а) гадюка; б) ящерица; г) динозавр')
    let thirdQuestion = prompt('3. Где чаще всего изображали виверн в средневековье? а) на окнах храмов; б) на стенах замков; в) на гербах')
    if (firstQuestion == 'a' || firstQuestion == 'а' || firstQuestion == '2') {
        i = i + 2
    }
    if (secondQuestion == 'a' || secondQuestion == 'а' || secondQuestion == 'гадюка') {
        i = i + 2
    }
    if (thirdQuestion == 'в' || thirdQuestion == 'на гербах') {
        i = i + 2
    }
    console.log(`Вы набрали ${i} баллов`)
}

// viktorina()

// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.


function data() {
let day = +(prompt('Введите сегодняшнюю дату (только число):') as string)
let month = +(prompt('Введите сегодняшний месяц(цифрой):') as string)
let year = +(prompt('Введите сегодняшний год:') as string)
if (day >= 28 && day <= 31) {
    if (day == 31 && (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10)) {
        day = 1
        month++
    }
    else {
        if (day == 31 && month == 12) {
            year++
            month = 1
            day = 1
            console.log(`Завтра будет ${day}.${month}.${year}`)
        }
        else {
            if (day == 30 && (month == 4 || month == 6 || month == 9 || month == 11)) {
                day = 1
                month++
                console.log(`Завтра будет ${day}.${month}.${year}`)
            }
            else {
                if (day == 29 && month == 2) {
                    day = 1
                    month = 3
                    console.log(`Завтра будет ${day}.${month}.${year}`)
                }
                else {
                    if (day == 28 && month == 2) {
                        if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
                            day = 29
                            console.log(`Завтра будет ${day}.${month}.${year}`)
                        }
                        else {
                            day = 1
                            month = 3
                            console.log(`Завтра будет ${day}.${month}.${year}`)
                            }
                        } 
                    else {
                        day++
                        console.log(`Завтра будет ${day}.${month}.${year}`)
                        }
                    }
                }
            }
        }
    }
    else {
        day++
        console.log(`Завтра будет ${day}.${month}.${year}`)
        }
}

data()