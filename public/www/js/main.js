
requirejs.config({
    baseUrl: '../www',
    paths: {
        app: 'js/app',
        controllers: 'js/controllers',
        jquery: 'lib/jquery/dist/jquery',
        angular: 'lib/angular/angular',
        angularAnimate: 'lib/angular-animate/angular-animate',
        angularUiRouter: 'lib/angular-ui-router/release/angular-ui-router',
        angularStrap: 'lib/angular-strap/dist/angular-strap',
        angularStrapTpl: 'lib/angular-strap/dist/angular-strap.tpl'
    },
    shim: {
        //angular: {
        //    deps: ['jquery']
        //},
        angularAnimate: {
            deps: ['angular']
        },
        angularUiRouter: {
            deps: ['angular']
        },
        angularStrap: {
            deps: ['angular']
        },
        angularStrapTpl: {
            deps: ['angular', 'angularStrap']
        }
    }
});

// Start the main app logic.
requirejs(['app'], function () {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['routeApp']);
    });
});