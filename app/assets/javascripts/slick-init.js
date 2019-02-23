$(document).ready(function(){
  	$('.partner').slick({
    	dots: true,
    	infinite: true,
    	slidesToShow: 5,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 3000,
	  	responsive: [
	  		{
	      		breakpoint: 768,
	      		settings: {
			    	autoplaySpeed: 2500,
		      	}
		    },
		    {
		      	breakpoint: 640,
	      		settings: {
			    	dots: false,
	      			slidesToShow: 4,
			    	autoplaySpeed: 2500,
	      		}
	      	},
	      	{
		      	breakpoint: 320,
	      		settings: {
			    	dots: false,
	      			slidesToShow: 3,
			    	autoplaySpeed: 2500,
	      		}
	      	}
	    ]

  	});
});

$(document).ready(function(){
  	$('.donation').slick({
    	dots: false,
    	infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 3000,
    	responsive: [
	  		{
	      		breakpoint: 768,
	      		settings: {
			    	autoplaySpeed: 2500,
			    	slidesToShow: 2,
		      	}
		    },
		    {
		      	breakpoint: 320,
	      		settings: {
	      			slidesToShow: 1,
	      		}
	      	}
	    ]
  	});
});


$(document).ready(function(){
  	$('.double').slick({
    	dots: true,
    	infinite: true,
    	slidesToShow: 5,
    	slidesToScroll: 1,
    	autoplay: true,
    	autoplaySpeed: 3000,
	  	responsive: [
	  		{
	      		breakpoint: 768,
	      		settings: {
			    	autoplaySpeed: 2500,
		      	}
		    },
		    {
		      	breakpoint: 640,
	      		settings: {
			    	dots: false,
	      			slidesToShow: 4,
			    	autoplaySpeed: 2500,
	      		}
	      	},
	      	{
		      	breakpoint: 320,
	      		settings: {
			    	dots: false,
	      			slidesToShow: 3,
			    	autoplaySpeed: 2500,
	      		}
	      	}
	    ]

  	});
});
