import './css/main.scss';
import './css/menu/main-menu.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import home from './js/home';
import menu from './js/menu';
import routing from './app.config';

angular.module('app', [uirouter,menu,home])
    .config(routing);