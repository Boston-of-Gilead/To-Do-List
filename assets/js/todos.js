window.setTimeout(function() {

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //checks for Enter
		var todoText = $(this).val();
		$(this).val(""); //clears input box
		$("ul").append("<li>" + "<span>" + "<i class='far fa-trash-alt'></i>" + "</span>" + " " + todoText + "</li>");
	}
});

$(".fa-eye-slash").click(function(){
	$("input[type='text']").fadeToggle();
});




















}, 500);