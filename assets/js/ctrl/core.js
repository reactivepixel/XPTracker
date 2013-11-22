App.controller('CtrlCore', ['$scope', function( $scope ){
	$scope.title = "XP Tracker";
}]);

App.controller('CtrlStudent', ['$scope', '$routeParams', function( $scope, $routeParams ){
	$scope.studentName = $routeParams.name;
}]);
