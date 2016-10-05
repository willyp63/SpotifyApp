angular.module('SpotifyApp')
  .factory('SpotifyFactory', function SpotifyFactory ($http) {
    const factory = {
      tracks: [],
      albums: [],
      artists: []
    };

    const BASE_URL = 'https://api.spotify.com/v1/search';
    factory.search = function (query, types) {
      // return promise
      return $http({
        method: 'GET',
        url: BASE_URL + '?q=' + query + '&type=' + types.join(',')
      }).then(function (res) {
        // update state
        factory.tracks = res.data.tracks ? res.data.tracks.items : [];
        factory.albums = res.data.albums ? res.data.albums.items : [];
        factory.artists = res.data.artists ? res.data.artists.items : [];
      }, function (err) {
        console.log(`**SpotifyError** ~ ${err}`);
      });
    };

    return factory;
  });
