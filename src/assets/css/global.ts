import { createGlobalStyle, css } from 'styled-components';
import { typography } from './typography';

export const bodyStyles = css`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local('Roboto Regular'), local('Roboto-Regular'),
      url('../../../public/fonts/Roboto-Regular') format('ttf');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: local('Roboto-Medium'), local('Roboto-Medium'),
      url('../../../public/fonts/Roboto-Medium') format('ttf');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local('Roboto Bold'), local('Roboto-Bold'),
      url('../../../public/fonts/Roboto-Bold') format('ttf');
  }

  html,
  body,
  figure,
  ul,
  table,
  fieldset {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body {
    font-family: ${typography.type.primary};
    font-size: ${typography.size.s2}px;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }
  body {
    overflow: auto;
  }

  html,
  body,
  #root {
    min-height: 100vh;
    height: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${bodyStyles}
`;
