   app.directive("menu", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/menu.html',
        scope: {
            title: '@',
            items: '=',
            click: '&'
        },
        link: function (scope) {
            scope.Click = function (index) {
                scope.selectedIndex = index;
                scope.click({ index: index });
            };
        }
    };
});