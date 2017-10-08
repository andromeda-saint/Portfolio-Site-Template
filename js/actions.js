$(document).ready(function(){
	//Timeline Modal
	$("#coursework").click(function(){
		$('.ui.timeline.modal')
		.modal('show');
	});
	// Project 1 Modal
	$(".ui.project1.button").click(function(){
		$('.ui.project1.modal')
		.modal('show');
	});

	// Project 2 Modal
	$(".ui.project2.button").click(function(){
		$('.ui.project2.modal')
		.modal('show');
	});

	// Project 3 Modal
	$(".ui.project3.button").click(function(){
		$('.ui.project3.modal')
		.modal('show');
	});

	// Project 4 Modal
	$(".ui.project4.button").click(function(){
		$('.ui.project4.modal')
		.modal('show');
	});

	// Project 5 Modal
	$(".ui.project5.button").click(function(){
		$('.ui.project5.modal')
		.modal('show');
	});

	// Project 6 Modal
	$(".ui.project6.button").click(function(){
		$('.ui.project6.modal')
		.modal('show');
	});

	// Project 7 Modal
	$(".ui.project7.button").click(function(){
		$('.ui.project7.modal')
		.modal('show');
	});

	//Hides navbar when landing segment is visible -- Shows navbar when scroll past landing segment
	$('.ui.inverted.masthead.segment')
	.visibility({
		once: false,
		onBottomPassed: function() {
			$('.fixed.menu').transition('slide down');
		},
		onBottomPassedReverse: function() {
			$('.fixed.menu').transition('fade out');
		}

	});

	$('.tabular.menu .item').tab();
	
	$('.ui.javascrpt.card')
	.visibility({
		once: false,
		onBottomVisible: function() {
			$('.ui.javascrpt.card')
			.popup({
				popup : '.icons_popup',
				position : 'right center'
			})
			.popup('show');
			setTimeout(function(){ $('.icons_popup').transition('fade out'); }, 3000);
		}
	});
	
	$("div.extra a div.music_1.ui.label").click(function(){
		if($(".music_1a.item").attr("id") != "hide"){
			$(".music_1a.item").attr("id", "hide");
    		$(".music_1b.item").removeAttr("id").transition('pulse');
		} else{
			$(".music_1b.item").attr("id", "hide");
    		$(".music_1a.item").removeAttr("id").transition('pulse');
		}
	});
	$("div.extra a div.music_2.ui.label").click(function(){
		if($(".music_2a.item").attr("id") != "hide"){
			$(".music_2a.item").attr("id", "hide");
    		$(".music_2b.item").removeAttr("id").transition('pulse');
		} else{
			$(".music_2b.item").attr("id", "hide");
    		$(".music_2a.item").removeAttr("id").transition('pulse');
		}
	});
	$("div.extra a div.music_3.ui.label").click(function(){
		if($(".music_3a.item").attr("id") != "hide"){
			$(".music_3a.item").attr("id", "hide");
    		$(".music_3b.item").removeAttr("id").transition('pulse');
		} else{
			$(".music_3b.item").attr("id", "hide");
    		$(".music_3a.item").removeAttr("id").transition('pulse');
		}
	});

	$("div.extra a div.tele_1.ui.label").click(function(){
		if($(".tele_1a.image").attr("id") != "hide"){
			$(".tele_1a.image").attr("id", "hide");
    		$(".tele_1b.image").removeAttr("id").transition('jiggle');
		} else{
			$(".tele_1b.image").attr("id", "hide");
    		$(".tele_1a.image").removeAttr("id").transition('jiggle');
		}
	});
	$("div.extra a div.tele_2.ui.label").click(function(){
		if($(".tele_2a.image").attr("id") != "hide"){
			$(".tele_2a.image").attr("id", "hide");
    		$(".tele_2b.image").removeAttr("id").transition('jiggle');
		} else{
			$(".tele_2b.image").attr("id", "hide");
    		$(".tele_2a.image").removeAttr("id").transition('jiggle');
		}
	});
	$("div.extra a div.tele_3.ui.label").click(function(){
		if($(".tele_3a.image").attr("id") != "hide"){
			$(".tele_3a.image").attr("id", "hide");
    		$(".tele_3b.image").removeAttr("id").transition('jiggle');
		} else{
			$(".tele_3b.image").attr("id", "hide");
    		$(".tele_3a.image").removeAttr("id").transition('jiggle');
		}
	});
	$("div.extra a div.tele_4.ui.label").click(function(){
		if($(".tele_4a.image").attr("id") != "hide"){
			$(".tele_4a.image").attr("id", "hide");
    		$(".tele_4b.image").removeAttr("id").transition('jiggle');
		} else{
			$(".tele_4b.image").attr("id", "hide");
    		$(".tele_4a.image").removeAttr("id").transition('jiggle');
		}
	});
	
	// contact modal logic
	$('.contact.button').click(function(){
		$('form').form('clear');
		$('.contact.modal')
		.modal('show');
	});

	$('.ui.form')
	.form({
		fields: {
			email: {
				identifier: 'email',
				rules: [
				{
					type   : 'email',
					prompt : 'Please enter a valid email address'
				}
				]
			},
			subject: {
				identifier: 'subject',
				rules: [
				{
					type   : 'empty',
					prompt : 'Please enter a subject'
				}
				]
			},
			contents: {
				identifier: 'contents',
				rules: [
				{
					type   : 'empty',
					prompt : 'Please enter a message'
				}
				]
			}
		}});
	
	$('.submit.button').click(function(){
		if( $('.ui.form').form('is valid')) {
			$('.contact.modal').transition('bounce');
			$('.success.message').html("Successfully Sent. I will contact you as soon as possible.");
			setTimeout(function(){ 
				$('.contact.modal')
				.modal('hide');
				window.stop();
				$('.success.message').html("")}, 2500);
		}
	});
		

	$('.ui.blurring.dimmable.image').dimmer({
	  on: 'hover'
	});

	// Smooth Scroll Logic
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	    	location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	    	&& 
	    	location.hostname == this.hostname
	    	) {
	      // Figure out element to scroll to
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	        	scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	          	return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	        };
	    });
	    }
	}
	});

});
