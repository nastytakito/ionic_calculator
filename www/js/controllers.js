angular.module('app.controllers', [])

.controller('calculatorCtrl', ['$scope', '$stateParams','$ionicPopup',function ($scope, $stateParams, $ionicPopup) {
  $scope.showAlert = function() {
    var alertPopup = $ionicPopup.alert({
      title: 'Error on input',
      template: 'Correct the input and try again'
    });
  };
  $scope.result = ''; $scope.btnClicked = function(btn){
    if (btn == 'C'){
      $scope.result = '';
    } else if (btn == '='){
      if ($scope.result == '') {
        return;
      }
      try {
        $scope.result = eval($scope.result).toFixed(0);
      } catch (e) {
        $scope.showAlert();
        $scope.result = '';
      }
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
