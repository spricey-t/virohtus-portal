

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

app.directive('virNav', [
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

		vm.selectedProject = {};
		vm.setSelectedProject = setSelectedProject;
		vm.isSelectedProject = isSelectedProject;
		vm.projects = [];
		vm.projects.push({
			route: 'home.project({projectId: "dht"})',
			title: 'Distributed Hash Table',
			imgSrc: 'img/dht.png'
		});
		vm.projects.push({
			route: 'home.project({projectId: "neuralnet"})',
			title: 'Neural Net',
			imgSrc: 'img/neuralnet.png'
		});
		vm.projects.push({
			route: 'home.project({projectId: "headphones"})',
			title: 'Headphones',
			imgSrc: 'img/headphones.png'
		});

		setSelectedProject(vm.projects[0]);

		function setSelectedProject(project) {
			vm.selectedProject = project;
		}

		function isSelectedProject(project) {
			return project.title === vm.selectedProject.title;
		}
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

app.controller('ProjectDetailCtrl', ['$stateParams',
	function($stateParams) {
		var vm = this;

		vm.projectId = $stateParams.projectId;
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
		})
		.state('home.project', {
			url: ':projectId',
			templateUrl: 'project-detail.html'
		});
	}
]);

angular.element(document).ready(function() {
	angular.bootstrap(document, [APP_NAME]);
});