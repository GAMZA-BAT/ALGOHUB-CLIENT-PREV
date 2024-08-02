import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import Alarm from '@/components/Alarm';
import MaskIcon from '@/components/icon/MaskIcon';

import Logo from '@/assets/img/AlgoHubLogo.png';
import bell from '@/assets/svgs/ic_bell.svg';

import { useSideDispatch } from '@/contexts/sidePanelContext';
import { AuthManager } from '@/datamanager/authManager';

const Header = () => {
  const navigate = useNavigate();
  const sideDispatch = useSideDispatch();
  const anonymous = AuthManager.getInstance().isAnonymous();
  return (
    <div css={wrapper}>
      <img css={logoWrapper} src={Logo} onClick={() => navigate('/')} />
      {!anonymous && (
        <div
          css={bellWrapper}
          onClick={() => {
            sideDispatch({
              type: 'OPEN',
              payload: <Alarm />,
            });
          }}
        >
          <MaskIcon width={4} height={4} src={bell} />
        </div>
      )}
    </div>
  );
};

export default Header;

const wrapper = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 10%;
  padding: 1.5rem 0 1rem 1.5rem;
`;

const logoWrapper = css`
  height: 100%;
  cursor: pointer;
`;

const bellWrapper = css`
  padding: 1rem 1.5rem;
  cursor: pointer;
`;
