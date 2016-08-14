eshopApp.filter('sVolunteer', function(){

	return function(svote){
		
		if(svote <= 5){
			return "Red Tag Volunteer";
		}else if(svote > 5 && svote<=15){
			return "Green Tag Volunteer";
		}
		
		
		
	}
});
