
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
        recIncAmtDisplay = recIncObj[i].recurring_income_ammt;

        let incomeCard = `<a class="collection-item"><span class="new badge" data-badge-caption="">$ ${ recIncAmtDisplay }</span>${ recIncNameDisplay }</a>`
        $("#recIncContainer").append(incomeCard)
    }

    // append static income
    let statIncObj = await staticIncome()
    console.log(statIncObj)
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
    console.log(recExpObj)
    for (let i = 0; i < recExpObj.length; i++) {
        recExpNameDisplay = recExpObj[i].recurring_expense_name;
        recExpAmtDisplay = recExpObj[i].recurring_expense_ammt;

        let ExpenseCard = `<a class="collection-item"><span class="new badge red darken-1" data-badge-caption="">$ ${ recExpAmtDisplay }</span>${ recExpNameDisplay }</a>`
        $("#recExpContainer").append(ExpenseCard)
    }

    // append static Expense
    let statExpObj = await staticExpense()
    console.log(statExpObj)
    for (let i = 0; i < statExpObj.length; i++) {
        statExpNameDisplay = statExpObj[i].static_expense_name;
        statExpAmtDisplay = statExpObj[i].static_expense_ammt;

        let ExpenseCard = `<a class="collection-item"><span class="new badge red darken-1" data-badge-caption="">$ ${ statExpAmtDisplay }</span>${ statExpNameDisplay }</a>`
        $("#statExpContainer").append(ExpenseCard)
    }
};
appendExpense()




