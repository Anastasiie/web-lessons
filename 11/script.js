alert("Створити фабричну функцію, яка повертає об’єкт з заданими полями: Назва дня тижня, температура повітря. Вивести під таблицею  назву найхолоднішого дня.");

let days= parseInt(prompt("Введіть кількість днів: "));
let tempd=[];
let tw=[], temperature=[], week=[];
let day=0, numb=0;
let t=0;

for (let i = 0; i < days; i++) {
    let temperatureAndDays = prompt("Введіть день тижня та температуру повітря (через пропуск): ");  
    temperatureAndDays.split(' ');
    tempd.push(temperatureAndDays); //пн 2,ср 3
}
//console.log("tempd "+tempd);
for (let i = 0; i < days; i++) {
    day=tempd[i].split(' ').slice(0, -1); 
    t=tempd[i].split(' ').slice(-1); 
    numb++;
    tw.push(numb);
    tw.push(day);   //Пн
    week.push(day);
    tw.push(parseInt(t));   //2
    temperature.push(parseInt(t));
}

let obj = Object.assign({}, tw);
//console.log(obj)

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
} /**/

function min(temperature){
    let mini= +(Math.min(...temperature));
    console.log("minT: "+mini);
}
min(week, temperature);
week = week.pop(); 
document.write("<p>"+ "Найхолодніший день: "+week+"</p>");
/**/
