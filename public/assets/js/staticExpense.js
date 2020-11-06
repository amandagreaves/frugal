$(document).ready(function () {

    $("#submitBtn").click(() => {
        event.preventDefault();

        let statExpName = $("#statExpName").val();
        let statExpAmount = parseInt($('#statExpAmount').val());
        let statExpDate = parseInt($("#statExpDate").val());

        let newStatExp = {
            static_expense_name: statExpName,
            static_expense_ammt: statExpAmount,
            static_expense_date: statExpDate
        };
        console.log(newStatExp);
        $.post("/staticExpense/new", newStatExp)

    })
});