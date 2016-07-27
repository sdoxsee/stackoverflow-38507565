(function() {
    'use strict';
    angular
        .module('gatewayApp')
        .factory('Foo', Foo);

    Foo.$inject = ['$resource'];

    function Foo ($resource) {
        var resourceUrl =  'resource/' + 'api/foos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
