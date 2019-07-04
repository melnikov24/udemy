

let money, time;
    
function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money =="" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    
};       

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
     
            if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            }
            else {
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    return appData.moneyPerDay;
    },
    detectLevel: function () {
        if(appData.moneyPerDay <100) {
            console.log('минимальный уровень достатка')
        }
        else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('средний уровень достатка');
        }
        else if (appData.moneyPerDay > 2000) {
            console.log('высокий уровень достатка');
        }
        else {
            console.log('error');
         }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt('каковва сумма  накоплений?'), 
                percent = +prompt('Под какой процент');
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome)
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья неоязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function(){
        let i = true;
        while (i == true) {      
        
       let items = prompt('что принесёт доп доход? (перечислите через запятую)', '');
       if (typeof(items)=== 'string' && (typeof(items)) != null && items != ''){
       appData.income = items.split(', ') ;
       appData.income.push(prompt('может что-то ещё?', ''));
       appData.income.sort();
       i = false;
    }
    else{
        let items = prompt('что принесёт доп доход? (перечислите через запятую)', '');
    }
}
}
};

appData.chooseIncome();

 appData.chooseExpenses();

 appData.chooseOptExpenses();

 appData.detectDayBudget ();

 appData.detectLevel();

 appData.checkSavings();

console.log(appData);

appData.income.forEach(function(item, i){
    alert('Способы доп. заработка: ' + ++i + ' ' + item )
});

for(let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}
