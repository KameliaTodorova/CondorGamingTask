// JavaScript Document
var messageArray = ["iGaming industry"];
var textPosition = 0;
var speed = 150;

typewriter = () => {
	document.querySelector("#message").
	innerHTML = messageArray[0].substring(0,
	textPosition);
	
	if(textPosition++ != messageArray[0].lenght)
		setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);


$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
   		rtl:true,
    	loop:true,
    	margin:10,
    	nav:true,
    	responsive:{
        	0:{
				items:1
        	},
			600:{
            	items:3
        	},
        	1000:{
            	items:5
        	}
    	}
	})
});


function sendEmail(){
	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "username",
		Password : "password",
		To : 'them@website.com',
		From : document.getElementById("email").value,
		Subject : "New Contact Form Enquiry",
		Body : "Name: " + document.getElementById("name").value
			//+ "<br> Email: " + document.getElementById("email").value
			//+ "<br> Phone no: " + document.getElementById("phone").value
			//+ "<br> Message: " + document.getElementById("newmessage").value
	}).then(
  	message => alert("Message Sent Successfully! Thank you!")
	);
}

function myFunction() {
  var x = document.getElementById("main-menu");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

