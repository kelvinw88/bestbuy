(function() {
  'use strict';

  angular
    .module('bestbuy')
    .directive('sidebar', sidebar);

  function sidebar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/sidebar/sidebar.html',
      scope: {},
      controller: SidebarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SidebarController($http) {
      var vm = this;

      vm.categories = [];

      // // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();

      function getCategories() {
        var api = 'http://www.bestbuy.ca/api/v2/json/category/Departments';
        return $http({
          method:'GET',
          url: api
        })

      }

      getCategories().then(function(data){
        console.log(data)
      }).catch(function(error){
        console.log(error)
      });


    }
  }

})();
