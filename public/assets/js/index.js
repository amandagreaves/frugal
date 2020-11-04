$("#button").click(() => {
    $.get("/recurringExpense/select", function(recExp) {
        console.log(recExp);
    })
    
    $.get("/staticExpense/select", function(statExp) {
        console.log(statExp);
    })
   
    $.get("/recurringIncome/select", function(recInc) {
        console.log(recInc);
    })
   
    $.get("/staticIncome/select", function(statInc) {
        console.log(statInc);
    })


})

    