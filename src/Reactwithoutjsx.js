import React from 'react';

 export const Element = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Title'),
  React.createElement('p', null, 'Content')
)

 ReactDOM.render(element, document.getElementById('root'));
