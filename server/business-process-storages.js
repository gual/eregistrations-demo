'use strict';

var driver = require('mano').dbDriver;

exports.demo = driver.getStorage('businessProcessDemo');
exports.otherOne = driver.getStorage('businessProcessOtherOne');
