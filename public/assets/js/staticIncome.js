$(document).ready(function () {
    $('select').formSelect();
    $(".dropdown-trigger").dropdown();

    $("#submitBtn").click(() => {
        event.preventDefault();

        let statIncName = $("#statIncName").val();
        let statIncAmount = parseInt($('#statIncAmount').val());
        let statIncDate = parseInt($("#statIncDate").val());

        let newStatInc = {
            static_income_name: statIncName,
            static_income_ammt: statIncAmount,
            static_income_date: statIncDate
        };
        console.log(newStatInc);
        $.post("/staticIncome/new", newStatInc)

    })
});