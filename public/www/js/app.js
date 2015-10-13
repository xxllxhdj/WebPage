
define(['angular', 'angularAnimate', 'angularUiRouter', 'angularStrap', 'angularStrapTpl', 'js/controllers'], function () {
    angular.module('routeApp', ['ngAnimate', 'ui.router', 'mgcrea.ngStrap', 'useManagerCtrls'])

        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/index');

            $stateProvider
                .state('index', {
                    url: '/index',
                    views: {
                        '': {
                            templateUrl: 'tpls/index.html'
                        },
                        'navBar@index': {
                            templateUrl: 'tpls/navbar.html',
                            controller: 'NavBarCtrl'
                        },
                        'mainView@index': {
                            templateUrl: 'tpls/main.html'
                        }
                    }
                })
                .state('index.usemanager', {
                    url: '/usemanager',
                    views: {
                        'mainView@index': {
                            templateUrl: 'tpls/usemanager.html',
                            controller: 'useManager'
                        }
                    }
                })
                .state('index.usemanager.superuser', {
                    url: '/superuser',
                    templateUrl: 'tpls/superuser.html'
                })
                .state('index.usemanager.miduser', {
                    url: '/miduser',
                    templateUrl: 'tpls/miduser.html'
                })
                .state('index.usemanager.lowuser', {
                    url: '/lowuser',
                    templateUrl: 'tpls/lowuser.html'
                })
                .state('index.usemanager.blackuser', {
                    url: '/blackuser',
                    templateUrl: 'tpls/blackuser.html'
                })
                .state('index.usemanager.addusertype', {
                    url: '/addusertype',
                    templateUrl: 'tpls/addusertype.html'
                });
        });
});