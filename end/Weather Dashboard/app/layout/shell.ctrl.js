﻿(function () {
    angular.module("app.shell")
        .controller("Shell", function ($scope, weatherSvc) {
            $scope.getWeatherImgUrl = weatherSvc.getWeatherImgUrl;
        });
})();