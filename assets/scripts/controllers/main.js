'use strict';

angular.module('angularfullstackApp')
  .controller('MainCtrl', function ($scope) {


    $scope.items = ['sails','angualr','awsome'];



    // $http.get('/api/awesomeThings').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });
  });
