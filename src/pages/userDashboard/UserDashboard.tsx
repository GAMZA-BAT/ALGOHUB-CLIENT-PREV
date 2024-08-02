import { css } from '@emotion/react';

import { useState } from 'react';

import SideContent from '@/components/@common/SideContent';
import WithAuth from '@/components/@common/auth/withAuth';
import Navbar from '@/components/@common/navbar/Navbar';
import { TabList } from '@/components/tabs/TabList';

import { AuthManager } from '@/datamanager/authManager';

import GroupList from './GroupList';

const UserDashboard = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const user = AuthManager.getInstance().getUser();
  return (
    <>
      <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
        <TabList.Dashboard />
        <TabList.CreateGroup />
        <TabList.JoinGroup />
      </Navbar>
      <div css={Container}>
        <section css={sideContainer}>
          <SideContent
            imageSrc={user.profileImage}
            title={user.nickname}
            detail={user.bjNickname}
          />
        </section>
        <section css={mainContainer}>
          <GroupList />
        </section>
      </div>
    </>
  );
};

export default WithAuth(UserDashboard);

const Container = css`
  display: flex;
  width: 100%;
  gap: 4px;
  padding: 2rem;
`;

const sideContainer = css`
  width: 30%;
`;
const mainContainer = css`
  width: 70%;
`;
