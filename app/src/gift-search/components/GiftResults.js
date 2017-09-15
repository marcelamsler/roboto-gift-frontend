import GiftResultsController from './GiftResultsController';

export default {
  name : 'giftResults',
  config : {
    bindings         : {  results: '<' },
    templateUrl      : 'src/gift-search/components/GiftResults.html',
    controller       : [ '$mdBottomSheet', '$log', GiftResultsController ]
  }
};