import { css } from '@emotion/react';

import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '@/components/@common/header/Header';
import CustomModal from '@/components/@common/modal/CustomModal';

import { ModalProvider } from '@/contexts/modalContext';

import { AuthManager } from './datamanager/authManager';

function App() {
  const [isAuthInitialized, setIsAuthInitialized] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      await AuthManager.getInstance().init();
      setIsAuthInitialized(true);
    };
    init();
  }, []);

  const setScreenSize = () => {
    // vh 관련
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // window width 관련
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const maxWidth = Math.min(982, windowWidth);
    document.documentElement.style.setProperty('--app-max-width', `${maxWidth}px`);
  };

  useEffect(() => {
    setScreenSize();
    window.addEventListener('resize', setScreenSize);

    return () => {
      window.removeEventListener('resize', setScreenSize);
    };
  }, []);

  if (!isAuthInitialized) {
    return null;
  }
  return (
    <ModalProvider>
      <div css={wrapper}>
        <Header />
        <Outlet />
      </div>
      <CustomModal />
    </ModalProvider>
  );
}

export default App;

const wrapper = css`
  width: 1512px;
  height: 982px;

  overflow-y: scroll;
`;
