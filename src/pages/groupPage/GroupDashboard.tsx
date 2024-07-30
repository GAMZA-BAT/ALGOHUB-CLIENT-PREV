import { css } from '@emotion/react';

import RankingBox from '@/pages/groupPage/components/RankingBox';

import LevelIcon from '@/components/@common/LevelIcon';
import { Title, seperator } from '@/components/@common/SideContent';

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
      <LevelIcon level={3} />
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

const RankingWrapper = css`
  display: flex;
  align-items: end;
  justify-content: center;

  gap: 10px;
  padding-top: 20px;
  padding-bottom: 80px;
`;
