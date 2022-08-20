/* 1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального поиска и замены. */

let str1 = 'aaa@bbb@ccc';
console.log(str1.replace(/@/g, '!'));


/* 2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту дату в формат 31/12/2025. */

console.log('**********');

let date2 = '2025-12-31';
console.log(date2.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));


/* 3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово «javascript» тремя разными способами (через substr, substring, slice). */

console.log('**********');

let str3 = 'Я учу javascript!';

console.log(str3.substring(2, 5));
console.log(str3.substring(6, 16));
console.log(str3.substr(2, 3));
console.log(str3.substr(6, 10));
console.log(str3.slice(2,6));
console.log(str3.slice(6,16));


/* 4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

console.log('**********');

let arr4 = [4, 2, 5, 19, 13, 0, 10],
    sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
    arr4[i] = arr4[i]**3;
    // arr4[i] = Math.pow(arr4[i], 3);
    sum4 += arr4[i];
}

console.log(Math.sqrt(sum4));


/* 5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1. */

console.log('**********');

function f5(a, b, c) {
    c = b - a;
    console.log(Math.abs(c));
}

f5(6, 1)
f5 (3, 5)


/* 6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014). */

console.log('**********');

let date6 = new Date();
function get6(num){
	if (num > 0 && num < 10) { 
		return '0' + num;
	} return num;
}

console.log(date6.getHours() + ':' + date6.getMinutes() + ':' + date6.getSeconds() + ' ' + get6(date6.getDate()) + '.' + get6(date6.getMonth() + 1) + '.' + date6.getFullYear());


/* 7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'. */

console.log('**********');

let regExp_7 = /a[b]{1,}a/g;
let str = regExp_7[Symbol.matchAll]('aa aba abba abbba abca abea');

for (let s of str) {
    console.log(s[0]);
}

/* let str7 = 'aa aba abba abbba abca abea';

console.log(str7.replace(/ab*a/gi, 'найден'));
console.log(str7.match(/ab*a/gi)); */


/* 8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения. */

console.log('**********');

