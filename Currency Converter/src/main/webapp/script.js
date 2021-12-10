$(document).ready(function(){
	
	$("#countryConversion").hide();
	$(".country").click(function(event){
		event.stopPropagation();
        event.stopImmediatePropagation();
        $('#currentCountry').hide();
        $('#countryConversion').show();
	});
});