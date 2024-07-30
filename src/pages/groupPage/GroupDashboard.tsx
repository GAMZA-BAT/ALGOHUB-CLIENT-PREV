import { css } from '@emotion/react';

import ProblemBox from '@/pages/groupPage/components/ProblemBox';
import RankingBox from '@/pages/groupPage/components/RankingBox';

import { seperator } from '@/components/@common/SideContent';

import AlgoHubLogoS from '@/assets/img/AlgoHubLogoS.png';

const GroupDashboard = () => {
  return (
    <div css={Wrapper}>
      <section css={RankingWrapper}>
        <RankingBox ranking={2} name={'Hwang-do'} solved={18} src={AlgoHubLogoS} />
        <RankingBox ranking={1} name={'Hwang-do'} solved={18} src={AlgoHubLogoS} />
        <RankingBox ranking={3} name={'Hwang-do'} solved={18} src={AlgoHubLogoS} />
      </section>
      <p css={Title}>Today's Problem</p>
      <hr css={seperator} />
      <ProblemBox
        level={13}
        title={'ACM Craft'}
        duration={'2024.08.31 - 2024.08.31'}
        submitCnt={88}
        memberCnt={158}
        accuracy={70}
      />
      <ProblemBox
        level={20}
        title={'동적연결성과 쿼리'}
        duration={'2024.08.31 - 2024.08.31'}
        submitCnt={88}
        memberCnt={158}
        accuracy={70}
      />
      <ProblemBox
        level={10}
        title={'체스판 다시 칠하기'}
        duration={'2024.08.31 - 2024.08.31'}
        submitCnt={88}
        memberCnt={158}
        accuracy={70}
      />
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
