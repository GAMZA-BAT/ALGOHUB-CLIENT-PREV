import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

interface NavTabProps {
  src: string;
  title: string;
}

const NavTab = ({ src, title }: NavTabProps) => {
  return (
    <div css={Wrapper}>
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
