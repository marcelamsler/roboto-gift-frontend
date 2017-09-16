/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(GiftSearchService, $interval) {
  var self = this;

  let requestState = {
    finished: 'finished',
    notFinished: 'not_finished_yet'
  };

  self.selected = null;
  self.users = [];
  self.selectUser = selectUser;


  // Load all registered users

  self.sendLogin = function () {

    GiftSearchService.getGiftRecommendations(this.username, this.userpassword, this.targetuser, 3).then((ticketNumber) => {
      self.ticketNumber = ticketNumber;
      let pollingPromise = $interval(() => {
        console.log('start polling');
        GiftSearchService.getRecommendationResults(self.ticketNumber).then((response) => {
          if (response.status === requestState.finished) {
            self.results = response.result[0];
            $interval.cancel(pollingPromise);
            console.log('polling-finished')
          }
        })
      }, 1000);

    });
  };

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser(user) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}

export default ['GiftSearchService', '$interval', AppController];
