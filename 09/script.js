alert("Добро пожаловать  в калькулятор А вдруг?");
function calculate(){
let m = prompt("Введіть номер операції переведення: 1- в біти; 2- в Гб; 3- в Мбіт;");
let Num = Number(m);
let rez;
let n=prompt("Кіл-сть Мб: ");
switch(m) {
    case '1':  // біти 
        rez=n*8000000;
        alert("В "+n+" Мб = "+rez+" бітів");
    break;
    case '2':  // гіг.б 
        rez=n*0.001; 
        alert("В "+n+" Мб = "+rez+" Гб");
    break;
    case '3':  // мег.біт if 
        rez=n*8;
        alert("В "+n+" Мб = "+rez+" Мбіт");
    break;
    default:
        alert("Помилка");
    break;
  }
}