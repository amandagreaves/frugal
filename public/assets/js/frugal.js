$(document).ready(function () {

    var newRecurringIncome = {
        recurring_income_name: "day-job",
        recurring_income_ammt: 50000,
      };
    
      console.log(newRecurringIncome);
    
      // Send an AJAX POST-request with jQuery
      $.post("/api/new", newRecurringIncome)
      
    $('select').formSelect();

    $("#employmentStatus").on("change", function () {

        let value = parseInt($(this).val());
        console.log(value)
        if (value === 1) {
            $("#paidHourlyContainer").empty()
            $("#paidHourlyContainer").append(paidHourlyForm);
        };
    });

    $("#paidHourlyChoice").on("change", function () {
        let value = parseInt($(this).val());

        if (value === 1) {
            $("#payAmmountContainer").empty();
            $("#payAmmountContainer").append(hourlyIncomeForm)
        } else if (value === 2) {
            $("#payAmmountContainer").empty();
            $("#payAmmountContainer").append(annualIncomeForm)
        };
    });


});

let annualIncomeForm = `
<div id="annualIncome" class="input-field col s6">
    <input placeholder="" type="text" class="validate">
    <label for="first_name">What is your annual salary?</label>
</div>`;

let hourlyIncomeForm = `
<div id="hourlyIncome" class="input-field col s6">
    <input placeholder="" type="text" class="validate">
    <label for="first_name">What is your hourly rate?</label>
</div>`;

let paidHourlyForm = `
<div class="input-field col s6">
    <select id="paidHourlyChoice">
        <option value="" disabled selected>Choose your option</option>
        <option value="1">Yes</option>
        <option value="2">No</option>
    </select>
    <label>Are you paid hourly?</label>
</div>`

$("#chirp-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newRecurringIncome = {
      recurring_income_name: "day-job",
      recurring_income_ammt: 50000,
    };
  
    console.log(newRecurringIncome);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newRecurringIncome)
      // On success, run the following code
    //   .then(function() {
  
    //     var row = $("<div>");
    //     row.addClass("chirp");
  
    //     row.append("<p>" + newChirp.author + " chirped: </p>");
    //     row.append("<p>" + newChirp.body + "</p>");
    //     row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
  
    //     $("#chirp-area").prepend(row);
  
    //   });
  
    // Empty each input box by replacing the value with an empty string
    // $("#author").val("");
    // $("#chirp-box").val("");
  });