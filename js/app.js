$(document).ready(function() {
	
	var isCool = false;

    $(".ryu-box")
   		.mouseenter(function() {
        	if (isCool){
        		return;
        	}
        	$(".standing").hide();
   			$(".ready").show();
    	})
    	.mouseleave(function() {
    		if (!isCool){
  				$(".standing").show();
   				$(".ready").hide();
   			}
    	})
    	.mousedown(function() {
    		if (!isCool){
    			$(".throwing").show();
    			$(".ready").hide();
    			$(".hadouken")
    				.finish()
    				.show()
    				.animate(
    					{ "left": "2000px" }, "slow", function() {
    						$(this).hide();
							$(this).css("left", "500px");
    				});
		  		$("#hadouken-sound").load().play();
		  	}
    	})
    	.mouseup(function() {
    		if (!isCool){
    			$(".throwing").hide();
    			$(".ready").show();
    		}
    	})    
    ;

	$(this)
		.keydown(function(e) {
    		if (e.which == 88) {
    			isCool = true;
    			$(".cool").show();
   				$(".standing").hide();
   				$(".throwing").hide();
    			$(".ready").hide();
    			$(".hadouken").hide();
			}
		})
		.keyup(function(e) {
    		if (e.which == 88) {
    			isCool = false;
    			$(".cool").hide();
   				$(".standing").show();
   				$(".throwing").hide();
    			$(".ready").hide();
    			$(".hadouken").hide();
			}
		})
	;

});

//function playHadouken() {
//	$("#hadouken-sound")[0].volume = 0.5;
//	$("#hadouken-sound")[0].load();
//	$("#hadouken-sound")[0].play();
//}


