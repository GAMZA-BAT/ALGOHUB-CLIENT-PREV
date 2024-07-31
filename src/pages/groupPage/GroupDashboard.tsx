import { css } from '@emotion/react';

import { useLocation } from 'react-router-dom';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';
import RankingBox from '@/pages/groupPage/components/RankingBox';

import { seperator } from '@/components/@common/SideContent';

import { useGroupRanking } from '@/hooks/query/useGroupQuery';
import { useProblemDeadlineReached } from '@/hooks/query/useProblemQuery';

import { ProblemDataType } from '@/type/problem';

import AlgoHubLogoS from '@/assets/img/AlgoHubLogoS.png';

const GroupDashboard = () => {
  const groupId = +(localStorage.getItem('groupId') || '0');
  const {
    data: problemData,
    error: problemError,
    isLoading: isProblemLoading,
  } = useProblemDeadlineReached(groupId);

  // const {
  //   data: rankingData,
  //   error: rankingError,
  //   isLoading: isRankingLoading,
  // } = useGroupRanking(groupId);

  if (isProblemLoading) return <></>;
  return (
    <div css={Wrapper}>
      <section css={RankingWrapper}>
        <RankingBox ranking={2} name={'Hwang-do'} solved={18} src={AlgoHubLogoS} />
        <RankingBox ranking={1} name={'Hwang-do'} solved={18} src={AlgoHubLogoS} />
        <RankingBox ranking={3} name={'Hwang-do'} solved={18} src={AlgoHubLogoS} />
      </section>
      <p css={Title}>Today's Problem</p>
      <hr css={seperator} />
      {problemData.map((problem: ProblemDataType) => (
        <ProblemBox key={problem.problemId} problem={problem} />
      ))}
    </div>
  );
};

export default GroupDashboard;

const Wrapper = css`
  padding: 30px;
  margin-right: 10px;

  height: 100%;

  border: 1px solid black;
  border-radius: 15px;

  background-color: white;
`;

const Title = css`
  font-size: 2rem;
  font-weight: 600;

  margin-bottom: 1rem;
`;

const RankingWrapper = css`
  display: flex;
  align-items: end;
  justify-content: center;

  gap: 10px;
  padding-top: 20px;
  padding-bottom: 80px;
`;
