<a ng-href="#/">Students</a>
<h1>{{Student.name}} <small>{{Student.id}} </small></h1>
<div ng-show="Student.totalXP">
	<h2>{{Student.totalXP}} XP</h2>

	<ul class="list-group">
	  <li ng-repeat="xpItem in Student.xp" class="list-group-item">
	  	<span class="badge">{{xpItem.amount}}</span>
	  	<p>{{xpItem.comments}}</p>
	  	</li>
	</ul>
</div>
<p ng-hide="Student.totalXP">No XP has been tracked for {{Student.name}}</p>
