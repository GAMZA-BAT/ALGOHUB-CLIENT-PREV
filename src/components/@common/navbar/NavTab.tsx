import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

interface NavTabProps {
  src: string;
  title: string;
  onClick?: () => void;
}

const NavTab = ({ src, title, onClick }: NavTabProps) => {
  return (
    <div css={Wrapper} onClick={onClick}>
      <MaskIcon width={30} height={30} src={src} />
      <div>{title}</div>
    </div>
  );
};

export default NavTab;

const Wrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
