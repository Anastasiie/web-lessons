alert("Створити об’єкт, який містить інформацію про назву товару, ціну та кількість. Створити метод, який підраховує вартість. Реалізувати фабричну функцію для створення об’єкта.");

function createobj(productName, price, quantity){ //назву товару, ціну та кількість
    return {
        productName: productName,
        price: price,
        quantity: quantity,
        info: function(){
            alert(`Назву товару: ${this.productName}, Ціна: ${this.price}, Кількість: ${this.quantity}`);
        },
        value : function () {
            alert ("Вартість:  "+ this.price*this.quantity);
        }
    }
}
let value=0;
let object = createobj(prompt("Введіть назву товару: "), prompt("Введіть ціну: "), prompt("Введіть кількість: "));
object.info(); 
object.value();