import { css } from '@emotion/react';

import Logo from '@/assets/img/AlgoHubLogo.png';

const Header = () => {
  return (
    <div css={wrapper}>
      <img css={logoWrapper} src={Logo} />
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
`;
