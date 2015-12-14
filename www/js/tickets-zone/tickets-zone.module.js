(function() {
    'use strict';
    angular.module("tickets-zone",[])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider
          .state(
            'tab.my-tickets' , {
                url: '/my-tickets',
                templateUrl: 'js/tickets-zone/my-tickets.html',
                controller: 'MyTicketsController',
                controllerAs: 'vm',
                params: {
                    view: 'my'
                }
        })
          .state(
            'tab.evaluate' , {
                url: '/my-tickets/eval/:id',
                templateUrl: 'js/tickets-zone/evaluate.html',
                controller: 'EvaluateController',
                controllerAs: 'vm'
        });
    });

})();