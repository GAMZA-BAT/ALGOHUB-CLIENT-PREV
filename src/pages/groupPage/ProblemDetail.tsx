import { css } from '@emotion/react';

import { useLocation, useNavigate } from 'react-router-dom';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';
import SubmitBox from '@/pages/groupPage/components/SubmitBox';

import { seperator } from '@/components/@common/SideContent';

import AlgoHubLogoS from '@/assets/img/AlgoHubLogoS.png';
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
      <section css={CategoryWrapper}>
        <h3></h3>
        <h3>제출일시</h3>
        <h3>메모리</h3>
        <h3>시간</h3>
        <h3>언어</h3>
        <h3>코드길이</h3>
        <h3>결과</h3>
      </section>
      <article>
        <SubmitBox
          level={problemId}
          nickname={'jnary'}
          problemImage={AlgoHubLogoS}
          solvedDate={'2024-08-30'}
          isCorrect={false}
          memoryUsage={2020}
          executionTime={0}
          language={'C++17'}
          codeLength={467}
          variant={'first'}
        />
        <SubmitBox
          level={problemId}
          nickname={'jnary'}
          problemImage={AlgoHubLogoS}
          solvedDate={'2024-08-30'}
          isCorrect={false}
          memoryUsage={2020}
          executionTime={0}
          language={'C++17'}
          codeLength={467}
          variant={'secondary'}
        />
        <SubmitBox
          level={problemId}
          nickname={'jnary'}
          problemImage={AlgoHubLogoS}
          solvedDate={'2024-08-30'}
          isCorrect={false}
          memoryUsage={2020}
          executionTime={0}
          language={'C++17'}
          codeLength={467}
          variant={'third'}
        />
        <SubmitBox
          level={problemId}
          nickname={'jnary'}
          problemImage={AlgoHubLogoS}
          solvedDate={'2024-08-30'}
          isCorrect={false}
          memoryUsage={2020}
          executionTime={0}
          language={'C++17'}
          codeLength={467}
        />
      </article>
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

const CategoryWrapper = css`
  display: grid;
  grid-template-columns: 0.8fr 1.5fr 1.3fr 1fr 1fr 1fr 1fr;

  justify-content: center;
  justify-items: center;
  align-items: center;

  width: 100%;

  padding: 20px 110px 0 100px;
`;
