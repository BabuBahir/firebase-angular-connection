var app = angular.module("test",["firebase"]);

app.controller("testCtrl",function($scope,$firebaseObject){
	
	var ref = firebase.database().ref();
	$scope.name= $firebaseObject(ref);
})