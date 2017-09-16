class GiftSearchPanelController {

  constructor($log, GiftSearchService) {
    this.GiftSearchService = GiftSearchService;
    this.$log = $log;
  }

  sendLogin() {

    this.GiftSearchService.getGiftRecommendations(this.username, this.userpassword, this.targetuser, 3).then((response)=> {
      console.log(response)
    });

  }

}

export default GiftSearchPanelController;