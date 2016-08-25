'use strict';

var driver = require('mano').dbDriver;

exports.demo      = driver.getStorage('businessProcessDemo');
exports.finalTest = driver.getStorage('businessProcessFinalTest');
