import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogItemsContainer from './components/containers/BlogItemsContainer';

const result = ReactDOMServer.renderToString(
  React.createElement(BlogItemsContainer)
);

export default result;
