App.controller('CtrlCore', ['$scope', function( $scope ){
	$scope.title = "XP Tracker";
}]);

App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
	$scope.studentName = $routeParams.name;

	//Firebase Connection
	var url = 'https://xp-tracker.firebaseio.com/students';
	$scope.fb = $firebase(new Firebase(url));

	$scope.addStudent = function () {
		$scope.fb.$add({name: $scope.StudentName});
		$scope.StudentName = "";
	}
}]);