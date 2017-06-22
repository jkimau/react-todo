import { injectGlobal } from 'styled-components';
import { mainBG } from 'global/colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: sans-serif;
    position: relative;
    background: ${mainBG};
  }

  .root,
  .app-container {
    height: 100%;
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
