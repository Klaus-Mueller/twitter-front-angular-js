(function() {
    'use strict';

    angular
        .module('twitterApp')
        .config(config);

    config.$inject = ['$routeProvider', '$mdThemingProvider'];

    function config($routeProvider, $mdThemingProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
            })
            .when('/home', {
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });

        // Configure Angular Material theme
        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('pink');
    }
})();
