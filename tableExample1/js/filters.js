angular.module('tablefilters', []).filter('formatDollarChange', function() {
	return function(input) {		 
		if (input.charAt(0) == '+'){
		  input = '$' + input.substr(1);	  
		}else if (input.charAt(0) == '-'){
			input = '-$' + input.substr(1);
		}
	
	  return input;  
	};
});