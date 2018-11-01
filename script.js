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

for(let i = 0; i < 2; i++){
    let nameOfExpense = prompt("Введите обязательную статью расходов в этом месяце"),
         howMuch = +prompt("Во сколько обойдется?");
         appData.expenses[nameOfExpense] = howMuch;
         console.log(appData.expenses[nameOfExpense]);
}

