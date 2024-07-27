import React from 'react';

import Navbar from '@/components/@common/navbar/Navbar';
import { TabList } from '@/components/tabs/TabList';

const GroupDashboard = () => {
  return (
    <>
      <Navbar>
        <TabList.Dashboard />
        <TabList.CreateGroup />
        <TabList.JoinGroup />
      </Navbar>
    </>
  );
};

export default GroupDashboard;
