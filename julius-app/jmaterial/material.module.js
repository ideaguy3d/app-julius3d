"use strict";

/**
 * Created by Julius Hernandez on 5/14/2016.
 */

angular.module('juliusApp', ['ngMaterial', 'ngMdIcons', 'ngMessages'])
    .config(['$mdIconProvider', '$mdThemingProvider',
        function ($mdIconProvider, $mdThemingProvider) {
            $mdIconProvider
                .defaultIconSet('img/svg/avatars.svg', 128)
                .icon('menu', 'img/svg/menu.svg', 24)
                .icon('google_plus', 'img/svg/google_plus.svg', 30)
                .icon('hangouts', 'img/svg/hangouts.svg', 30)
                .icon('twitter', 'img/svg/twitter.svg', 30)
                .icon('phone', 'img/svg/phone.svg', 30)
                .icon('mail', 'img/svg/twitter.svg');

            $mdThemingProvider.theme('default')
                .primaryPalette('red')
                .accentPalette('yellow');
        }
    ]);
