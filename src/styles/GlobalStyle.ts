/** Global Style 선언 */
import { css } from '@emotion/react';

import { fontStyle } from '@/styles/fonts';

export const GlobalStyle = css`
  ${fontStyle}

  :root {
    --vh: 100%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Pretendard-Medium';
    font-size: 18px;

    position: relative;
    overscroll-behavior: none;

    line-height: 1;
    touch-action: manipulation;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
