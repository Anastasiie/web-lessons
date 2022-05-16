alert("Створити фабричну функцію, яка повертає об’єкт з заданими полями: Назва дня тижня, температура повітря. Вивести під таблицею  назву найхолоднішого дня.");

let days= parseInt(prompt("Введіть кількість днів: "));
let tempd=[];
//let temperature=[];
let tw=[];//weeks=[];
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
    tw.push(parseInt(t));   //2

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
for (let i = 0; i < days*3; i=+3) {
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
    
} 
    
/*for (let i = 0; i < days; i++) {
        let row_1 = document.createElement('tr');
        for (let j = 0; j < days; j++) {
        let heading_1 = document.createElement('th');
        heading_1.innerHTML = tw[i+j]; 
        row_1.appendChild(heading_1);
        }
        
        
        thead.appendChild(row_1);
    }
    //createTable();
    // Adding the entire table to the body tag
    
    

for (let i = 0; i < tw.length; i++) {
        let row_1 = document.createElement('tr');
        for (let j = 0; j < days; j++) {
            let heading_1 = document.createElement('th');
            heading_1.innerHTML = tw[j]; 
            let heading_2 = document.createElement('th');
            heading_2.innerHTML = "Name";
            let heading_3 = document.createElement('th');
            heading_3.innerHTML = "Company";
            
            row_1.appendChild(heading_1);
            row_1.appendChild(heading_2);
            row_1.appendChild(heading_3);
        }
        thead.appendChild(row_1);
    } 

  for (let i = 0; i < days; i++) {
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
        
        thead.appendChild(row_1);}
    } 


for (let i = 0; i < tw.length; i++) {
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = tw[i];
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = tw[i+1];
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = tw[i+2];

row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
thead.appendChild(row_1);





for (var key in obj) {
      var person = obj[key];
      var row = document.createElement("tr");
      for(var key in person) {
  
        var td = document.createElement("td");
        var cellText = document.createTextNode(person[key]);
        td.appendChild(cellText);
        row.appendChild(td);
  
      }
  
      tbody.appendChild(row);
    }
  
    body.appendChild(table);
    table.appendChild(thead);
    table.appendChild(tbody);
  }
  
  
let tr = document.createElement('<tr>');
for (let i = 0; i < td.id.length; i++){
    let tr = '<tr>'; // создаем строку таблицы
    tr += '<td>' + td.numb[i] + '</td>'; // добавляем столбцы в строку
    tr += '<td>' + td.weeks[i+1] + '</td>';
    tr += '<td>' + td.t[i+2] + '</td>';
    tr += '</td>';
    $('#painting > tbody:last-child').append(tr); // добавляем полученную строку в дом
}
let table= document.querySelector('#table');
function fillTable(table, id){
    for (let i = 0; i < days; i++){
        let tr = document.createElement('<tr>'); // создаем строку таблицы
        for (let j = 0; j < id.length; j++){
        let td = document.createElement('<td>'); //столбец 
        td.innerHTML = id[i][j];
        tr.appendChild(id);
        }
        table.appendChild(tr);
    }
}

fillTable(table, tw);



function NTD(numb,weeks, t){
    return {
        numb:numb+1,
        weeks: weeks,
        t:t,
    }
}
NTD(numb,day,t); 
*/
