// задание  3

/*Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и 
возвращает сумму этих двух чисел. Выведите в консоль результат.*/

function getSum(num1) {
  return function(num2) {
      return num1 + num2;
  }
}
const result = getSum(18);
console.log(`Sum of numbers = ${result(5)}`);