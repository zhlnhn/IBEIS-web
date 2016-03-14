angular.module('ibeis.routes', ['ngRoute'])
    .config(function($routeProvider) {
        // $urlRouterProvider
        //     .otherwise('');

        // $stateProvider
        //     .state('home', {
        //         url: '',
        //         templateUrl: 'app/views/pages/home.html'
        //     })
        //     .state('login', {
        //         url: '/login',
        //         templateUrl: 'app/views/pages/login.html'
        //     })
        //     .state('workspace', {
        //         url: '/workspace',
        //         templateUrl: 'app/views/pages/workspace.html',
        //         controller: 'workspace-controller'
        //     });

        $routeProvider.when('/', {
            templateUrl: 'app/views/pages/home.html'
        }).when('/login', {
            templateUrl: 'app/views/pages/login.html'
        }).when('/workspace', {
            templateUrl: 'app/views/pages/workspace.html',
            controller: 'workspace-controller'
        });
   });
