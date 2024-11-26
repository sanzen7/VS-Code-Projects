//import { liteClient as algoliasearch } from 'algoliasearch/lite';
import instantSearch from '/Users/Steve/node_modules/instantsearch.js';
import "instantsearch.css/themes/satellite.css";


import {
    searchBox,
    hits,
    configure,
    pagination,
    panel,
    refinementList,
    poweredBy,
    clearRefinements,
    currentRefinements,
} from "c:/Users/Steve/node_modules/instantsearch.js/es/widgets/index";

//Create variables
const APP_ID = "latency";
const SEARCH_ONLY_API_KEY = "8d693b34ba79a73c7d32314b93966108";
const INDEX_NAME = "instant_search";

//Create searchClient
const searchClient = algoliasearch(APP_ID, SEARCH_ONLY_API_KEY);

//Create the instantSearch instance
const search = instantSearch({
    indexName: INDEX_NAME,
    searchClient,
});

// Add widgets to the instantsearch instance
search.addWidgets([
    searchBox({
        container: '#searchbox',
    }),
    hits ({
       container: '#hits',
    }),
]);

// Start the instantsearhc instance
search.start();