app.directive("myDirective", function() {
    return {
		restrict: 'E',
		details: {
          firstName: '='
        },
        template: '<h1>Made by a directive!</h1><h2>changed</h2><select><option>{{firstName}}<option></select>',
		link: function(scope, elem, attrs){
			//console.log('test', scope.firstName)
        }
    };
});