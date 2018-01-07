import angular from 'angular';
import template from '../template/contacts-section.html';

function contacts() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.contacts', [])
    .directive('contacts', contacts)
    .name;