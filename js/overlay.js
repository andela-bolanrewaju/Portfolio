$(document).ready(function(){
	$("#gallery li a").click(function(evt){
		evt.preventDefault();
		var imglink = $(this).attr("href");
		var url = $(this).children("img").attr("alt");
		$("#overlay").fadeIn();
		var content = '<img src="'+ imglink + '" alt="">';
			content += '<button type="button" formaction="http://andela-bolanrewaju.github.io/' + url + '" class="btn btn-default">View Site</button>';
		$("#overlay-img").html(content);
		$("#overlay-img").fadeIn();
	});

	$(document).on("click", "button", function(){
		var url = $(this).attr("formaction");
		window.open(url);
	});

	$("#overlay").not("button").click(function() {
		$("#overlay-img").fadeOut();
		$(this).fadeOut();
	})
});