
let recurringIncome = () => {
    return $.get("/recurringIncome/select", function (recInc) { })
}
let staticIncome = () => {
    return $.get("/staticIncome/select", function (statInc) { })
}



let recIncObj;
let bensFunc = async () => {
    recIncObj = await recurringIncome()

    console.log(recIncObj)
    
    for(let i=0; i<recIncObj.length; i++) {
        console.log(i)
        console.log(recIncObj[i])
        
        recIncNameDisplay = recIncObj[i].recurring_income_name;
        recIncAmtDisplay = recIncObj[i].recurring_income_ammt;

        let incomeCard = `
        <div class="row">
            <div class="col s12 m6">
            <div class="card #a5d6a7 green lighten-3">
                <div class="card-content white-text">
                <span id="recIncTitle" class="card-title">${ recIncNameDisplay }</span>
                <p>Annual Income: $${ recIncAmtDisplay }</p>
                </div>
            </div>
            </div>
        </div>
        `

        $("#recIncContainer").append(incomeCard)

        
    }

    // Handlebars.registerHelper('recIncAmt', () => { return recIncObj })

    let statIncObj = await staticIncome()
    console.log(statIncObj);

    

    
};




bensFunc()

// $.get("/recurringExpense/select", function (recExp) {
//     console.log(recExp);
// })

// $.get("/staticExpense/select", function (statExp) {
//     console.log(statExp);
// })





