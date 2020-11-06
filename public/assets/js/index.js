
let recurringIncome = () => {
    return $.get("/recurringIncome/select", function (recInc) { })
}
let staticIncome = () => {
    return $.get("/staticIncome/select", function (statInc) { })
}
let recurringExpense = () => {
    return $.get("/recurringExpense/select", function (recExp) {})
}
let staticExpense = () => {
    return $.get("/staticExpense/select", function (statExp) {})
}

let appendIncome = async () => {
    
    // append recurring income
    let recIncObj = await recurringIncome()
    for (let i = 0; i < recIncObj.length; i++) {
        recIncNameDisplay = recIncObj[i].recurring_income_name;
        recIncAmtDisplay = recIncObj[i].recurring_income_ammt / 12;

        let incomeCard = `<a class="collection-item"><span class="new badge" data-badge-caption="">$ ${ recIncAmtDisplay.toFixed(2) }</span>${ recIncNameDisplay }</a>`
        $("#recIncContainer").append(incomeCard)
    }

    // append static income
    let statIncObj = await staticIncome()
    for (let i = 0; i < statIncObj.length; i++) {
        statIncNameDisplay = statIncObj[i].static_income_name;
        statIncAmtDisplay = statIncObj[i].static_income_ammt;

        let incomeCard = `<a class="collection-item"><span class="new badge" data-badge-caption="">$ ${ statIncAmtDisplay }</span>${ statIncNameDisplay }</a>`
        $("#statIncContainer").append(incomeCard)
    }
};
appendIncome()


let appendExpense = async () => {
    
    // append recurring expense
    let recExpObj = await recurringExpense()
    for (let i = 0; i < recExpObj.length; i++) {
        recExpNameDisplay = recExpObj[i].recurring_expense_name;
        recExpAmtDisplay = recExpObj[i].recurring_expense_ammt / 12;

        let ExpenseCard = `<a class="collection-item"><span class="new badge red darken-1" data-badge-caption="">$ ${ recExpAmtDisplay.toFixed(2) }</span>${ recExpNameDisplay }</a>`
        $("#recExpContainer").append(ExpenseCard)
    }

    // append static Expense
    let statExpObj = await staticExpense()
    for (let i = 0; i < statExpObj.length; i++) {
        statExpNameDisplay = statExpObj[i].static_expense_name;
        statExpAmtDisplay = statExpObj[i].static_expense_ammt;

        let ExpenseCard = `<a class="collection-item"><span class="new badge red darken-1" data-badge-caption="">$ ${ statExpAmtDisplay }</span>${ statExpNameDisplay }</a>`
        $("#statExpContainer").append(ExpenseCard)
    }
};
appendExpense()


var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ["Bob's Burgers", "awef", "awef", "car payment", "car", "Car Payment", "Flight"],
        datasets: [{
          backgroundColor: [
            "#2ecc71",
            "#3498db",
            "#95a5a6",
            "#9b59b6",
            "#f1c40f",
            "#e74c3c",
            "#34495e"
          ],
          data: [40, 19, 3, 17, 28, 24, 7]
        }]
      }
    });


