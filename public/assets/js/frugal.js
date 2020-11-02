$(document).ready(function () {
    $('select').formSelect();

    $("#employmentStatus").on("change", function () {

        let value = parseInt($(this).val());
        console.log(value)
        if (value === 1) {
            $("#recIncName").removeClass("hidden");
            $("#paidHourly").removeClass("hidden");
            console.log("value", $("#paidHourlyContainer"))
        };
    });

    $("#paidHourlyChoice").on("change", function () {
        let value = parseInt($(this).val());

        if (value === 1) {
            $("#annualIncome").addClass("hidden");
            $("#hourlyIncome").removeClass("hidden");
            $("#hourlyHours").removeClass("hidden");
        } else if (value === 2) {
            $("#hourlyHours").addClass("hidden");
            $("#hourlyIncome").addClass("hidden");
            $("#annualIncome").removeClass("hidden");
        };
    });

    $("#submitBtn").click(() => {
        event.preventDefault();
        let recIncName = $("#recIncVal").val();
        let recIncAmount = calculateAnnualIncome();

        let newRecurringIncome = {
            recurring_income_name: recIncName,
            recurring_income_ammt: recIncAmount,
        };

        $.post("/api/new", newRecurringIncome)

    })



});

let calculateAnnualIncome = () => {
    if (parseInt($("#paidHourlyChoice").val()) === 1) {
        let hourlyAmount = parseInt($("#hourlyIncVal").val());
        let hourlyHours = parseInt($("#hourlyHoursVal").val());

        let recIncAmount = hourlyAmount * hourlyHours * 52;

        return recIncAmount;
    } else if (parseInt($("#paidHourlyChoice").val()) === 2) {
        let recIncAmount = parseInt($("#annualIncVal").val());
        return recIncAmount;
    }
}