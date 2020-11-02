$(document).ready(function () {
    $('select').formSelect();
    $(".dropdown-trigger").dropdown();

    $("#submitBtn").click(() => {
        event.preventDefault();

        let recExpName = $("#recExpName").val();
        let recExpAmount = calculateAnnualExpense();
        let recExpDate = parseInt($("#recExpDate").val());

        let newRecurringExpense = {
            recurring_expense_name: recExpName,
            recurring_expense_ammt: recExpAmount,
            recurring_expense_date: recExpDate
        };
        console.log(newRecurringExpense);
        $.post("/recurringExpense/new", newRecurringExpense)

    })



});

let calculateAnnualExpense = () => {
    return $("#recExpAmount").val() * 12;
}

