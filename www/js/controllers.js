angular.module('app.controllers', [])

.controller('calculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  $scope.result = ''; $scope.btnClicked = function(btn){
    if (btn == 'C'){
      $scope.result = '';
    } else if (btn == '='){
      $scope.result = eval($scope.result);
    } else{
      $scope.result += btn;
    }
  };
}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
