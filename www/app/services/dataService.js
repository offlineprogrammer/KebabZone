(function() {
    'use strict';

    angular
        .module('kebabZone')
        .factory('dataService', dataService);

    function dataService($http, $q, appConfig) {
        var dataCache;
        var postCache;
        var guestProfileId;
        var DATA_CACHE_NAME = 'dataCache';
        var POST_CACHE_NAME = 'postCache';
        var GUEST_PROFILE_CACHE_KEY = 'guestProfileId';

        var LANGUAGES_URI_SUFFIX = 'languages';

        init();

        var service = {};

        service.youtube = {
            getVideos: function(channelId,nextPageToken) {

                var youtubeParams = {
                    key: appConfig.YouTubeAPIKey,
                    type: 'video',
                    maxResults: '10',
                    part: 'id,snippet',
                    q: '',
                    order: 'viewCount',
                    channelId: channelId,
                    pageToken:nextPageToken

                };

                return get('search?', youtubeParams);

            },

            getChannelDetails: function(forUsername) {

                var youtubeParams = {
                    key: appConfig.YouTubeAPIKey,
                    forUsername: forUsername,
                    part: 'id,snippet'
                };

                return get('channels?', youtubeParams);

            }
        };



        return service;


        function get(uriSuffix, params) {
            var deferred = $q.defer();

            $http.get(appConfig.webApiRoot + uriSuffix, {
                    params: params
                })
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }


        function post(uriSuffix, postData) {
            var deferred = $q.defer();

            if (uriSuffix !== LANGUAGES_URI_SUFFIX) {
                if (!postData) {
                    postData = {};
                }

                postData.hybridAppLang = localeService.getLanguage().code;
                postData.hybridAppLoc = localeService.getLocation().code;
            }

            $http.post(appConfig.webApiRoot + uriSuffix, postData)
                .success(function(data) {
                    deferred.resolve(data);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }



        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }

        function init() {

        }
    }
}());