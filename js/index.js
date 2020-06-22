(function($) {

	"use strict";

	// Open modal
	// **********
	$('.button01').click(function(){
    $('#modal01')[0].style.display = "block"
	})

	$('.button02').click(function(){
		$('#modal02')[0].style.display = "block"
	})

	$('.button03').click(function(){
		$('#modal03')[0].style.display = "block"
	})

	$('.button04').click(function(){
    $('#modal04')[0].style.display = "block"
	})

	$('.button05').click(function(){
		$('#modal05')[0].style.display = "block"
	})

	$('.button06').click(function(){
		$('#modal06')[0].style.display = "block"
	})

	// Close modal
	// **********

	// On close button
	$('.close').each(function(index) {
		var current = $(".close")[index]

		current.onclick = function() {
			$(".modal").each(function(index) {
				$(".modal")[index].style.display = "none"
			})
		}

	})


	// If clicks anywhere outside
	window.onclick = function(event) {

		$(".modal").each(function(index) {
			var current = $(".modal")[index]

			if (event.target == current) {
		    current.style.display = "none"
		  }

		})

	}

})(jQuery)
