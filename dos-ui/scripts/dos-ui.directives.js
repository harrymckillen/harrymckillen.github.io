'use strict';

/* Directives */

angular.module('dos-ui.directives', [])
  .directive('spinner', function ($timeout) {
    return {
      restrict: 'A',
      scope: true,
      template:
        '<div ng-show="showSpinner" class="spinner float-left position-relative clear">\
          <span class="{{ symbol }}"></span>\
        </div>',
      link: function (scope) {
        var item = 0, spinner = ['spinner-1', 'spinner-2', 'spinner-3', 'spinner-4'];
        var spin = function () {
            scope.symbol = spinner[item];
            item++;
            if (item >= spinner.length) { item = 0; }
            $timeout(spin, 100);
          };
        spin();
      }
    };
  })
  .directive('dialog', function () {
    return {
      restrict: 'A',
      replace: true,
      transclude: true,
      scope: {
        backgroundcolour: '@',
        fontcolour: '@',
        bordercolour: '@'
      },
      template:
        '<div class="dialog padding-3px centered drop-shadow-16px margin-bottom-large {{backgroundcolour}}-background {{fontcolour}}-text">\
            <div class="content {{bordercolour}}-border-2px padding-med">\
              <div ng-transclude></div>\
            </div>\
        </div>'
    };
  });