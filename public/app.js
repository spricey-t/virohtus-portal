

var APP_NAME = 'virohtus-portal';


var app = angular.module(APP_NAME, [
	'ui.router'
]);

app.controller('HomeCtrl', [
	function() {
		var vm = this;

		vm.msg = 'hello world!';
	}
]);

app.controller('NavCtrl', [
	function() {
		var vm = this;
	}
]);

app.directive('vNav', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'nav.html'
		};
	}
]);

/* Header */
app.controller('HeaderCtrl', [
	function() {
		var vm = this;

		vm.profilePicUrl = 'img/shen.jpg';
	}
]);
app.directive('virHeader', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'header.html'
		};
	}
]);


/* Showcase */
app.controller('ShowcaseCtrl', [
	function() {
		var vm = this;
	}
]);
app.directive('virShowcase', [
	function() {
		return {
			restrict: 'E',
			templateUrl: 'showcase.html'
		};
	}
]);


app.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html'
		})
		.state('projects', {
			url: '/projects'
		});
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [APP_NAME]);
});