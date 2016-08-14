var eshopApp = angular.module('eshopApp', ['ngResource', 'ngRoute','ui.bootstrap'])
.config(function($routeProvider){
	
	$routeProvider.when('/shopbag', 
	{
	templateUrl:'templates/shoppingbag.html',
	controller:'shopitems'
	});	
	
	$routeProvider.when('/overlay', 
	{
	templateUrl:'templates/overlay.html',
	controller:'editoverlay'
	});	
	$routeProvider.otherwise({redirectTo:'/shopbag'});

});

