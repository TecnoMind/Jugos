import angular from 'angular';
import template from '../template/header.html';

function myHeader() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.myHeader', [])
    .directive('myHeader', myHeader)
    .name;