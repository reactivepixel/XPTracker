<h2>{{title}}</h2>

<input ng-model="StudentName" type="text" placeholder="Student Name" />
<button ng-click="addStudent()">Add</button>
<a ng-href="#/student/Gibson">Static Link</a>


<ul class="list-group">
  <li ng-repeat="student in fb" class="list-group-item">	{{student.name}}
  </li>
</ul>

