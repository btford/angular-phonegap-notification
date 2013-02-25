/*
 * angular-phonegap-notification v0.0.1
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.phonegap.notification',
  ['btford.phonegap.ready']).
  factory('notification', function ($rootScope, phonegapReady) {
    return {
      alert: phonegapReady(function (message, alertCallback, title, buttonName) {
        navigator.notification.alert(message, function () {
          var that = this,
            args = arguments;
          
          $rootScope.$apply(function () {
            alertCallback.apply(that, args);
          });
        }, title, buttonName);
      }),
      confirm: phonegapReady(function (message, confirmCallback, title, buttonLabels) {
        navigator.notification.alert(message, function () {
          var that = this,
            args = arguments;
          
          $rootScope.$apply(function () {
            confirmCallback.apply(that, args);
          });
        }, title, buttonLabels);
      }),
      beep: function (times) {
        navigator.notification.beep(times);
      },
      vibrate: function (milliseconds) {
        navigator.notification.vibrate(milliseconds);
      }
    };
  });
