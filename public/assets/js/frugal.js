// click listeners
// drop down selections

// calculator

// moment.js
console.log("Hello");

$(document).ready(function(){
    $('select').formSelect();
    
    $("#incomeType").on("change", function(){
      let value = parseInt($(this).val())
      console.log(value)
      if (value === 1) {
        $("#incomeFrequency").removeClass("hidden");
      }
    });


    
  });
