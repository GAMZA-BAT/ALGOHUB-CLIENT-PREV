import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

import pin from '@/assets/img/pin.png';

interface GroupGridProps {
  title: string;
}

const GroupGrid = ({ title }: GroupGridProps) => {
  return (
    <div css={Container}>
      <div css={TitleWrapper}>
        <MaskIcon width={28} height={40} src={pin} />
        <div css={Title}>{title}</div>
      </div>
    </div>
  );
};

export default GroupGrid;

const Container = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TitleWrapper = css`
  display: flex;
  width: 100%;
  gap: 18px;
`;

const Title = css`
  font-size: 1.4rem;
  font-family: 'Pretendard-regular';
`;
