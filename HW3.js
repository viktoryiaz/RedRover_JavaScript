let line = "------------------------------------------";
let num = 1;
console.log(line);
console.log("Задача № " + num++);
//  1 Выяснить какое из трёх чисел больше

let num1;
let num2;
let num3;
function max(num1, num2, num3){
    if(num1>num2 && num1>num3) {
        console.log("The biggest number is " + num1);
    } else if(num2>num1 && num2>num3){
        console.log("The biggest number is " + num2);
    } else if(num3>num1 && num3>num2){
        console.log("The biggest number is " + num3);
    } else {
        console.log("Some equael numbers")
    }

}
max(5,7,3);

console.log(line);
console.log("Задача № " + num++);
// 2 Даны длины трех отрезков. Определить возможность существования треугольника
// и его тип

let ab = 4;
let bc = 2;
let ac = 3;

if(ab + bc > ac && ab + ac > bc && bc + ac > ab) {
    if(ab == ac && ab == bc){
        console.log("Треугольник равносторонний");
    } else if (ab == ac || ab == bc || ac == bc) {
        console.log("Треугольник равнобедренный");
    } else {
        console.log("Треугольник разносторонний");
    }
} else {
    console.log("Треугольник не существует");
}

console.log(line);
console.log("Задача № " + num++);
/** 3 Игра камень-ножницы-бумага */

const rps = (p1, p2) => {
    if(p1 === p2) {
        console.log("Draw!");
    } else if (p1 === "scissors" && p2 === "paper" || p1 === "rock" &&
       p2 === "scissors" || p1 === "paper" && p2 === "rock") {
        console.log("Player 1 won!");
    } else {
        console.log("Player 2 won!");
       }
}
rps("scissors", "rock");

console.log(line);
console.log("Задача № " + num++);
/** 4 Высчитать среднее арифметическое из трех оценок и 
* написать его эквивалент в буквах 
* 90-100 = А
* 80-90 = В
* 70-80 = С
* 60-70 = D
* 0 -60 = F
*/  
function grade(s1, s2, s3){
    let avgG = (s1 + s2 + s3)/3;
    if(avgG >= 90) {
        console.log("A");
    } else if(avgG >= 80 && avgG < 90) {
        console.log("B");
    } else if(avgG >= 70 && avgG < 80) {
        console.log("C");
    } else if(avgG >= 60 && avgG < 70) {
        console.log("D");
    } else {
        console.log("F");
    }      
}
grade(97,65,77);

console.log(line);
console.log("Задача № " + num++);
/** Написать функцию, котоая возвращает стоимость хот-дога в зависимости
 * от количества покупателей
 * n<5    price 100
 * n>=5 and n<10   95
 * n>=10    90
 */
function hotdog(n) {
    if(n < 5) {
        console.log(n*100);
    } else if(n >= 5 && n < 10) {
        console.log(n*95);
    } else {
        console.log(n*90);
    }
}
hotdog(7);