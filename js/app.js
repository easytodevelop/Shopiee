var eshopApp = angular.module('eshopApp', ['ngResource', 'ngRoute','ui.bootstrap'])
.config(function($routeProvider){
	
	$routeProvider.when('/shopbag', 
	{
	templateUrl:'templates/shoppingbag.html',
	controller:'shopitems'
	});	
	
	 
	$routeProvider.otherwise({redirectTo:'/shopbag'});

});

