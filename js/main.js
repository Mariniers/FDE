var heightImage;
$(function() {
	init();
});

function init(){
	heightImage = $("#images .wrapper").height()/$("#images .wrapper>img").length;
	$("#descriptions .wrapper .current").show();


	$("#controlleur li").click(function(){
		if(!$(this).hasClass("current")){
			diaporama($(this));
		}else{
			return false;
		}
	});


}

function diaporama($this){
	$("#controlleur li").removeClass("current");
	$this.addClass("current");

	var data = $this.data("multiple");
	var nbScreen = $this.data("screen");
	

	$("#images .wrapper").css({
		'top' : -data*heightImage+"px"
	});

	$("#descriptions .wrapper .description.current").fadeOut('slow',function(){
		$("#descriptions .wrapper .description:nth-child("+(nbScreen)+")").delay(100).fadeIn(1000);
	});
			
	$("#descriptions .wrapper .description").removeClass("current");
	$("#descriptions .wrapper .description:nth-child("+nbScreen+")").addClass("current");

	
	console.log(nbScreen);
}