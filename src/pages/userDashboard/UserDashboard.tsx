import { css } from '@emotion/react';

import { useState } from 'react';

import SideContent from '@/components/@common/SideContent';
import WithAuth from '@/components/@common/auth/WithAuth';
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
        <SideContent
          imageSrc={user.profileImage}
          title={user.nickname}
          detail={user.bjNickname}
          description="이거 안쓴다는 소문이.."
        />
        <GroupList />
      </div>
    </>
  );
};

export default WithAuth(UserDashboard);

const Container = css`
  display: flex;
  width: 100%;
  gap: 4px;
  padding: 8px;
`;

// const GroupContainer = css`
//   display: flex;
//   flex-direction: column;
//   width: 72%;
//   gap: 12px;
//   padding: 25px;
//   border: 1px solid black;
//   border-radius: 12px;
// `;

// const Title = css`
//   font-size: 28px;
//   font-weight: 600;
// `;
