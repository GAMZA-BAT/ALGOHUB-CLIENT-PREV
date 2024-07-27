import { css } from '@emotion/react';

import { useState } from 'react';

import GroupDashboard from '@/pages/groupPage/GroupDashboard';

import SideContent from '@/components/@common/SideContent';
import Navbar from '@/components/@common/navbar/Navbar';
import { TabList } from '@/components/tabs/TabList';

import AlgoHubLogoS from '@/assets/img/AlgoHubLogoS.png';

const GroupPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const renderTsx = () => {
    switch (selectedTab) {
      case 0:
        return <GroupDashboard />;
      case 1:
        return <GroupDashboard />;
      case 2:
        return <GroupDashboard />;
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
  padding: 0 5%;
`;

const Container = css`
  width: 75%;
  background-color: red;
  padding: 0 1%;
`;
