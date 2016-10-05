angular.module('SpotifyApp')
  .directive('navbar', function () {
    return {
      restrict: 'E',
      templateUrl: '/components/nav_bar/navBarView.html',
      controller: NavBarCtrl
    };
  });

function NavBarCtrl ($scope, $location) {
  $scope.query = '';
  $scope.queryTypes = [{name: 'Track', selected: false},
                       {name: 'Album', selected: false},
                       {name: 'Artist', selected: false}];

  $scope.search = function ($event) {
    const selectedTypes = $scope.queryTypes.filter(function (type) {
      return type.selected;
    }).map(function (type) {
      return type.name.toLowerCase();
    });

    // default to all types if no type is selected
    if (!selectedTypes.length) {
      $scope.queryTypes.forEach(function (type) {
        type.selected = true;
        selectedTypes.push(type.name);
      });
    }

    $location.path(`/results/${$scope.query}`);
    $location.search('type', selectedTypes.join(',') || 'track');
  };
};
