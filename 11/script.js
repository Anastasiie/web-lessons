alert("Створити фабричну функцію, яка повертає об’єкт з заданими полями: Назва дня тижня, температура повітря. Вивести під таблицею  назву найхолоднішого дня.");

let days= parseInt(prompt("Введіть кількість днів: "));
let tw=[], numb =0,temday=0, min=0, counter=0;
for (let i = 0; i < days; i++) {
    let temperatureAndDays = prompt("Введіть день тижня та температуру повітря (через пропуск): ");  
    temday = temperatureAndDays.split(' ');
    let day= temday[0];
    let t=temday[1];
    numb++;
    tw.push(numb);
    tw.push(day);   //Пн
    tw.push(parseInt(t));   //2 
    //пн -12, вт -7
    console.log(temday);
}
//console.log(tw);//1,пн,-12,2,вт,-7

function createTable() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('body').appendChild(table);

    // Creating and adding data to first row of the table
    for (let i = 0; i < tw.length; i=i+3) {
        let row_1 = document.createElement('tr');
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = tw[i]; 
        let heading_2 = document.createElement('th');
        heading_2.innerHTML = tw[i+1];
        let heading_3 = document.createElement('th');
        heading_3.innerHTML = tw[i+2];
        row_1.appendChild(heading_1);
        row_1.appendChild(heading_2);
        row_1.appendChild(heading_3);
        
        thead.appendChild(row_1);
    }   
    let row_2 = document.createElement('tr');
    thead.appendChild(row_2);
} 

function mini(temperdays){
//min = temperdays[1];
for (let i = 2  ; i < temperdays.length; i=i+3) 
{
    if (temperdays[i] < min) 
    {
        min = temperdays[i];
    }/**/
}
    //console.log("minT: "+min);
    counter= tw.indexOf(min);
    //console.log(counter);
}

mini(tw);
let week = tw[counter-1]; 
document.write('<p class = "end">'+ "Найхолодніший день: "+week+"</p>");
/**/
