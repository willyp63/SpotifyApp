angular.module('SpotifyApp')
  .config(function ($routeProvider) {
    $routeProvider
      // splash route
      .when('/', {
        templateUrl: '/components/splash/splashView.html',
        controller: 'SplashCtrl'
      })
      // search results route
      .when('/results/:query', {
        templateUrl: '/components/results/resultsView.html',
        controller: 'ResultsCtrl'
      })
      .otherwise({ // default
        redirectTo: '/'
      });
  });
