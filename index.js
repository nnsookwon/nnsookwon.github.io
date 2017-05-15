/*
$(document).ready( function() {
    $('#home_content').load('/home_content.html');
    $('#projects_content').load('/projects_content.html');
    console.log("hello")
});
*/

$(document).ready(function() {
	$(".nav-link").on("click", function(){
	   $(".navbar").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	   //$("#page_header").text($(this).text());
	});
})
