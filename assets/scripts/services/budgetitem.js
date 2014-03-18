'use strict';

angular.module('angularfullstackApp')
  .service('BudgetItemService', function Budgetitem($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    function service(){
      var obj = {};
      obj.getAll = function(){

        return $http.get('/api/budgetItems').
                success(function(items){
                  obj.items = items;
                  return items;
                });
      };

      obj.add = function (newItem){

        return $http.post('/api/budgetItems', _(newItem).clone()).
        success(function(item){
          newItem.description  = '';
          newItem.amount = '';

          return item;
        });

      };

      return obj;
    }

    return service();

  });
