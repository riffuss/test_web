let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');
let nameOfExpense = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        nameOfExpense: howMuch 
    },
    optinalExpenses: {},
    income: [],
    savings: false
};
alert("бюджет на 1 день: " + appData.expenses.nameOfExpense / 30);
