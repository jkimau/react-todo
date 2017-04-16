import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  [contenteditable=true]:not(:focus):before {
    content: attr(data-placeholder);
    display: block; /* For Firefox */
    color: #ddd;
  }

  [contenteditable=true]:not(:focus):not(:empty):before {
    display: none;
  }
`;
