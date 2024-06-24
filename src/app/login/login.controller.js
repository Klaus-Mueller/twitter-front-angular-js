(function() {
    'use strict';

    angular
        .module('twitterApp')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$location'];

    function LoginController($http, $location) {
        var vm = this;
        vm.username = '';
        vm.password = '';
        vm.error = '';

        vm.login = function() {
            $http.post('http://localhost:4567/login', {
                username: vm.username,
                password: vm.password
            }).then(function(response) {
                // Handle successful login
                $location.path('/home'); // Redirect to home or desired path
            }).catch(function(error) {
                // Handle login error
                vm.error = 'Invalid username or password';
            });
        };
    }
})();
