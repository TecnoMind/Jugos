import angular from 'angular';
import template from '../template/branch-office-section.html';

function branchOffice() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.branchOffice', [])
    .directive('branchOffice', branchOffice)
    .name;