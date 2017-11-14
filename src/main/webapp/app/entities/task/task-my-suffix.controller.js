(function() {
    'use strict';

    angular
        .module('demo2App')
        .controller('TaskMySuffixController', TaskMySuffixController);

    TaskMySuffixController.$inject = ['Task'];

    function TaskMySuffixController(Task) {

        var vm = this;

        vm.tasks = [];

        loadAll();

        function loadAll() {
            Task.query(function(result) {
                vm.tasks = result;
                vm.searchQuery = null;
            });
        }
    }
})();
