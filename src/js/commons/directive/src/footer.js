import angular from 'angular';
import template from '../template/footer.html';

function myFooter() {
    return {
        restrict: 'E',
        template: template
    }
}

export default angular.module('directives.myFooter', [])
    .directive('myFooter', myFooter)
    .name;