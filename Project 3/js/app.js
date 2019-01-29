//setting focus on first field of text
$(document).ready(function(){
    $("#name").focus();
    $('#other-title').hide();
});

//
$('#title').on('change', function() {
    if($('#title').val() === 'other') {
      // show the item at #other-title
      $('#other-title').show();
    }else {
      // hide the item at #other-title
      $('#other-title').hide();
    }
 });

 document.getElementById("design").addEventListener("change", function(){
	var tShirtMenu = document.getElementById('design');
	var teeSelection = tShirtMenu.value;
	var colorSelector = document.getElementById('colors-js-puns');
	
	if(teeSelection) {
		colorSelector.innerHTML = "";
		
	}
	if(teeSelection === "js puns") {
		
		colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="cornflowerblue">Cornflower Blue</option><option value="darkslategrey">Dark Slate Grey</option><option value="gold">Gold</option></select>';
		
		
	}
	if(tsSelection === "heart js") {
		
		colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option></select>';
		
	}
});

// Register for Activities section of the form.
$('.activities input').on('change', function(){

if($('input[name="js-frameworks"]').prop('checked')){



    $('input[name="express"]').attr('disabled',true);

    $('input[name="express"]').parent().addClass('disable');

}

else{

    $('input[name="express"]').removeAttr('disabled');

    $('input[name="express"]').parent().removeClass('disable');

    }



if($('input[name="express"]').prop('checked')){

    $('input[name="js-frameworks"]').attr('disabled',true);

    $('input[name="js-frameworks"]').parent().addClass('disable');

   }

else{

    $('input[name="js-frameworks"]').removeAttr('disabled');

    $('input[name="js-frameworks"]').parent().removeClass('disable');

     }



if($('input[name="js-libs"]').prop('checked')){

    $('input[name="node"]').attr('disabled',true);

    $('input[name="node"]').parent().addClass('disable');

      }

else{

    $('input[name="node"]').removeAttr('disabled');

    $('input[name="node"]').parent().removeClass('disable');

        }



if($('input[name="node"]').prop('checked')){

    $('input[name="js-libs"]').attr('disabled',true);

    $('input[name="js-libs"]').parent().addClass('disable');

       }

 else{

    $('input[name="js-libs"]').removeAttr('disabled');

    $('input[name="js-libs"]').parent().removeClass('disable');

       }


 
    // the starting price is $0
    let price = 0;
    const running = document.createElement("span");
    $(".activities").append(running);
    // when an activity is checked, add or subtract price
    $(".activities").on("change", function (event) {
    // get the text content of the label which is the parent
    const checkbox = $(event.target).parent().text();
    // get the last 3 characters and make them an integer and save it as "cost"
    let cost = parseInt(checkbox.substring(checkbox.length - 3));
    // if the event target is checked now...
    if ($(event.target).is(':checked')) {
        // increase the price by the cost
        price += cost;
    } else {
        // if it's now unchecked decrease the price by the cost
        price -= cost;
    }

    running.innerHTML = "Total: $" + price;

});


//payment options
const $paymentMethod = $("#payment");

$($paymentMethod).on('change', function(){ 
    if ($paymentMethod.val() === "credit card") {
        $("#credit-card").show();
        // hide();
        // hide();
    } else if ($paymentMethod.val() === "paypal") {
        // show();
        // hide();
        // hide();
    } else if ($paymentMethod.val() === "bitcoin") {
        // show();
        // hide();
      // hide();
    }
});



})

const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");

/**
 * 
 * VALIDATORS
 *  
 */

// Can only contain letters a-z in lowercase
function isValidUsername(username) {
    return /^[-z]+$/.test(username);
}

// Must be a valid email address
function isValidEmail(email) {
    return /^[^@]+@[^@.]+\[a-z]+$/i.test(email);
}

/**
 * 
 * FORMATTING FUNCTIONS
 * 
 */


/**
 * 
 * SET UP EVENTS
 * 
 */

function showOrHideTip(show, element) {
  // show element when show is true, hide when false
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

usernameInput.addEventListener("input", createListener(isValidUsername));
emailInput.addEventListener("input", createListener(isValidEmail));


