import angular from 'angular';
import template from '../template/begin-section.html';

function myBegin() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.myBegin', [])
    .directive('myBegin', myBegin)
    .name;