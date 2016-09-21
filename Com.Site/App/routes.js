/// <reference path="angular.min.js" />
angular.module('app.route', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "App/components/home/home.html",
        controller: 'homeController'
    })
    .when("/contact", {
        templateUrl: "App/components/contact/contact.html",
        controller: 'contactController'
    })
    .when("/about", {
        templateUrl: "App/components/about/about.html",
        controller: 'aboutController'
    })
    .otherwise( {
        templateUrl: "/"
    });
});