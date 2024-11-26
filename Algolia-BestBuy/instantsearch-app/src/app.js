const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'MN50QE3P0J',
  '8d693b34ba79a73c7d32314b93966108'
);

const search = instantsearch({
  indexName: 'bestbuy',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
          <img src=${hit.image} alt=${hit.name} />
          <div>
            <h1>${components.Highlight({ hit, attribute: 'name' })}</h1>
          </div>
        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
  instantsearch.widgets.refinementList({
    container: '#refinement-list',
    attribute: 'categories'
  })
]);

search.start();
