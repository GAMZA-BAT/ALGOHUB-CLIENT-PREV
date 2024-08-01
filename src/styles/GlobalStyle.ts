/** Global Style 선언 */
import { css } from '@emotion/react';

import { fontStyle } from '@/styles/fonts';

export const GlobalStyle = css`
  ${fontStyle}

  :root {
    --vh: 100%;
  }

  #root,
  html,
  body {
    max-width: 1512px;
    margin: 0 auto;

    background-color: #f5f5f5;
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  * {
    max-width: 1512px;

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
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);

    scroll-behavior: smooth;

    user-select: none;

    display: flex;
    justify-content: center;

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
