import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import Logo from '@/assets/img/AlgoHubLogo.png';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div css={wrapper}>
      <img css={logoWrapper} src={Logo} onClick={() => navigate('/')} />
    </div>
  );
};

export default Header;

const wrapper = css`
  width: 100%;
  height: 10%;
  padding: 1.5rem 0 1rem 1.5rem;
`;

const logoWrapper = css`
  height: 100%;
  cursor: pointer;
`;
