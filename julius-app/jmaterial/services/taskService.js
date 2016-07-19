/**
 * Created by Julius Hernandez on 5/14/2016.
 */

"use strict";

angular.module('juliusApp')
    .factory('taskSer', [function () {
        //----------------- variable's -----------------
        var tasks = [
                {
                    name: 'Study AngularJS 2.0',
                    avatar: 'julius-1',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'code code code', date: new Date('2016-01-24')},
                        {title: 'study study study', date: new Date('2016-01-22')}
                    ]
                },
                {
                    name: 'Build a NodeJS backend',
                    avatar: 'julius-1',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'hack hack hack', date: new Date('2016-01-24')},
                        {title: 'art art art', date: new Date('2016-01-22')}
                    ]
                },
                {
                    name: 'Watch new Star Wars movie',
                    avatar: 'julius-1',
                    bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corporis est et eveniet hic illum, labore minima minusnihil pariatur qui quo, suscipit velit veniam voluptates. Aliquam id officia voluptates!',
                    notes: [
                        {title: 'hmm hmm hmm', date: new Date('2016-01-24')},
                        {title: 'ha ha ha', date: new Date('2016-01-22')}
                    ]
                }
            ],

        // keeping track of how many users there are
        taskCount = 0;

        //---------------------------------------------------------------------
        //---------------------------------------------------------------------
        // return this services' api obj
        return {
            selectedTask: null,
            tasks: tasks
        }
    }]);
