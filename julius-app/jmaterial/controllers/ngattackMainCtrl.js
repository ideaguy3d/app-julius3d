"use strict";

/**
 * Created by Julius Hernandez on 5/14/2016.
 */

angular.module('juliusApp')
    .controller('j3dMainCtrl', [
        'taskSer', '$scope', '$mdSidenav', '$mdToast', '$mdDialog', '$mdMedia', '$mdBottomSheet',
        function (taskSer, $scope, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $mdBottomSheet) {

            $scope.tasks = taskSer.tasks;
            $scope.jmessage = "jmeet up app ^_^/";
            $scope.selected = $scope.tasks[0];
            taskSer.selectedTask = $scope.selected;
            $scope.seachText = '';
            $scope.tabIndex = 0;
            $scope.newNote = {};

            var openToast = function (message) {
                $mdToast.show($mdToast.simple().textContent(message)
                    .position('top right')
                    .hideDelay(3000));
            };

            $scope.setFormScope = function (scope) {
                $scope.formScope = scope;
            };

            $scope.addNote = function () {
                $scope.selected.notes.push($scope.newNote);
                // let's reset the form
                $scope.formScope.noteForm.$setUntouched();
                $scope.formScope.noteForm.$setPristine();

                $scope.newNote = {};
                openToast("zNote was Added :)");
            };

            $scope.toggleSideNav = function () {
                $mdSidenav('left').toggle();
            };

            $scope.selectUser = function (user) {
                $scope.selected = user;
                userSer.selectedUser = $scope.selected;

                if ($mdSidenav('left').isOpen()) {
                    $mdSidenav('left').close();
                }
                $scope.tabIndex = 0;
            };

            $scope.showContactOptions = function ($evt) {
                $mdBottomSheet.show({
                        parent: angular.element(document.getElementById('main-wrapper')),
                        templateUrl: 'views/contactSheet.html',
                        controller: 'contactPanelCtrl'
                    })
                    .then(function (clickedItem) {
                        //first check that clickedItam is truthy then console.log("");
                        clickedItem && console.log(clickedItem.name + ' clicked!');
                    })
            };

            $scope.removeNote = function (note) {
                var foundIndex = $scope.selected.notes.indexOf(note);
                this.selected.notes.splice(foundIndex, 1);
                openToast('Note was removed');
            };

            $scope.clearNotes = function (evt) {
                var confirm = $mdDialog.confirm().title('Now, do you really want to Delete All notes?')
                    .textContent('this action cant be undone')
                    .targetEvent(evt)
                    .ok('.Ok')
                    .cancel('.Cancel');
                $mdDialog.show(confirm).then(function () {
                    $scope.selected.notes = [];
                    openToast('Notes have been clear');
                });
            };

            $scope.addUser = function (evt) {
                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));

                $mdDialog.show({
                        templateUrl: 'views/newUserDialog.html',
                        parent: angular.element(document.body),
                        targetEvent: evt,
                        controller: "addUserDialogCtrl",
                        //controllerAs: 'userDialogCtrl',
                        clickOutsideToClose: true,
                        fullscreen: useFullScreen
                    })
                    .then(function (user) {
                        openToast("The User has been added ^_^");
                        userSer.selectedUser = user;
                    });
            };

        }//end of ctrl function
    ]);