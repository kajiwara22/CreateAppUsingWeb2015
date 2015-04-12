(function(){
    'use strict';
    angular.module('ans').controller('questionController',function($scope,$http,$q){

        $scope.ListGet = {
            configureItemScope : function(index, itemScope) {
                if(!itemScope.answer){
                    console.log("Created item #" + index);
                    itemScope.canceler = $q.defer();
                    $http.get('/api/answer/' + index , {timeout: itemScope.canceler.promise})
                        .success(function(answer) {
                            itemScope.answer = answer;
                        })
                        .error(function() {
                            itemScope.answer = {
                                'Question':'noQuestion'
                            };
                        });
                }
            },
            calculateItemHeight : function() {
                return 45;
            },
            countItems : function() {
                return 4;
            },
            destroyItemScope: function(index, scope) {
                console.log("Destroyed item #" + index);
            }
        };

        $scope.showAnswer = function(answer){
            var options = {
                animation: 'slide', // アニメーションの種類
                onTransitionEnd: function() {} // アニメーションが完了した際によばれるコールバック
            };
            $scope.myNavigator.pushPage('/answer/?id=' + answer.index,options);
            $scope.answer = answer;

        }
    });
}());