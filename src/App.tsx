import { css } from '@emotion/react';

import { Outlet } from 'react-router-dom';

import Header from '@/components/@common/header/Header';

function App() {
  return (
    <div css={wrapper}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;

const wrapper = css`
  width: 100%;
  height: 100vh;
`;
