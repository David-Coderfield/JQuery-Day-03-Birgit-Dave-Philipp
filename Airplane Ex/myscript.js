// Start of JQuery Code

$("document").ready(function(){

	$("#moveme").on("mousemove", function(e){
		x = e.pageX;
		y = e.pageY;
		$("#moveme").css({
			"top": y-128,
			"left": x-128
		})
		$("#demo").text("x:" + x + "/y:" + y);
	});

	$("#moveme").click(function(){
		$(this).animate({
			top: windowHeight-256,
			opacity: 0
		},1000, crash).animate({
			// deg: 180,
			opacity: 1
		},1000);
	});

});
// End of JQuery Code

function crash(){
	document.getElementById('crash').play();
}

var windowHeight = window.innerHeight;