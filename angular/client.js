let app1 = angular.module('navigation', ['ui.router']);

app1.config(function($stateProvider){
    let startState = {
        name: 'start',
        url: '/start',
        template: '<h1>Ein Bitcoin entspricht</h1>'
    }
    let detailsState = {
        name: 'details',
        url: '/details',
        template: '<h1>Details</h1>'
    }
    let rechnerState = {
        name: 'rechner',
        url: '/rechner',
        template: '<h1>Umrechner</h1>'
    }
    let diagrammState = {
        name: 'diagramm',
        url: '/diagramm',
        template: '<h1>Diagramm</h1>'
    }

    $stateProvider.state(startState);
    $stateProvider.state(detailstState);
    $stateProvider.state(rechnerState);
    $stateProvider.state(diagrammState);
});

