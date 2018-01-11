import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from '../menu/menu.routes';
import MenuController from './controller/src/menu.controller';
import header from '../commons/directive/src/header';
import footer from '../commons/directive/src/footer';
import menu from './directive/src/menu-section';

export default angular.module('app.menu', [uirouter, header, footer, menu])
    .config(routing)
    .controller('MenuController', MenuController)
    .name;