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

      return $http.get(serverUrl, {params: searchParams}).then((response) => response.data);
    },

  };
}