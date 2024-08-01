import { css } from '@emotion/react';

import { useNavigate } from 'react-router-dom';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';
import SubmitBox from '@/pages/groupPage/components/SubmitBox';

import { seperator } from '@/components/@common/SideContent';

import { useGetSolution } from '@/hooks/query/useSolutionQuery';

import { ProblemDataType } from '@/type/problem';
import { SolutionDataType } from '@/type/solution';

import AngleLeftIc from '@/assets/svgs/ic_angle_left.svg?react';

const ProblemDetail = () => {
  const navigate = useNavigate();
  const problem: ProblemDataType = JSON.parse(localStorage.getItem('problem') + '');

  const {
    data: solutionsData,
    error: solutionsError,
    isLoading: isSolutionsLoading,
  } = useGetSolution(problem.problemId);

  if (isSolutionsLoading) return <></>;
  return (
    <div css={Wrapper}>
      <section css={Meta}>
        <AngleLeftIc width={'40px'} height={'40px'} onClick={() => navigate(-1)} />
        <ProblemBox problem={problem} isClickActive={false} />
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
        {solutionsData.map((solution: SolutionDataType, idx: number) => (
          <SubmitBox
            key={solution.solutionId}
            level={problem.level}
            solution={solution}
            variant={
              idx === 0 ? 'first' : idx === 1 ? 'secondary' : idx === 2 ? 'third' : 'default'
            }
          />
        ))}
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
  grid-template-columns: 0.8fr 1.8fr 1.3fr 1fr 1fr 1fr 1fr;

  justify-content: center;
  justify-items: center;
  align-items: center;

  width: 100%;

  padding: 20px 110px 0 100px;
`;
