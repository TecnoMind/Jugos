import angular from 'angular';
import template from '../template/banner-section.html';

function banner() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.banner', [])
    .directive('banner', banner)
    .name;