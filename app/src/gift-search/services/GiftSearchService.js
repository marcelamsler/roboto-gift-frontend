function GiftSearchService($http, $q) {

  let serverUrl = 'https://roboto-gift.herokuapp.com/recommend/';

  return {
    getGiftRecommendations: function (userName, userPassword, targetUser, numOfGift) {
      let searchParams = {
        userName: userName,
        password: userPassword,
        targetUser: targetUser,
        numberOfGifts: numOfGift
      };

      return $http.post(serverUrl, {params: searchParams}).then((response) => response.data.ticket);
    },

    getRecommendationResults: function (ticketNumber) {
      return $http.get(serverUrl + 'get', {params: {id: ticketNumber}}).then((response) => response.data);
    }

  };
}