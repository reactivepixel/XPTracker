<h2>{{title}}</h2>


<input ng-model="StudentName" type="text" placeholder="Student Name" />
<input ng-model="StudentID" type="text" placeholder="Student ID" />
<button ng-click="addStudent()">Add</button>
<a ng-href="#/student/Gibson">Static Link</a>


<ul class="list-group">
  <li ng-repeat="student in Students" class="list-group-item">	{{student.name}}

		<button ng-click="addNoteToStudent({ student : student })">+ Note</button>
  </li>
</ul>

