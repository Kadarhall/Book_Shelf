'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/books', {
			controller: 'BookshelfController',
			templateUrl: 'views/bookshelf.html'
		})
  	.when('/books/:bookId', {
    	controller: 'BookController',
    	templateUrl: 'views/book.html'
  	})
  	.when('/books/:bookId/chapters/:chapterId', {
    	controller: 'ChapterController',
    	templateUrl: 'views/chapter.html'
  	})
		.otherwise({
			redirectTo: '/books'
		});
});
