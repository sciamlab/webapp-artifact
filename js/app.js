var app = angular.module('app', []);

app.config(function() {

});

app.constant('config', {
});

/*app.factory('$mail', function($http, $log, $location) {
    var mail = {};
    mail.send = function(feedback){
        return $http({
            method:'POST',
            url: $location.absUrl()+'sendmailgun.php',
            data: $.param(feedback),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            responseType:'json'
        });
    };
    return mail;
});*/

app.run(function($rootScope, $log, config) {
    $log.info('app init...');
    $rootScope.config = config;
});

app.controller('index', function($scope, $rootScope, $log, config) {
    $log.info('index controller');

});