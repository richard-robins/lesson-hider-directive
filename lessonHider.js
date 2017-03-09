angular.module('directivePractice')
.directive('lessonHider', function(){
  return{

    templateUrl:'lessonHider.html',
    restrict: 'E',
    scope: {
        lesson: '=',
    },

    controller: function($scope, lessonService){

    },

    link: function( scope, element, attributes ){

    }
  }
});
