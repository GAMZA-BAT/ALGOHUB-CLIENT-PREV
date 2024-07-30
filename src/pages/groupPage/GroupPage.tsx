import { css } from '@emotion/react';

import { useState } from 'react';

import GroupDashboard from '@/pages/groupPage/GroupDashboard';
import ProblemList from '@/pages/groupPage/ProblemList';
import Setting from '@/pages/groupPage/Setting';

import SideContent, { Detail } from '@/components/@common/SideContent';
import Navbar from '@/components/@common/navbar/Navbar';
import MaskIcon from '@/components/icon/MaskIcon';
import { TabList } from '@/components/tabs/TabList';

import AlgoHubLogoS from '@/assets/img/AlgoHubLogoS.png';

const GroupPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const renderTsx = () => {
    switch (selectedTab) {
      case 0:
        return <GroupDashboard />;
      case 1:
        return <ProblemList />;
      case 2:
        return <Setting />;
    }
  };
  return (
    <>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <TabList.Dashboard />
        <TabList.ProblemList />
        <TabList.Settings />
      </Navbar>
      <div css={Wrapper}>
        <section css={GroupInfoContainer}>
          <SideContent
            imageSrc={AlgoHubLogoS}
            title="숭실대학교 여름방학 스터디"
            detail="2024.07.01 - 2024.08.31"
            description="애들아 열심히 하자 빠이팅"
          />
          <div css={MemberListWrapper}>
            <h1>Members</h1>
            <section css={MemberListContainer}>
              <section css={MemberContainer}>
                <MaskIcon width={80} height={80} src={AlgoHubLogoS} isCircle={true} />
                <h3 css={Detail}>j-nary</h3>
              </section>
            </section>
          </div>
        </section>
        <article css={Container}>{renderTsx()}</article>
      </div>
    </>
  );
};

export default GroupPage;

const Wrapper = css`
  display: flex;
  width: 100%;
`;

const GroupInfoContainer = css`
  width: 25%;
`;

const Container = css`
  width: 75%;
  padding: 0 1%;
`;

const MemberListWrapper = css`
  width: 100%;
  padding: 0 0 0 20px;
`;

const MemberListContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 100%;
  padding-top: 10px;
`;

const MemberContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
