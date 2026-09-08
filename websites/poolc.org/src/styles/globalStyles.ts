import { css } from '@emotion/react';
import { fontFamily } from '~/styles/font';

export const globalStyles = css`
  html {
    min-height: 100%;
    /* iOS Safari paints its lower safe area from the root element. A transparent
       root can retain the last Drawer compositing layer after it closes. */
    background: rgb(250, 250, 250);
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family: ${fontFamily};
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }

  body {
    position: relative;
    min-height: 100vh;
    min-height: 100dvh;
    line-height: 1;
    background-color: rgb(250, 250, 250);
    outline: none;
    color: #4c3722;
    scroll-behavior: smooth;
    overflow-x: clip;
  }

  #root {
    min-height: 100vh;
    min-height: 100dvh;
    position: relative;
    margin: 0;
    padding: 0;
  }

  button {
    background-color: rgba(255, 255, 255, 0);
    border: none;
    cursor: pointer;
    outline: none;
  }

  pre {
    background-color: rgba(234, 240, 245, 0.726);
    padding: 1rem;
  }

  a {
    color: #47be9b;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  input:not([type='checkbox']):not([type='radio']) {
    -webkit-appearance: none;
    max-width: 100%;
  }

  img,
  video,
  canvas,
  svg {
    max-width: 100%;
  }

  .ant-spin:not(.ant-spin-sm) {
    display: flex;
    width: 100%;
    min-height: 40vh;
    align-items: center;
    justify-content: center;
  }

  .ant-spin:not(.ant-spin-sm) .ant-spin-dot,
  .ant-spin:not(.ant-spin-sm) .ant-spin-dot-holder {
    font-size: 2.8rem !important;
  }

  .ant-spin:not(.ant-spin-sm) .ant-spin-dot {
    width: 2.8rem !important;
    height: 2.8rem !important;
  }

  .ant-spin:not(.ant-spin-sm) .ant-spin-dot-item {
    width: 1.4rem !important;
    height: 1.4rem !important;
  }

  .poolc-inline-spinner.ant-spin {
    display: inline-flex;
    min-width: 45px;
    min-height: 45px;
    align-items: center;
    justify-content: center;
  }

  .tui-editor-defaultUI,
  .tui-editor-contents {
    font-family: ${fontFamily};
  }
`;
