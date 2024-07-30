import { css } from '@emotion/react';

import MaskIcon from '@/components/icon/MaskIcon';

import { Theme } from '@/styles/theme';

interface rankingBoxPropType {
  ranking: 1 | 2 | 3;
  name: string;
  solved: number;
  src: string;
}
const RankingBox = ({ ranking, name, solved, src }: rankingBoxPropType) => {
  const height = ['0', '170px', '135px', '80px'];
  return (
    <div css={Wrapper}>
      <MaskIcon width={150} height={150} src={src} isCircle={true} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: end;
          padding-bottom: 10px;
          gap: 5px;
          width: 240px;
          height: ${height[ranking]};
          color: white;
          background-color: ${Theme.color.mainBlue};
        `}
      >
        <p css={Meta}>{name}</p>
        <p css={Description}>{solved}문제 solved</p>
      </div>
    </div>
  );
};

export default RankingBox;

const Wrapper = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Meta = css`
  font-size: 1.3rem;
`;

const Description = css`
  font-size: 0.9rem;
  font-family: 'Pretendard-regular';
  font-weight: 200;
`;
