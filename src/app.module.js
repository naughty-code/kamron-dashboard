angular.module('app',  [
	'ngMaterial', 
	'ngMessages',
	'ngRoute',
	'single-table'
]).run(function($log){
	$log.debug("starterApp + ngMaterial running...");
  });