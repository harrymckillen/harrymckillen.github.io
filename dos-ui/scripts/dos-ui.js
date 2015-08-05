'use strict';
/* DOS-UI: Angular Module */
/*
  @about: loads all child dependencies, all you need to do is load 'dos-ui' 
  as a dependency in your application, and include the relevant javascript files. 
*/
angular.module('dos-ui', [
  'dos-ui.filters',
  'dos-ui.services',
  'dos-ui.directives',
  'dos-ui.controllers'
]);