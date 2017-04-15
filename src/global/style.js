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
  }

  [contenteditable=true]:not(:focus) > div:first-child {
    display: none;
  }
`;
