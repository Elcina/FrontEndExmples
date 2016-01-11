
var app = angular.module('employeeApp', []);

app.controller('customersController', function($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) 
	{
		$scope.employees = response.employees;
	});
	
	$scope.index = -1;
	$scope.addUser = function()
	{
	  if($scope.index > -1)
	  {
		//alert("You should be editing existing value at:"+$scope.index);
		$scope.employees[$scope.index].name = $scope.newName;
	    $scope.employees[$scope.index].skill = $scope.newSkill;
	    $scope.employees[$scope.index].address = $scope.newAddress;
		$scope.index = -1;
	  }	
	  else
	  {
		var newEmp = {
	     "name": $scope.newName,
		 "skill": $scope.newSkill,
		 "address": $scope.newAddress
		};
		$scope.employees.push(newEmp);
	  }
	  $scope.newName = '';
	  $scope.newSkill = '';
	  $scope.newAddress = '';
	}
	
	$scope.editUser = function(name)
	{alert("name",name);
	  var table = document.getElementById("empTable");
	  var j = 0;
	  for (var i = 0, row; row = table.rows[i]; i++) {
		if(name.toUpperCase() == row.cells[0].innerHTML)
		{ break; }
		j++;
	  }
	  $scope.index = j-1;
	  $scope.newName = $scope.employees[j-1].name;
	  $scope.newSkill = $scope.employees[j-1].skill;
	  $scope.newAddress = $scope.employees[j-1].address;
	}
	
	
});




/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
