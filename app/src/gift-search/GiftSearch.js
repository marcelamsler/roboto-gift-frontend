// Load the custom app ES6 modules

import GiftSearchService from 'src/gift-search/services/GiftSearchService';

import GiftResults from 'src/gift-search/components/GiftResults';
import GiftSearchPanel from 'src/gift-search/components/GiftSearchPanel'
export default angular
.module("giftSearch", ['ngMaterial'])

.component(GiftResults.name, GiftResults.config)
.component(GiftSearchPanel.name, GiftSearchPanel.config)

.service("GiftSearchService", GiftSearchService);
