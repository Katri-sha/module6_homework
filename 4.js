// задание 4
//Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.

function showNumber(num1, num2) {
    let i = num1;
    let timerId = setInterval(function() {
      console.log(i);
      if (i === num2) {
        clearInterval(timerId);
      }
      i++;
    }, 1000);
  }
  showNumber(5, 15);