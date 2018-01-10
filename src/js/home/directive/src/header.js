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

/* Inicializamos */
$(document).ready(function () {

    /* Funcion que detecta cuando el scroll baja 100px y le aplica un efecto al navbar */
    $(window).scroll(function () {

        if ($(window).scrollTop() <= 100) {

            $(".navbar").removeClass("dark");
        } else {

            $(".navbar").addClass("dark");
        }
    });

    /* Funcion que detecta cuando cambiamos entre secciones del sitio */
    $("body").scrollspy({target: ".navbar", offset: 50});

    /* Funcion que aplica un efecto a los links del navbar dependiendo la sección */
    $(".navbar a").click(function(){
    
        $(".navbar").find(".active").addClass("active");
    
        $(this).parent().removeClass("active");
    });
    
});