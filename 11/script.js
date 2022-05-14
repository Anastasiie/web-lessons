function airTemperature(){
    let temp=[];
    let temperature=0;
    temperature = parseInt(prompt("Введіть температуру повітря: "));
    temp.push(+temperature);
    document.write(temperature);
}
function daysOfTheWeek(){
    let days=["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

    let amount;
    amount = parseInt(prompt("Введіть кількість днів: "));
    for (let i = 0; i < amount.lenght; i++) {
        document.write(i+1);
        document.write(days[i]);
        t = parseInt(prompt("Введіть температуру: "));
        document.write(t);
    }

}
