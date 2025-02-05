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
  width: 100%;
  height: 100vh;

  overflow-y: scroll;
`;
