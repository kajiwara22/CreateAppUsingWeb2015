(function(){
    'use strict';
    angular.module('ans',['onsen','ngResource']).config(function($locationProvider){
        $locationProvider.html5Mode(true);
    });
}());
