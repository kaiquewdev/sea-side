;(function (document, window) {
  angular
    .module('sea', [])
    .value('screencasts', [{
      title: 'Node.js - Como criar um CMS com MEAAN - #1 ',
      src: '//www.youtube.com/embed/U0BKa_ocKvI',
      target: 'https://plus.google.com/events/cvv7ludd57esg0ob8fgsglu7fak',
    }, {
      title: 'Node.js - Como criar um CMS com MEAAN - #2',
      src: '//www.youtube.com/embed/_wN0MCiIwq8',
      target: 'https://plus.google.com/events/cbhii35b860jhr634eqk7c31jm4',
    }])
    .value('events', [{
      title: 'Meteor + Angular + Ionic utilizando (ES2015)',
      content: 'Este foi o resultado do que preparamos neste primeiro encontro!',
      href: 'http://jankenpo.meteor.com',
      label: 'Resultado!'
    }])
    .controller('MainCtrl', function ($scope, screencasts, events, $sce) {
      function _trustMapHandler(item) {
        item.src = $sce.trustAsResourceUrl(item.src);
        return item;
      }
      $scope.screencasts = screencasts.map(_trustMapHandler).reverse();
      $scope.events = events;
    })
    .run(function ($log) {
      $log.debug('Sea is running!');
    });

  angular
    .bootstrap(document.getElementsByTagName('body'), ['sea']);
})(document, window);
