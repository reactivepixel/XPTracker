App.controller('CtrlCore', ['$scope', function( $scope ){
	$scope.title = "XP Tracker";
}]);

App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
	$scope.studentName = $routeParams.name;

	//3 way data binding that syncs to Firebase as soon as we modify the objec locally
	var url = 'https://xp-tracker.firebaseio.com/students';
	var sync = $firebase(new Firebase(url)).$bind($scope, 'Students');

	$scope.addStudent = function () {
		$scope.Students.$add({
			name 	: $scope.StudentName,
			id 		: $scope.StudentID
		});
		$scope.StudentName = "";
	}
	
	$scope.addNoteToStudent = function (args) {
		
		args.student.note = "You pinned a note to me!";
	}

}]);