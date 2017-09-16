class GiftSearchPanelController {

    constructor(GiftSearchService, $mdBottomSheet, $log) {
        this.$mdBottomSheet = $mdBottomSheet;
        this.$log = $log;
    }

    sendLogin() {

        GiftSearchService.getGiftRecommendations(this.username, this.userpassword, this.targetuser, 3);

    }


}

export default GiftSearchPanelController;