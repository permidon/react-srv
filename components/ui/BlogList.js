import React from 'react';
import DOM from 'react-dom-factories'; 

import _ from 'lodash';

const Image = ({ src, width, height, alt }) => (
  DOM.img({ src, width, height, alt })
);

const TextBox = ({ str }) => (
  DOM.span(
    {style: { display: 'inline-block' }},
    str)  
);

const BlogItem = ({ src, str }) => (
  DOM.div(
    {style: { background: 'lightgreen' } },
    React.createElement( Image, {
      src: src,
      width: 128,
      height: 128,
      alt: "post logo"
    }),
    React.createElement( TextBox, {
      str: str
    })
  )
);

const BlogList = ({ items }) => (
  React.createElement('ul',
    null,
    _.map(
      items,
      (item, key) => (
        React.createElement('li', { key }, React.createElement( BlogItem, { 
          src: item.src,
          str: item.str
        }))
      )
    )
  )
);

export default BlogList;
