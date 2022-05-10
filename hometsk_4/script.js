function task1(){
    let words=prompt("Введіть речення:");
    console.log(words);
    console.log(`Кількість слів: `+ words.split(" ").length);
}
function task2(){
    let numbers = [];
        let odd = [];
        let even = [];  
        let numb=0;
        let sum=0;
        do {
            numb=parseInt(prompt("Введіть число, для зупинки введіть 0"));
            sum+=numb;
            if(numb%2!=0){
                odd.push(+numb);
             }
             if(numb%2==0){
                even.push(+numb);
             }
            numbers.push(+numb);
             
        } while (numb!=0)
        console.log("Числa: "+numbers+", ");
        console.log("Сумa: "+sum);
        console.log("Парні: "+even+", ");
        console.log("Непарні: "+odd+", ");
}
function task3(){
    let email = [];
    email = prompt("Введіть свою електронну пошту (gmail.com/i.ua/ukr.net/outlook.com): ");
    "така електронна адреса вже зареєстрована!"
}