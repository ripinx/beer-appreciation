﻿(function () {
    'use strict';

    var underscore = angular.module("underscore", []);
    underscore.factory("_", function () {
        return window._; // assumes underscore is already loaded
    });

})();