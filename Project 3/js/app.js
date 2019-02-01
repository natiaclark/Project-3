//setting focus on first field of text
$(document).ready(function(){
    $("#name").focus();
    $('#other-title').hide();
    $("#credit-card").show();
    $("p").first().hide();
    $("p").last().hide();
// default for the credit card. credit card is the payment methodshows when page first loads
    $("#payment option[value='credit card']").attr("selected", true);
// disables the select method in the drop menu of payment selection
    $("#payment option[value='select_method']").attr("disabled", true);

    
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
 

//calculates which color will be shown or not shown. which depends on what theme selected.
// eventlistener get value of theme clicked on but customer also calls the colorshown function
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
	if(teeSelection === "heart js") {

		colorSelector.innerHTML = '<label for="color">Color:</label><select id="color"><option value="tomato">Tomato</option><option value="steelblue">Steel Blue</option><option value="dimgrey">Dim Grey</option></select>';
		
	}
});
	



// Register for Activities section of the form.
//function to disable proper activities depending on what has already be checked
//function to reset checkboxes by re enabling them all
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
    });
    
    // Indasia and I worked together
    
    // the starting price is $0
    let price = 0;
    // create a span to hold the total, and append it to the activities section
 
    const runningTotal = document.createElement("span");
    $(".activities").append(runningTotal);
    // when an activity is checked, add or subtract price
    $(".activities").on("change", function (event) {
    // $("runningTotal").text() = $(price); 
    // get the text content of the label which is the parent
    const checkbox = $(event.target).parent().text();
    // get the last 3 characters and make them an integer and save it as "cost"
    let cost = parseInt(checkbox.substring(checkbox.length - 3));
    // if the event target is checked...
    if ($(event.target).is(':checked')) {
        // increase the price by the cost
        price += cost;
    } else {
        // if it's unchecked decrease the price by the cost
        price -= cost;
    }
    // update it on the page
    $(".activities span").text("Total: $" + price);

});

//payment options
const $paymentMethod = $("#payment");

$($paymentMethod).on('change', function(){ 
    if ($paymentMethod.val() === "credit card") {
        $("#credit-card").show();
        $("p").first().hide();
        $("p").last().hide();
    } else if ($paymentMethod.val() === "paypal") {
        $("p").first().show();
        $("p").last().hide();
        $("#credit-card").hide();
        
    } else if ($paymentMethod.val() === "bitcoin") {
        $("p").last().show();
        $("p").first().hide();
        $("#credit-card").hide();
    }
});

//FUNCTION VALIDATION
// me, indasia, and lisa work together

function validateForm() { //function to make sure inputs are valid before submit can be executed

    let nameValue = $('#name').val();

    if (isValidName(nameValue)== false){
	
        $('#name').css('border-color', 'red');
	// sets a time for the alert to pop in.
        setTimeout(function(){alert('Error! Please enter your name.');}, 3000);//name input. give error message an disable submit button');

    } 



    let emailValue = $('#mail').val();

    if (isValidEmail(emailValue)== false){

        $('#mail').css('border-color', 'red');

        setTimeout(function(){alert('Error! Please enter valid email.');}, 1500);

    } 



    if (price === 0) { 

        alert('Error! You must select at least 1 activity. Please make your selection.');

    }



    let cardNumber = $('#cc-num').val();

    let zip = $('#zip').val();

    let cvv = $('#cvv').val();



    if ($paymentMethod.val() === 'credit card') {



        if (isValidCardNumber(cardNumber)== false){

            $('#cc-num').css('border-color', 'red');

            setTimeout(function(){alert('Error! CC# is invalid. Must be 13-16 digits long.');}, 1500);

            }  



        else if (isValidZip(zip)== false){

            $('#zip').css('border-color', 'red');

            setTimeout(function(){alert('Error! Your zip code is invalid. Must be 5 digits long.');}, 1500);

            } 

            

        else if (isValidCvv(cvv)== false) {

            $('#cvv').css('border-color', 'red');

            setTimeout(function(){alert('Error! Your cvv is invalid. Must be 3 digits long.');}, 1500);

            }

    };

 

};



function isValidName(nameValue) { //test to see the 'Name' input is letters only

    return /^[a-zA-Z][a-zA-Z\s]+$/i.test(nameValue); 

};





function isValidEmail(emailValue) {	//test to see email is valid. This regex taken from https://emailregex.com/

    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailValue);

};



function isValidCardNumber(cardNumber) { //test to see the credit card number provided is 13-16 digits long

    return /^\d{13,16}D*$/.test(cardNumber);

}



function isValidZip(zip) { //test to see the zip code provided is 5 digits long

    return /^\d{5}$/.test(zip);

    console.log(zip);

}



function isValidCvv(cvv) { //test to see the cvv number provided is 3 digits long

    return /^\d{3}$/.test(cvv);

}


//
$('button').on('click', function(e) { //when "Submit" button is pushed validate form first

    e.preventDefault();

    

    validateForm();

  });



  
