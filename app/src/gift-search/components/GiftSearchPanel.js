import GiftSearchPanelController from './GiftSearchPanelController';

export default {
  name: 'giftSearchPanel',
  config: {
    bindings: {sendSearchRequest: '&'},
    templateUrl: 'src/gift-search/components/GiftSearchPanel.html',
    controller:['$log', 'GiftSearchService', GiftSearchPanelController]
  }
};
