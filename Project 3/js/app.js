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
document.querySelector(".activities").addEventListener("change", function(){
    var main = document.getElementById("all");
    var framework = document.getElementById("framework");
    var libs = document.getElementById("libs");
    var express = document.getElementById("express");
    var node = document.getElementById("node");
    var build = document.getElementById("build");
    var npm = document.getElementById("npm");

    var frameworkLbl = document.getElementById("frameworkLabel");
    var libsLbl = document.getElementById("libsLabel");
    var expressLbl = document.getElementById("expressLabel");
    var nodeLbl = document.getElementById("nodeLabel");


  
    if(framework.checked == true) {
        express.disabled = true;
        expressLbl.style.color = "grey";
    }
    if(express.checked == true) {
        framework.disabled=  true;
        frameworkLbl.style.color = "grey";
    }
    if(libs.checked == true) {
        node.disabled = true;
        nodeLbl.style.color = "grey";
    }
    if(node.checked == true) {
        libs.disabled = true;
        libsLbl.style.color = "grey";
    } 

    
    if(framework.checked == false) {
        express.disabled = false;
        expressLbl.style.color = "black";
    }
    if(express.checked == false) {
        framework.disabled = false;
        frameworkLbl.style.color = "black";
    }
    if(libs.checked == false) {
        node.disabled = false;
        nodeLbl.style.color = "black";
    }
    if(node.checked == false) {
        libs.disabled = false;
        libsLbl.style.color = "black";
    }    



});

let price = 0;
$activities = $('.activities');
$($activities).on("change", function (event) {
    const checkbox = $(event.target).parent.text();
    console.log(checkbox);
    let cost = parseInt(checkbox.substring(checkbox.length - 3));
    let total = price += cost;
    console.log(total);
});


//payment options

const $paymentMethod = $("#payment");
const creditcard = document.getElementsById("credit card");
const paypal = document.getElementsById("paypal");
const bitcoin = document.getElementsById("bitcoin");

$($paymentMethod).change(function(){ 
    if ($paymentMethod.val() === "credit card") {
        // show();
        $("credit card").show();
        // hide();
        $("paypal").hide();
        // hide();
        $("bitcoin").hide();
    } else if ($paymentMethod.val() === "paypal") {
        // show();
        $("paypal").show();
        // hide();
        $("bitcoin").hide();
        // hide();
        $("credit card").hide();
    } else if ($paymentMethod.val() === "bitcoin") {
        // show();
        $("bitcoin").show();
        // hide();
        $("credit card").hide();
        // hide();
        $("paypal").hide();
    }
});