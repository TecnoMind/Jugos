routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: require('./controller/template/home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}   