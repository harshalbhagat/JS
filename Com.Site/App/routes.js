/// <reference path="angular.min.js" />
angular.module('app.route', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "App/components/home/home.html"
    })
    .when("/red", {
        templateUrl: "red.htm"
    })
    .when("/green", {
        templateUrl: "green.htm"
    })
    .when("/blue", {
        templateUrl: "blue.htm"
    });
});