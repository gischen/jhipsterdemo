(function() {
    'use strict';

    angular
        .module('demo2App')
        .controller('CountryMySuffixDetailController', CountryMySuffixDetailController);

    CountryMySuffixDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Country', 'Region'];

    function CountryMySuffixDetailController($scope, $rootScope, $stateParams, previousState, entity, Country, Region) {
        var vm = this;

        vm.country = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('demo2App:countryUpdate', function(event, result) {
            vm.country = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
