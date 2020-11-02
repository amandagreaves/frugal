$(document).ready(function () {
    $('select').formSelect();
    $(".dropdown-trigger").dropdown();

    $("#submitBtn").click(() => {
        event.preventDefault();

        let goalName = $("#statIncName").val();
        let goalAmount = parseInt($('#statGoalAmount').val());
        let goalDate = parseInt($("#statGoalDate").val());

        let newStatInc = {
            goal_name: goalName,
            goal_ammt: goalAmount,
            goal_date: goalDate
        };
        console.log(newStatInc);
        $.post("/staticGoal/new", newGoal)

    })
});