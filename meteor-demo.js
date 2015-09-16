if (Meteor.isClient) {

    // This code only runs on the client
    angular.module('demo', ['angular-meteor']);

    angular.module('demo').controller('ListCtrl', ['$scope',
        function ($scope) {

            $scope.messages = [
                {text: 'Message 1'},
                {text: 'Message 2'},
                {text: 'Message 3'}
            ];

        }]);
}
if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
