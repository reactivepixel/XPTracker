<h2>{{title}}</h2>

<form ng-submit="addStudent()">
	<input ng-model="StudentName" type="text" placeholder="Student Name" />
	<input ng-model="StudentID" type="text" placeholder="Student ID" />
	<button type="submit" >Add</button>
	<a ng-href="#/student/Gibson">Static Link</a>
</form>

<ul class="list-group">
  <li ng-repeat="student in Students" class="list-group-item">	

    	<span class="badge">{{student.totalXP}}</span>
  		{{student.name}}

		<button ng-click="addXPToStudent({ student : student })">+ XP</button>
  </li>
</ul>

