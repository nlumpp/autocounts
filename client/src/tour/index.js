'use strict';

module.exports = (function() {

    var mod = angular.module('tour', [
        'markup',
    ]);

    mod.controller('TourCtrl', require('./tour-ctrl'));

    return mod;

})();
