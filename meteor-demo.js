Messages = new Mongo.Collection('messages');

if (Meteor.isClient) {
    // This code only runs on the client
    angular.module('demo', ['angular-meteor']);


    // Bootstrap Angular to mobile as well
    function onReady() {
        angular.bootstrap(document, ['demo']);
    }

    if (Meteor.isCordova) {
        angular.element(document).on('deviceready', onReady);
    }
    else {
        angular.element(document).ready(onReady);
    }

    angular.module('demo').controller('ListCtrl', ['$scope', '$meteor',
        function ($scope, $meteor) {

            // The function will return a the result of calling the find
            // function with the sort parameter on our Tasks collection
            $scope.messages = $meteor.collection(function () {
                return Messages.find({}, {sort: {createdAt: -1}})
            });

            // code we need to add to listen to the submit event on the form
            $scope.addMessage = function (newTask) {
                // create new message
                $scope.messages.push({
                        text: newTask,
                        createdAt: new Date()
                    }
                );
            };
        }]);

}
if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
