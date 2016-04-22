(function(){
  'use strict';

  angular
  .module('mb.focus', [])
  .directive('focusOnShow', function($timeout) {
    return {
      restrict: 'A',
      link: function(scope, element, attr) {
      scope.$watch(attr.focusOnShow,
        function (newValue) {
          $timeout(function() {
            if (newValue) {
              element[0].focus();
            }
          });
        },true);
    }};
  })
  .directive('diva', function($timeout, $compile) {
    return {
      restrict: 'AC',
      scope: {
        diva: '=',
        dullTime:'<?',
        waitToFade:'<?'
      },
      link: function(scope, element, attrs) {
              var cancel = false;

              if(!scope.dullTime) {
                scope.dullTime = 2500;
              }

              if(!scope.waitToFade) {
                scope.waitToFade = 1000;
              }

              var divaPolice = function (newValue, oldValue) {
                if (newValue) {
                  $timeout(function() {
                  if (newValue && !cancel) {
                          scope.diva = false;
                          cancel = false;
                        }
                    }, scope.dullTime);
                } else {
                    cancel = false;
                }
              };

              var watcher = scope.$watch('diva',function(newValue, oldValue){divaPolice(newValue, oldValue);});

              element.on("mouseenter", function(){
                cancel = true;
              });

              element.on("mouseleave", function(){
                watcher();
                cancel = false;
                $timeout(function() {
                  if (!cancel){
                    scope.diva = false;
                    watcher = scope.$watch('diva',function(newValue, oldValue){divaPolice(newValue, oldValue);});
                    element.on("mouseenter", function(){
                      cancel = true;
                    });
                  }
                  }, scope.waitToFade);
              });
            }
          };
  })
  .directive('dispersed', function () {
      return {
          restrict: 'A',
          link: function (scope, element) {
              element.on('click', function () {
                  element[0].blur();
              });
          }
      };
  });
}());
