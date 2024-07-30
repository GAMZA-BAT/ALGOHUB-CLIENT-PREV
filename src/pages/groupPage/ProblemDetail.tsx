import { css } from '@emotion/react';

import { useLocation, useNavigate } from 'react-router-dom';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';

import { seperator } from '@/components/@common/SideContent';

import AngleLeftIc from '@/assets/svgs/ic_angle_left.svg?react';

const ProblemDetail = () => {
  const navigate = useNavigate();
  const problemId = useLocation().state.problemId;

  return (
    <div css={Wrapper}>
      <section css={Meta}>
        <AngleLeftIc width={'40px'} height={'40px'} onClick={() => navigate(-1)} />
        <ProblemBox
          level={problemId}
          title={''}
          duration={''}
          submitCnt={0}
          memberCnt={0}
          accuracy={0}
          isChecked={false}
          isClickActive={false}
        />
      </section>
      <hr css={seperator} />
    </div>
  );
};

export default ProblemDetail;

const Wrapper = css`
  margin: 20px -20px 0 0;
`;

const Meta = css`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
