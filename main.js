var app = angular.module('app',[]);
app.controller('appCtrl', ['$scope', function($scope){
    var vm = $scope.vm = {};
    vm.curLi = 1;

}])