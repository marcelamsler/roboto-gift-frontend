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

  self.sendLogin = function (userName, password, targetUser, numberOfGifts) {

    GiftSearchService.getGiftRecommendations(userName, password, targetUser, numberOfGifts).then((ticketNumber) => {
      self.ticketNumber = ticketNumber;
      let pollingPromise = $interval(() => {
        console.log('start polling');
        GiftSearchService.getRecommendationResults(self.ticketNumber).then((response) => {
          if (response.status === requestState.finished) {
            self.results = response.result;

            $interval.cancel(pollingPromise);
            self.personality = enhancePreferences(response.personality_result);
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

  function enhancePreferences(personality) {
    let relevantConsumptionPreferencesCategoryIds = ['consumption_preferences_shopping',
      'consumption_preferences_health_and_activity',
      'consumption_preferences_reading',
      'consumption_preferences_music',
      'consumption_preferences_movie'];

    let excludedPreferenceIds = ['consumption_preferences_automobile_ownership_cost'];

    let relevantConsumptionPreferences = personality.consumption_preferences.filter((consumptionPreferenceCategory) => {
      return relevantConsumptionPreferencesCategoryIds.includes(consumptionPreferenceCategory.consumption_preference_category_id)
    });

    let likes = [];
    let dislikes = [];
    relevantConsumptionPreferences.forEach((consumptionPreferenceCategory) => {
      consumptionPreferenceCategory.consumption_preferences.forEach((preference) => {
        if (!excludedPreferenceIds.includes(preference.consumption_preference_id)) {
          preference.name = preference.name.replace(/Likely to/g, '...');
          if (preference.score > 0) {
            likes.push(preference);
          } else {
            dislikes.push(preference);
          }
        }
      })
    });

    personality.dislikes = dislikes;
    personality.likes = likes;

    return personality;
  }
}

export default ['GiftSearchService', '$interval', AppController];
