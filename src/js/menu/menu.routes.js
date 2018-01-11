routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('menu', {
            url: '/',
            template: require('./controller/template/menu.html'),
            controller: 'MenuController',
            controllerAs: 'menu'
        });
}