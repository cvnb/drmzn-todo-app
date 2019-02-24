import 'src/styles/default.scss';
import 'src/config/events';

import { store } from 'src/config/store';

// react
import { views } from 'drmzn-react';
import App from 'src/components/root';

// mustache
// import { views, getTemplates } from 'drmzn-mustache';
// const tpls = require.context('src/mustache', true, /\.html$/);
// const { templates, container } = getTemplates(tpls);

(() => {
  console.log('client document loaded...');

  // react render
  views(store, App).render();

  // mustache render
  // views(store, container, templates).render();

})();
