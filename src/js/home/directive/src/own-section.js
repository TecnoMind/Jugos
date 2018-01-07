import angular from 'angular';
import template from '../template/own-section.html';

function own() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.own', [])
    .directive('own', own)
    .name;