class GiftSearchPanelController {

  constructor($log, GiftSearchService) {
    this.GiftSearchService = GiftSearchService;
    this.$log = $log;
  }

  sendRequest() {
    this.sendSearchRequest({userName: this.username, password: this.userpassword, targetUser: this.targetuser, numberOfGifts: 3});
  }

}

export default GiftSearchPanelController;