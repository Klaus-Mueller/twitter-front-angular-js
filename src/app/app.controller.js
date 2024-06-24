(function() {
    'use strict';

    angular
        .module('twitterApp')
        .controller('MainController', MainController);

    MainController.$inject = ['$http'];

    function MainController($http) {
        var vm = this;
        vm.username = '';
        vm.user = {};

        vm.getUser = function() {
            $http.get('http://localhost:4567/user/' + vm.username)
                .then(function(response) {
                    vm.user = response.data;
                })
                .catch(function(error) {
                    console.error('Error occurred:', error);
                });
        };
    }
})();
