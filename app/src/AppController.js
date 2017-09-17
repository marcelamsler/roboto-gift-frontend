/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(GiftSearchService, $interval, $timeout) {
  var self = this;

  let requestState = {
    finished: 'finished',
    notFinished: 'not_finished_yet'
  };

  // Load all registered users

  self.sendLogin = function (userName, password, targetUser, numberOfGifts) {
    self.targetUser = targetUser;
    self.results = null;
    self.personality = null;
    self.isLoading = true;
    self.showFirstLoadingHint = true;
    self.showSecondLoadingHint = false;

    let hintPromise = $timeout(() => {
      self.showSecondLoadingHint = true;
    }, 40000);

    GiftSearchService.getGiftRecommendations(userName, password, targetUser, numberOfGifts).then((ticketNumber) => {
      self.ticketNumber = ticketNumber;

      if (self.pollingPromise) {
        $interval.cancel(self.pollingPromise);
      }

      self.pollingPromise = $interval(() => {
        console.log('start polling');
        GiftSearchService.getRecommendationResults(self.ticketNumber).then((response) => {
          if (response.status === requestState.finished) {
            self.results = response.result;
            self.userInfo = response.userInfo;

            $interval.cancel(self.pollingPromise);
            $timeout.cancel(hintPromise);
            self.isLoading = false;
            if (response.personality_result && response.personality_result.consumption_preferences) {
              self.personality = enhancePreferences(response.personality_result);
            }
          }
        })
      }, 3000);

    }).catch(() => {
      if (self.pollingPromise) {
        $interval.cancel(self.pollingPromise);
      }
      $timeout.cancel(hintPromise);
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
      'consumption_preferences_reading'];

    let excludedPreferenceIds = ['consumption_preferences_automobile_ownership_cost',
      'consumption_preferences_spur_of_moment',
      'consumption_preferences_credit_card_payment',
      'consumption_preferences_influence_social_media',
      'consumption_preferences_automobile_safety',
      'consumption_preferences_influence_utility',
      'consumption_preferences_influence_online_ads',
      'consumption_preferences_influence_social_media',
      'consumption_preferences_influence_family_members',
      'consumption_preferences_credit_card_payment'];

    let relevantConsumptionPreferences = personality.consumption_preferences.filter((consumptionPreferenceCategory) => {
      return relevantConsumptionPreferencesCategoryIds.includes(consumptionPreferenceCategory.consumption_preference_category_id)
    });

    let likes = [];
    let dislikes = [];
    relevantConsumptionPreferences.forEach((consumptionPreferenceCategory) => {
      consumptionPreferenceCategory.consumption_preferences.forEach((preference) => {
        if (!excludedPreferenceIds.includes(preference.consumption_preference_id)) {
          preference.name = preference.name.replace(/Likely to/g, '...');
          if (preference.score === 1) {
            likes.push(preference);
          } else if (preference.score === 0) {
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

export default ['GiftSearchService', '$interval', '$timeout', AppController];
