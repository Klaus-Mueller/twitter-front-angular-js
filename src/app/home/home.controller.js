(function() {
    'use strict';

    angular
        .module('twitterApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http'];

    function HomeController($http) {
        var vm = this;
        vm.tweets = [];

        vm.getTimeline = function() {
            $http.get('http://localhost:4567/timeline')
                .then(function(response) {
                    vm.tweets = response.data;
                })
                .catch(function(error) {
                    console.error('Error occurred:', error);
                });
        };

        // Fetch timeline on controller initialization
        vm.getTimeline();
    }
})();
