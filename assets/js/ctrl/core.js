App.controller('CtrlCore', ['$scope', function( $scope ){
	$scope.title = "XP Tracker";
}]);

App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
	// $scope.Students = [{force:"Static"}] // Needed for first entry in the DB when set to Implict Syncing
	$scope.studentName = $routeParams.name;

	//3 way data binding that syncs to Firebase as soon as we modify the objec locally
	var url = 'https://xp-tracker.firebaseio.com/students';
	var sync = $firebase(new Firebase(url)).$bind($scope, 'Students');

	$scope.addStudent = function () {
		// Add a Student
		$scope.Students.$add({
			name 	: $scope.StudentName,
			id 		: $scope.StudentID,
			xp 		: []
		});

		// Clear Name and ID
		$scope.StudentName = $scope.StudentID = "";
		
	}
	
	$scope.calculateStudentXP = function (args) {
		
		// target Student
		var student 	= args.student;
		
		// counter for XP
		var totalXP = 0;

		// Loop all XP entries for this student
		for(var i = 0; i < student.xp.length; i++){
			totalXP += student.xp[i].amount;
		}
		
		// Apply the total to the student which will Sync with Firebase
		student.totalXP = totalXP;
	}

	$scope.addXPToStudent = function (args) {

		// Target Student
		var student 	= args.student;

		// Static Data structure of an XP Addition
		var dataToSave 	= {
				amount 		: 10,
				comments 	: "Completely owned that AngularJS Assignment!"
		}

		// Check if xp is defined, if not, do that and place the XP data strucutre in.
		if(student.xp == undefined){
			student.xp = [dataToSave]
		} else {
			student.xp.push(dataToSave);
		}
		
		// After adding to the pile of XP, calculate the student's XP, pin it to the main student obj
		$scope.calculateStudentXP({student : student});
	}

}]);