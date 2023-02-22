let line = "------------------------------------------------";
let number = 1;

// 1 приготовить сэндвич
console.log(line);
console.log("Задача № " + number++);

let bread = "black bread";
let cheese = "Swiss cheese";
let meat = "pepperoni";
let pepperoniSanwich = "sandwich with pepperoni";

sandwich = pepperoniSanwich;

let step1 = `1. Take a piece of ${bread}`;
let step2 = `2. Take a piece of ${cheese}`;
let step3 = `3. Put cheese on bread`;
let step4 = `4. Take a piece of ${meat}`;
let step5 = `5. Put ${meat} on ${cheese}`;
let result = `Your ${sandwich} is ready! `;


console.log(`Recipe for ${sandwich} \n` + "\n" + "\t" + step1 + "\n" 
+ "\t" + step2 + "\n" + "\t" + step3 + "\n" + "\t" + step4 + "\n" 
+ "\t" + step5 + "\n", "\n",result);

// 2 калькулятор. Обработать значения с нулями

console.log(line);
console.log("Задача № " + number++);

let num1;
let num2;
let res;
let operator;

function kalkulyator(num1, num2, operator) {
    if (operator == "+") {
        res = num1 + num2;
        console.log("Your summ is:" + res);
    } else if (operator == "-") {
        res = num1 - num2;
        console.log("Your difference is:" + res);
    } else if (operator == "*") {
        res = num1 * num2;
        console.log("Your multyplication is:" + res);
    } else if (operator == "/") {
        if (num1 == 0 || num2 == 0) {
            console.log("Error!");
        } else {    
        console.log("Your devision is:" + (num1 / num2));
        }
    } else {
        console.log("Please enter another operator!");
    }      
    
}
kalkulyator(3,0,"*");

/**
 * 3. Создать переменные apple и student и присвоить им значения 40 и 6 соотетственно. Распечатать выражение, где вместо … - результаты математических вычислений:
 * Если … яблок поделить на … учеников, то каждый ученик получит по … яблок(a), и … яблок(а) останется учителю.
 */
console.log(line);
console.log("Задача № " + number++);

let apple = 40;
let student = 6;
apple = (apple)
console.log("Если "+apple+" яблок поделить на "+ student+
    " учеников, то каждый ученик получит по "+ (parseInt(apple / student))
    +" яблок, и "+(apple % student)+" яблока останется учителю.");

// Math.floor - деление без остатка, округление в меньшую сторону
// Math.ceil - деление без остатка, округление в большую сторону
// Math.round - деление без остатка, математическое округление
// parseInt - деление без остатка, приведение к числу, будет отброшена дробная часть

/**
 * 4. Распечатать выражение из задания 7 со значениями 100 и 21 соответственно.
 */
console.log(line);
console.log("Задача № " + number++);

apple = 100;
student = 21;
console.log("Если "+apple+" яблок поделить на "+ student+
    " учеников, то каждый ученик получит по "+ (parseInt(apple / student))
    +" яблок, и "+(apple % student)+" яблока останется учителю.");

/**
 *  5. Распечатать следующую таблицу,  где результат рассчитывается с помощью применения арифметических и унарных операторов:
 */
console.log(line);
console.log("Задача № " + number++);

let lin = "--------------------------------------------------";
let lin2 = "|";
let k = 5;
let l = 7;
let n = 9;

console.log(lin);
console.log("|     | +10 | -5 | *100 | /2 | %2 | ^2 | ++ | -- |");
console.log(lin);
console.log("| k=5 |  " + (k+10) + " " + lin2
         + "  " + (k-5) + " " + lin2
         + "  " + (k*100) + " " + lin2
         + "  " + (k/2) + " "+ lin2
         + "  " + (k%2) + " "+ lin2
         + " " + (k*k) + " "+ lin2
         + "  " + (++k) + " "+ lin2
         + "  " + (--k-1) + " "+ lin2
         );
console.log(lin);
console.log("| l=7 |  " + (l+10) + " " + lin2
         + "  " + (l-5) + " " + lin2
         + "  " + (l*100) + " " + lin2
         + "  " + (l/2) + " "+ lin2
         + "  " + (l%2) + " "+ lin2
         + " " + (l*l) + " "+ lin2
         + "  " + (++l) + " "+ lin2
         + "  " + (--l-1) + " "+ lin2
         );
console.log(lin);
console.log("| n=9 |  " + (n+10) + " " + lin2
         + "  " + (n-5) + " " + lin2
         + "  " + (n*100) + " " + lin2
         + "  " + (n/2) + " "+ lin2
         + "  " + (n%2) + " "+ lin2
         + " " + (n*n) + " "+ lin2
         + " " + (++n) + " "+ lin2
         + "  " + (--n-1) + " "+ lin2
         );
console.log(lin);

// 6  определить день недели
console.log(line);
console.log("Задача № " + number++);

let day;

function dayofweek(day){
    switch (day) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;   
        case 3:
            console.log("Wednesday");
            break;  
        default:
            console.log("Another day");       
    }
}
dayofweek(2);
