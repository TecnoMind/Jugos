import angular from 'angular';
import template from '../template/menu-section.html';

function menu() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.menu', [])
    .directive('menu', menu)
    .name;