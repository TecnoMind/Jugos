import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';
import HomeController from './controller/src/home.controller';
import banner from './directive/src/banner-section';
import header from '../commons/directive/src/header';
import beginSection from './directive/src/begin-section';
import branchOffice from './directive/src/branch-office-section';
import contacts from './directive/src/contacts-section';
import footer from '../commons/directive/src/footer';
import own from './directive/src/own-section';

export default angular.module('app.home', [uirouter,banner, header,beginSection,branchOffice, contacts, footer, own])
    .config(routing)
    .controller('HomeController', HomeController)
    .name;