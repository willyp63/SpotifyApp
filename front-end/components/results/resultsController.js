angular.module('SpotifyApp')
  .controller('ResultsCtrl', function ResultsCtrl ($scope, $routeParams, SpotifyFactory) {
    $scope.tracks = {items: [], showing: true};
    $scope.albums = {items: [], showing: true};
    $scope.artists = {items: [], showing: true};
    $scope.query = $routeParams.query;
    $scope.types = $routeParams.type.split(',');

    $scope.toggleList = function (listName) {
      $scope[listName].showing = !$scope[listName].showing;
    };

    SpotifyFactory.search($scope.query, $scope.types)
      .then(function () {
        $scope.tracks.items = SpotifyFactory.tracks;
        $scope.tracks.showing = true;
        $scope.albums.items = SpotifyFactory.albums;
        $scope.tracks.showing = true;
        $scope.artists.items = SpotifyFactory.artists;
        $scope.tracks.showing = true;
      });
  });
