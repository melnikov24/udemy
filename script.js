let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget : money,
    timeData : time,
    expenses :{money : time},
    optionalExpenses: {},
    income : [],
    savings : false,
}
alert("ваш бюджет на 1 день : " + appData.budget / 30);