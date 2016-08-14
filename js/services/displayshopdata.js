'use strict'
eshopApp.factory('shopdata', function($http,$q){

	var pub = {};
		
		
        var jsonUrl = 'http://jsonp.afeld.me/?url=https://api.myjson.com/bins/19ynm&callback=callbackFN',cachedResponse;

        pub.getShopData = function() {

            var deferred = $q.defer();

            if ( cachedResponse ) {
                deferred.resolve( cachedResponse );
            }

            else {

                $http.jsonp( jsonUrl );

                window.callbackFN = function( data ) {
                    cachedResponse = data;
                    deferred.resolve( data );
                }

            }

            return deferred.promise;

        };

        return pub;
		
		
		



});