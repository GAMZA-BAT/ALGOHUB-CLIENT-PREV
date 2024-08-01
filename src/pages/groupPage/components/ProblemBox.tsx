import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import LevelIcon from '@/components/@common/LevelIcon';
import CheckboxIcon from '@/components/icon/CheckboxIcon';

import { ProblemDataType } from '@/type/problem';

import XmarkBoxIc from '@/assets/svgs/ic_xmark_box.svg?react';

interface problemBoxPropType {
  isExpired?: boolean;
  isClickActive?: boolean;
  problem: ProblemDataType;
  onClick?: () => void;
}
const ProblemBox = ({ problem, isExpired = false, isClickActive = true }: problemBoxPropType) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (isClickActive) {
      localStorage.setItem('problem', JSON.stringify(problem));
      navigate('/group/problem-detail');
    }
  };

  const handleTitleClick = () => {
    if (!isClickActive) {
      window.location.href = problem.link;
    }
  };

  return (
    <div css={Wrapper} onClick={handleClick}>
      <section css={MetaContainer}>
        <LevelIcon level={problem.level} />
        <div css={Twoline}>
          <p css={TitleStyle} onClick={handleTitleClick}>
            {problem.title}
          </p>
          <p css={DurationStyle}>{`${problem.startDate} ~ ${problem.endDate}`}</p>
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
            {problem.submitMemberCount}/{problem.memberCount}
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
          <p css={SubStyle}>{problem.accurancy}%</p>
        </div>
        {isExpired ? (
          <XmarkBoxIc width={'40px'} height={'40px'} fill={'#d2001a'} />
        ) : (
          <CheckboxIcon isChecked={problem.solved} />
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
  font-family: 'Pretendard-regular';
  font-weight: 600;

  font-size: 30px;
  cursor: pointer;
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
