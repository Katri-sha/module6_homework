//задание 2

/*Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.*/

function checkSimple (num){
    if ((num > 1000) || (num < 2)){
      return console.log ("Данные введены не верно");
    } else {
      let divider = 0;
      for (let i = 1; i <= num; i++){
          if (num % i === 0){
            divider++;
          }
      }
      if (divider === 2) {
        return console.log('число простое');
      } else {
        return console.log('число составное');
      }
    }
  }
  let userNum = +prompt('Please enter number');
  checkSimple(userNum);