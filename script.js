let money = +prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: false
};

for(let i = 0; i < 2;){
    let nameOfExpense = prompt("Введите обязательную статью расходов в этом месяце"),
         howMuch = +prompt("Во сколько обойдется?");
         if(typeof(nameOfExpense) === 'string' && typeof(nameOfExpense) != null && typeof(howMuch) != null && 
         nameOfExpense != '' && howMuch != '' && nameOfExpense.length < 50){
            appData.expenses[nameOfExpense] = howMuch;
            console.log(appData.expenses[nameOfExpense]);
            i++;
         }
         
}

// let count = 0;
// while(count < 2){
//     let nameOfExpense = prompt("Введите обязательную статью расходов в этом месяце"),
//          howMuch = +prompt("Во сколько обойдется?");
//          if(typeof(nameOfExpense) === 'string' && typeof(nameOfExpense) != null && typeof(howMuch) != null && 
//          nameOfExpense != '' && howMuch != '' && nameOfExpense.length < 50){
//             appData.expenses[nameOfExpense] = howMuch;
//             console.log(appData.expenses[nameOfExpense]);
//             count++;
//          }
    
// }
// let count = 0;
// do{
//     let nameOfExpense = prompt("Введите обязательную статью расходов в этом месяце"),
//             howMuch = +prompt("Во сколько обойдется?");
//             if(typeof(nameOfExpense) === 'string' && typeof(nameOfExpense) != null && typeof(howMuch) != null && 
//              nameOfExpense != '' && howMuch != '' && nameOfExpense.length < 50){
//                 appData.expenses[nameOfExpense] = howMuch;
//                 console.log(appData.expenses[nameOfExpense]);
//                 count++;
//              }
// }
// while(count < 2);


appData.moneyPerDay = appData.budget/30;
alert("Ваш ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay <= 100){
    console.log("Вы нищеброд!!!!");
}else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Денег впритык(((");
}else if(appData.moneyPerDay > 2000){
    console.log("Кучеряво живешь, мажор!!!!");
}


