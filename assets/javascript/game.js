
var randomResult; 
var lost;
var win; 

firstnumber =Math.floor(Math.random() * 69) + 30;
$("#result").html("Random Result: " + firstnumber);

console.log(firstnumber);

for (var i = 0; i < 4; i++) {
	
	var random = Math.floor(Math.random() * 20) + 1;
	console.log(random);

	var butts = $("<div>");
	butts.attr({
		"data-random": random
	});

	$(".button").append(butts);
	
}


// Game with 4 crystals  and random result 

// Every crystal needs a random result 1 - 20 

//  a new random number should generate every time we win or lose 

// to those 4 cryastals 

// when clicking any crystal, it should add with the previous 

// until it equals the total score 

// if it is not equal to ranom number we restart

// if it is equal we increment a win 