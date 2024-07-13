import Navbar from '@/components/@common/navbar/Navbar';
import { TabList } from '@/components/tabs/TabList';

const UserDashboard = () => {
  return (
    <Navbar>
      <TabList.Dashboard />
      <TabList.CreateGroup />
      <TabList.JoinGroup />
    </Navbar>
  );
};

export default UserDashboard;
