'use strict';
//require('angular');

var app = angular.module('autocounts-app', [
    /*
    'ngCookies',
    'ngAnimate',
    'ngSanitize',
    */

    'ui.router',
    //'ui.bootstrap', //replaced in favor of angularstrap

    //Loopback Angular SDK
    'lbServices',

    //Angularstrap
    /*
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.popover',
    'mgcrea.ngStrap.select',
    'mgcrea.ngStrap.tooltip',
    'mgcrea.ngStrap.helpers.dimensions',
    'mgcrea.ngStrap.helpers.parseOptions',
    */

    /*
    'ngTouch',
    'angular-gestures',
    */

    //Features
    require('./main/index').name,
    require('./footer/index').name,
    require('./header/index').name,
    require('./login/index').name,
    require('./livefeed/index').name,
    require('./profile/index').name,
    require('./tour/index').name,
    require('./tours/index').name,

    require('./filters/index').name,

    //Templates
    'markup',

]);

app.run(['$rootScope','$state','$location',function($rootScope,$state,$location) {
}]);

app.config(['$stateProvider', '$urlRouterProvider','$httpProvider', function($stateProvider, $urlRouterProvider,$httpProvider){

    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('main', {
        abstract: true,
        url: '/main',
        templateUrl: '/main/main.html',
    })
    .state('login', {
        url: '/login',
        templateUrl: '/login/login.html',
    })
    .state('main.livefeed', {
        url: '/livefeed',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/livefeed/livefeed.html',
            },
            'header@main': {
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })
    .state('main.tours', {
        url: '/tours',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/tours/tours.html',
            },
            'header@main': {
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })
    .state('main.tours.tour', {
        url: '/tour',
        params: {
            tour: null,
        },
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/tour/tour.html',
            },
            'header@main': {
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })

    .state('main.profile', {
        url: '/profile',
        views: {
            'content@main': { // targeting <div ui-view="content"/> in /main/main.html
                templateUrl: '/profile/profile.html',
            },
            'header@main': {
                templateUrl: '/header/header.html'
            },
            'footer@main': {
                templateUrl: '/footer/footer.html'
            },
        }
    })


    ;


}]);


