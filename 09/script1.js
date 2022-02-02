function costi(){
let price =prompt("Цена: ");
let amount=prompt("Количество: ");
let cost= price*amount; //стоимость = ц*к
let rezult;
if(cost>1000){
    result=cost/100*5;
    alert("Итоговая цена: "+ result+ " грн");
}
else alert("Итоговая цена: "+ result+ " грн");
}