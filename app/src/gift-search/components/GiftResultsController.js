class GiftResultsController {

  constructor(GiftSearchService, $log) {
    this.$log = $log;
    GiftSearchService.getGiftRecommendations().then((results) => {
      this.results = results;
    })
  }
}

export default GiftResultsController;