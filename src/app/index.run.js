(function() {
  'use strict';

  angular
    .module('bestbuy')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
