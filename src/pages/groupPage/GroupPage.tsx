import { css } from '@emotion/react';

import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import SideContent, { Detail } from '@/components/@common/SideContent';
import Navbar from '@/components/@common/navbar/Navbar';
import MaskIcon from '@/components/icon/MaskIcon';
import { TabList } from '@/components/tabs/TabList';

import AlgoHubLogoS from '@/assets/img/AlgoHubLogoS.png';

const GroupPage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const navigate = useNavigate();
  const isSetting = useLocation().pathname === '/group/setting';

  useEffect(() => {
    switch (selectedTab) {
      case 0:
        navigate('/group');
        break;
      case 1:
        navigate('./problem-list');
        break;
      case 2:
        navigate('./setting');
        break;
    }
  }, [selectedTab]);
  return (
    <>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <TabList.Dashboard />
        <TabList.ProblemList />
        <TabList.GroupSettings />
      </Navbar>
      <div css={Wrapper}>
        {isSetting ? (
          <Outlet />
        ) : (
          <>
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
            <article css={Container}>
              <Outlet />
            </article>
          </>
        )}
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
