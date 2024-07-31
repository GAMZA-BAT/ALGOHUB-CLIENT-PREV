import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import LevelIcon from '@/components/@common/LevelIcon';
import CheckboxIcon from '@/components/icon/CheckboxIcon';

import XmarkBoxIc from '@/assets/svgs/ic_xmark_box.svg?react';

interface problemBoxPropType {
  level: number;
  title: string;
  duration: string;
  submitCnt: number;
  memberCnt: number;
  accuracy: number;
  isChecked: boolean;
  isExpired?: boolean;
  isClickActive?: boolean;
}
const ProblemBox = ({
  level,
  title,
  duration,
  submitCnt,
  memberCnt,
  accuracy,
  isChecked,
  isExpired = false,
  isClickActive = true,
}: problemBoxPropType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    isClickActive && navigate('/group/problem-detail', { state: { problemId: level } });
  };

  return (
    <div css={Wrapper} onClick={handleClick}>
      <section css={MetaContainer}>
        <LevelIcon level={level} />
        <div css={Twoline}>
          <p css={TitleStyle}>{title}</p>
          <p css={DurationStyle}>{duration}</p>
        </div>
      </section>
      <section css={DetailContainer}>
        <div
          css={[
            Twoline,
            css`
              align-items: center;
            `,
          ]}
        >
          <h3>solved</h3>
          <p css={SubStyle}>
            {submitCnt}/{memberCnt}
          </p>
        </div>
        <div
          css={[
            Twoline,
            css`
              align-items: center;
            `,
          ]}
        >
          <h3>accurancy</h3>
          <p css={SubStyle}>{accuracy}%</p>
        </div>
        {isExpired ? (
          <XmarkBoxIc width={'40px'} height={'40px'} fill={'#d2001a'} />
        ) : (
          <CheckboxIcon isChecked={isChecked} />
        )}
      </section>
    </div>
  );
};

export default ProblemBox;

const Wrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 20px;

  border-bottom: 1px solid lightgray;
`;

export const MetaContainer = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TitleStyle = css`
  font-family: 'Pretendard-semibold';
  font-weight: 600;

  font-size: 30px;
`;
export const DurationStyle = css`
  font-family: 'Pretendard-regular';
  font-weight: 200;
  font-size: 20px;
`;

const SubStyle = css`
  font-family: 'Pretendard-regular';
  font-weight: 200;

  color: gray;
`;

export const Twoline = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const DetailContainer = css`
  display: flex;
  gap: 30px;

  align-items: center;
`;
